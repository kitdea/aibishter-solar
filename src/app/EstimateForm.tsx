"use client";

import { ArrowRight, CheckCircle2 } from "@/lib/icons";
import { motion } from "framer-motion";
import { useState, useId } from "react";
import { SERVICE_OPTIONS, ServiceValue } from "@/lib/constants";

interface EstimateFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: ServiceValue;
  message: string;
  _honey: string;
}

const INITIAL_ESTIMATE: EstimateFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "residential",
  message: "",
  _honey: "",
};

const inputClass =
  "w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all shadow-sm";

const labelClass =
  "text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider";

export default function EstimateForm() {
  const id = useId();
  const [form, setForm] = useState<EstimateFormState>(INITIAL_ESTIMATE);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL_ESTIMATE);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 py-12 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 size={48} className="text-green-500" aria-hidden="true" />
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Message Sent!</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">We&apos;ll get back to you within one business day.</p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent-blue font-semibold hover:underline text-sm"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form className="space-y-5 font-sans" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label htmlFor={`${id}-first`} className={labelClass}>
            First Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-first`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jane"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor={`${id}-last`} className={labelClass}>
            Last Name <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-last`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={form.lastName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email Address <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor={`${id}-phone`} className={labelClass}>Phone Number</label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor={`${id}-service`} className={labelClass}>Interested Service</label>
        <select
          id={`${id}-service`}
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} appearance-none`}
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor={`${id}-message`} className={labelClass}>
          Message <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Provide any specifications or details..."
        />
      </div>

      <input
        type="text"
        name="_honey"
        value={form._honey}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden"
      />

      {status === "error" && (
        <p role="alert" className="text-red-500 text-sm font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent-blue hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl px-4 py-4 mt-4 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
      >
        {status === "loading" ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Submit Inquiry <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </>
        )}
      </button>
    </form>
  );
}
