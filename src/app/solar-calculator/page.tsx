"use client";

import { useState, useCallback, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  Info,
  Leaf,
  RefreshCw,
  ShieldCheck,
  Sun,
  Zap,
} from "@/lib/icons";

// ─── Philippines Solar Constants ──────────────────────────────────────────────
const PH_PEAK_SUN_HOURS = 4.6; // avg peak sun hours / day (PAGASA data)
const MERALCO_RATE = 16.67;    // PHP / kWh (Meralco residential average)
const DEFAULT_PERF_RATIO = 80; // % – industry standard for PH climate

// ─── System Size Calculator State ─────────────────────────────────────────────
type SizingInput = {
  monthlyBillPHP: string;
  monthlyBillKWh: string;
  phpPerKWhr: string;
  daysPerWeek: string;
  opHours: string;
  pattern: "hourly" | "nighttime";
};

// ─── Savings Calculator State ──────────────────────────────────────────────────
type SavingsInput = {
  systemSizeKWp: string;
  phpPerKWhr: string;
  sunHours: string;
  performanceRate: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function toNum(v: string): number {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
}

function formatPHP(n: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function InputField({
  label,
  unit,
  value,
  onChange,
  type = "number",
  min,
  max,
  step,
  placeholder,
  hint,
}: {
  label: string;
  unit?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  min?: string;
  max?: string;
  step?: string;
  placeholder?: string;
  hint?: string;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1">
        {label}
        {hint && (
          <span title={hint} className="cursor-help text-slate-400 dark:text-slate-500 hover:text-accent-blue transition-colors">
            <Info size={12} />
          </span>
        )}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type={type}
          min={min}
          max={max}
          step={step ?? "any"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all text-sm font-medium"
        />
        {unit && (
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest w-10 shrink-0">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

function SelectField({
  label,
  unit,
  value,
  onChange,
  options,
}: {
  label: string;
  unit?: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all text-sm font-medium appearance-none"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {unit && (
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest w-10 shrink-0">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultBadge({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="flex items-center justify-between bg-accent-blue/10 dark:bg-accent-blue/20 border border-accent-blue/20 rounded-2xl px-6 py-4">
      <span className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-accent-blue">{value}</span>
        {unit && <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{unit}</span>}
      </div>
    </div>
  );
}

// ─── Calculator 1: System Size ─────────────────────────────────────────────────
function SystemSizeCalculator() {
  const defaultInput: SizingInput = {
    monthlyBillPHP: "",
    monthlyBillKWh: "",
    phpPerKWhr: String(MERALCO_RATE),
    daysPerWeek: "7",
    opHours: "8",
    pattern: "hourly",
  };
  const [input, setInput] = useState<SizingInput>(defaultInput);
  const [result, setResult] = useState<number | null>(null);

  const set = useCallback(
    (key: keyof SizingInput) => (v: string) => setInput((prev) => ({ ...prev, [key]: v })),
    []
  );

  const calculate = () => {
    const rate = toNum(input.phpPerKWhr) || MERALCO_RATE;
    const days = toNum(input.daysPerWeek) || 7;
    const opHours = toNum(input.opHours) || 8;

    // Determine monthly kWh
    let monthlyKWh = 0;
    if (toNum(input.monthlyBillKWh) > 0) {
      monthlyKWh = toNum(input.monthlyBillKWh);
    } else if (toNum(input.monthlyBillPHP) > 0) {
      monthlyKWh = toNum(input.monthlyBillPHP) / rate;
    }

    if (monthlyKWh <= 0) return;

    // Adjust for actual operational days in a month
    const dailyKWh = monthlyKWh / 30;

    // Effective daily solar production window (capped by 6am-6pm = 12 hrs max)
    const effectiveHours = Math.min(opHours, 12);

    // System size using PH peak sun hours and performance ratio
    // Account for nighttime pattern (battery losses ~10%)
    const batteryFactor = input.pattern === "nighttime" ? 0.9 : 1.0;
    const daysAdjust = days / 7;
    const systemKWp =
      dailyKWh /
      (PH_PEAK_SUN_HOURS * (DEFAULT_PERF_RATIO / 100) * daysAdjust * batteryFactor * (effectiveHours / 12));

    setResult(Math.round(systemKWp * 100) / 100);
  };

  const reset = () => {
    setInput(defaultInput);
    setResult(null);
  };

  const daysOptions = [
    { label: "7 days (everyday)", value: "7" },
    { label: "6 days", value: "6" },
    { label: "5 days (weekdays)", value: "5" },
    { label: "4 days", value: "4" },
    { label: "3 days", value: "3" },
    { label: "2 days (weekends)", value: "2" },
    { label: "1 day", value: "1" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 dark:bg-slate-800 px-8 py-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
          <Sun size={20} className="text-accent-blue" />
        </div>
        <div>
          <h2 className="text-white font-bold text-xl tracking-tight font-poppins">
            Solar System Size Calculator
          </h2>
          <p className="text-slate-400 text-xs mt-0.5 uppercase tracking-widest">Philippines — Meralco Service Area</p>
        </div>
      </div>

      <div className="p-8 space-y-5">
        {/* Bill inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            label="Monthly Electricity Bill (PHP)"
            unit="PHP"
            value={input.monthlyBillPHP}
            onChange={set("monthlyBillPHP")}
            placeholder="e.g. 5,000"
            min="0"
            hint="Enter your total monthly electricity bill in Philippine Peso. Leave blank if entering kWh directly."
          />
          <InputField
            label="Monthly Electricity Bill (kWhe)"
            unit="kWhe"
            value={input.monthlyBillKWh}
            onChange={set("monthlyBillKWh")}
            placeholder="e.g. 300"
            min="0"
            hint="Enter your monthly consumption in kilowatt-hours. Overrides the PHP bill field if filled."
          />
        </div>

        <InputField
          label="PHP per kWhr"
          unit="PHP"
          value={input.phpPerKWhr}
          onChange={set("phpPerKWhr")}
          placeholder={String(MERALCO_RATE)}
          min="0"
          step="0.01"
          hint="Check your Meralco or distribution utility bill. Average residential rate is PHP 16.67/kWh."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectField
            label="Operational Days per Week"
            value={input.daysPerWeek}
            onChange={set("daysPerWeek")}
            options={daysOptions}
          />
          <InputField
            label="Operational Hours (6am – 6pm)"
            unit="hrs"
            value={input.opHours}
            onChange={set("opHours")}
            placeholder="8"
            min="1"
            max="12"
            step="0.5"
            hint="How many hours per day does your household/business operate during solar production hours?"
          />
        </div>

        {/* Pattern Toggle */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Operation Pattern
          </span>
          <div className="flex rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 w-fit">
            <button
              type="button"
              onClick={() => set("pattern")("hourly")}
              className={`px-5 py-2.5 text-sm font-bold transition-all ${
                input.pattern === "hourly"
                  ? "bg-accent-blue text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Hourly
            </button>
            <button
              type="button"
              onClick={() => set("pattern")("nighttime")}
              className={`px-5 py-2.5 text-sm font-bold transition-all ${
                input.pattern === "nighttime"
                  ? "bg-accent-blue text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Nighttime (Battery)
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={calculate}
            className="flex-1 bg-accent-blue hover:bg-blue-700 text-white font-bold rounded-xl px-6 py-3.5 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <Calculator size={18} /> Calculate
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset"
            className="p-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all text-slate-600 dark:text-slate-300"
          >
            <RefreshCw size={18} />
          </button>
        </div>

        {/* Result */}
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ResultBadge label="Recommended System Size" value={result.toFixed(2)} unit="kWp" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Calculator 2: Savings ─────────────────────────────────────────────────────
function SavingsCalculator() {
  const defaultInput: SavingsInput = {
    systemSizeKWp: "3",
    phpPerKWhr: String(MERALCO_RATE),
    sunHours: String(PH_PEAK_SUN_HOURS),
    performanceRate: String(DEFAULT_PERF_RATIO),
  };
  const [input, setInput] = useState<SavingsInput>(defaultInput);
  const [result, setResult] = useState<number | null>(null);

  const set = useCallback(
    (key: keyof SavingsInput) => (v: string) => setInput((prev) => ({ ...prev, [key]: v })),
    []
  );

  const sliderKWp = toNum(input.systemSizeKWp);

  const calculate = () => {
    const size = toNum(input.systemSizeKWp);
    const rate = toNum(input.phpPerKWhr);
    const sun = toNum(input.sunHours);
    const perf = toNum(input.performanceRate);

    if (!size || !rate || !sun || !perf) return;

    // Monthly energy (kWh) = System Size × Peak Sun Hours × Performance Ratio × 30 days
    const monthlyKWh = size * sun * (perf / 100) * 30;
    const monthlySavings = monthlyKWh * rate;
    setResult(Math.round(monthlySavings * 100) / 100);
  };

  const reset = () => {
    setInput(defaultInput);
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 dark:bg-slate-800 px-8 py-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
          <Zap size={20} className="text-green-400" />
        </div>
        <div>
          <h2 className="text-white font-bold text-xl tracking-tight font-poppins">
            Solar Energy Savings Calculator
          </h2>
          <p className="text-slate-400 text-xs mt-0.5 uppercase tracking-widest">Estimated Monthly Savings</p>
        </div>
      </div>

      <div className="p-8 space-y-5">
        {/* Slider for system size */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Solar System Size
            </span>
            <span className="text-sm font-bold text-accent-blue">{sliderKWp} kWp</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="100"
            step="0.5"
            value={input.systemSizeKWp}
            onChange={(e) => set("systemSizeKWp")(e.target.value)}
            className="w-full h-2 rounded-full appearance-none bg-slate-200 dark:bg-slate-700 accent-accent-blue cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span>0.5 kWp</span>
            <span>100 kWp</span>
          </div>
          {/* Also allow direct input */}
          <InputField
            label="Or Enter Directly"
            unit="kWp"
            value={input.systemSizeKWp}
            onChange={set("systemSizeKWp")}
            placeholder="e.g. 3"
            min="0.5"
            max="100"
            step="0.5"
            hint="kWp = kilowatt-peak. This is the rated output of your solar panel array under standard test conditions."
          />
        </div>

        <InputField
          label="PHP per kWhr"
          unit="PHP"
          value={input.phpPerKWhr}
          onChange={set("phpPerKWhr")}
          placeholder={String(MERALCO_RATE)}
          min="0"
          step="0.01"
          hint="Your distribution utility's rate per kilowatt-hour. Default is Meralco residential average."
        />

        <InputField
          label="Sunhours Average per Day"
          unit="hrs"
          value={input.sunHours}
          onChange={set("sunHours")}
          placeholder={String(PH_PEAK_SUN_HOURS)}
          min="1"
          max="8"
          step="0.1"
          hint="Average peak sun hours for the Philippines is 4.6 hrs/day based on PAGASA solar radiation data."
        />

        <InputField
          label="Performance Rate"
          unit="%"
          value={input.performanceRate}
          onChange={set("performanceRate")}
          placeholder={String(DEFAULT_PERF_RATIO)}
          min="50"
          max="100"
          step="1"
          hint="System performance ratio accounts for heat losses, wiring, shading, and inverter efficiency. Typical range: 75–85% for the Philippines."
        />

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={calculate}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl px-6 py-3.5 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <Zap size={18} /> Calculate Savings
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset"
            className="p-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all text-slate-600 dark:text-slate-300"
          >
            <RefreshCw size={18} />
          </button>
        </div>

        {/* Result */}
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 rounded-2xl px-6 py-4">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
                Estimated Monthly Savings
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatPHP(result)}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Annual Savings</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{formatPHP(result * 12)}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">10-Year Savings</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{formatPHP(result * 120)}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SolarCalculatorPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">

      {/* Hero Banner */}
      <section className="relative min-h-[50vh] w-full mx-auto max-w-[98%] rounded-4xl md:rounded-[3rem] overflow-hidden mb-20">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Solar panels on rooftop in the Philippines — Aibishter Solar Calculator"
          fill
          priority
          suppressHydrationWarning
          className="object-cover object-center scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-14 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-5">
              <Calculator size={20} className="text-accent-blue" suppressHydrationWarning />
              <span className="uppercase tracking-widest text-xs font-bold text-white/70">
                Aibishter Solar / Solar Calculator
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] font-poppins">
              Know your numbers<br />
              <span className="text-white/60">before you invest.</span>
            </h1>
            <p className="mt-6 text-white/80 max-w-lg font-sans leading-relaxed text-sm md:text-base">
              Use our free, Philippines-specific solar calculators to estimate the right system
              size and projected monthly savings — powered by PAGASA sun-hour data and Meralco
              reference rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Sun size={20} />, label: "Avg. Peak Sun Hours", value: "4.6 hrs/day", note: "Philippines PAGASA" },
            { icon: <Zap size={20} />, label: "Meralco Ref. Rate", value: "PHP 16.67/kWh", note: "Residential average" },
            { icon: <Leaf size={20} />, label: "System Performance", value: "75–85%", note: "PH climate-adjusted" },
            { icon: <ShieldCheck size={20} />, label: "Panel Warranty", value: "25 Years", note: "Manufacturer guarantee" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="text-accent-blue">{stat.icon}</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-1">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{stat.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{stat.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Calculators */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">Free Tools</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 font-poppins">
              Two calculators,<br />
              <span className="text-slate-400 dark:text-slate-500 font-normal">all the answers you need.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
            Step 1: Find out what system size you need. Step 2: See how much you&apos;ll save every
            month. Both tailored for the Philippine grid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SystemSizeCalculator />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SavingsCalculator />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 font-poppins">
            How the calculations work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "System Size Formula",
                desc: "System Size (kWp) = Daily kWh ÷ (Peak Sun Hours × Performance Ratio). We use 4.6 hrs and 80% as Philippine defaults.",
              },
              {
                step: "02",
                title: "Savings Formula",
                desc: "Monthly Savings = System Size × PHP/kWh × Sun Hours × 30 days × Performance Rate. Based on net metering under RA 9513.",
              },
              {
                step: "03",
                title: "Philippine Context",
                desc: "Rates sourced from Meralco's published residential tariff. Sun hours from PAGASA solar radiation atlas. Results are estimates — actual savings vary.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-4xl font-bold text-slate-100 dark:text-slate-800 font-poppins">{item.step}</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white -mt-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-3xl p-8 flex gap-5">
          <div className="text-amber-500 mt-0.5 shrink-0">
            <Info size={22} suppressHydrationWarning />
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-800 dark:text-amber-400 mb-2">
              Important Disclaimer
            </h3>
            <p className="text-sm text-amber-700 dark:text-amber-500 leading-relaxed">
              All results generated by these calculators are <strong>estimates only</strong> and
              are provided for general informational purposes. Actual system requirements, energy
              production, and savings will vary based on roof orientation, shading, local
              distribution utility rates, metering configuration, panel degradation, and
              installation-specific conditions.
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-500 leading-relaxed mt-2">
              Electricity rates are based on published Meralco residential tariffs as of the date
              of this tool&apos;s creation and are subject to change without notice. Peak sun-hour
              averages are sourced from PAGASA solar radiation data. These calculations do not
              constitute a formal energy audit or engineering assessment.{" "}
              <strong>
                Always consult a licensed solar energy engineer before making any investment
                decisions.
              </strong>
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-500 leading-relaxed mt-2">
              Aibishter Engineering Services is not liable for any financial decisions made solely
              on the basis of these calculator outputs. For an accurate, site-specific assessment,{" "}
              <Link href="/contact" className="font-bold underline hover:text-amber-900 dark:hover:text-amber-300 transition-colors">
                request a free consultation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[95%] mx-auto px-4 md:px-12 mb-8">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-8">
          <div className="absolute top-0 right-0 opacity-10 blur-3xl rounded-full w-96 h-96 bg-accent-blue pointer-events-none -translate-y-1/3 translate-x-1/3" />
          <div className="relative z-10 max-w-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3 block">
              Next Step
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-poppins mb-4">
              Ready for a precise<br />solar assessment?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our team of licensed solar engineers will visit your site, assess your roof, and
              produce a detailed energy and financial model — completely free of charge.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-accent-blue hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all flex items-center gap-2 group shadow-lg hover:shadow-xl text-sm"
            >
              Get Free Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
