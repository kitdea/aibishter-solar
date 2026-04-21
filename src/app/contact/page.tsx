"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight, Sun, CheckCircle2 } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { useState, useId } from "react";

const SERVICE_OPTIONS = [
  { value: "residential", label: "Residential Solar" },
  { value: "commercial", label: "Commercial Solar" },
  { value: "storage", label: "Battery Storage" },
  { value: "maintenance", label: "General Maintenance" },
] as const;

type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: ServiceValue;
  message: string;
  _honey: string;
}

const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "residential",
  message: "",
  _honey: "",
};

const inputClass =
  "w-full bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent-yellow px-4 py-3 text-slate-900 dark:text-white focus:outline-none transition-colors rounded-tl-xl rounded-tr-xl";

const labelClass =
  "text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest";

export default function ContactPage() {
  const id = useId();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
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
      setForm(INITIAL_FORM);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">

      {/* Hero Banner */}
      <section
        aria-label="Contact page hero"
        className="relative h-[38vh] sm:h-[45vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-[3rem] overflow-hidden mb-14 md:mb-24"
      >
        <Image
          src="https://plus.unsplash.com/premium_photo-1678852331610-1c3906be7316?q=80&w=2030&auto=format&fit=crop"
          alt="Aerial view of solar panels on a rooftop"
          fill
          priority
          sizes="(max-width: 1280px) 98vw, 1280px"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-12 z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto md:mx-0"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-6">
              <Sun size={24} className="text-accent-yellow" aria-hidden="true" />
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">
                Aibishter Solar / Contact
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight md:leading-[0.9] font-poppins">
              Get In <span className="text-white/60">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section
        aria-label="Contact information and inquiry form"
        className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 md:gap-24 relative"
      >
        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="lg:w-1/3 flex flex-col gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Start your journey to zero bills.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              We guide homeowners and businesses to utilize their roof space for unparalleled energy
              efficiency. Reach out.
            </p>
          </div>

          <address className="not-italic space-y-8 grow">
            <div className="flex gap-4">
              <div className="text-accent-blue mt-1" aria-hidden="true"><MapPin size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Headquarters
                </h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">
                  123 Solar Way<br />Eco City, EC 90210
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent-yellow mt-1" aria-hidden="true"><Phone size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Direct Lines
                </h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">
                  <a href="tel:+18001234567" className="hover:text-accent-blue transition-colors">+1 (800) 123-4567</a>
                  <br />
                  <a href="tel:+15559876543" className="hover:text-accent-blue transition-colors">+1 (555) 987-6543</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent-blue mt-1" aria-hidden="true"><Mail size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Digital
                </h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">
                  <a href="mailto:info@aibishter.com" className="hover:text-accent-blue transition-colors">info@aibishter.com</a>
                  <br />
                  <a href="mailto:support@aibishter.com" className="hover:text-accent-blue transition-colors">support@aibishter.com</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent-yellow mt-1" aria-hidden="true"><Clock size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                  Hours
                </h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">
                  Mon – Fri: 8AM – 6PM<br />Sat &amp; Sun: Closed
                </p>
              </div>
            </div>
          </address>
        </motion.div>

        {/* Form Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
          }}
          className="lg:w-2/3 bg-white dark:bg-slate-800 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800"
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 font-poppins">
              Send a Message.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-sans">
              Our engineering consultants usually respond immediately during office hours.
            </p>
          </div>

          {/* Success State */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center gap-6 py-16 text-center"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 size={64} className="text-green-500" aria-hidden="true" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-poppins">
                  Message Sent!
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-sans">
                  Thank you for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-accent-blue font-semibold hover:underline font-sans"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact inquiry form"
              className="space-y-8 font-sans"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor={`${id}-first-name`} className={labelClass}>
                    First Name <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${id}-first-name`}
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
                <div className="space-y-2">
                  <label htmlFor={`${id}-last-name`} className={labelClass}>
                    Last Name <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${id}-last-name`}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
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
                <div className="space-y-2">
                  <label htmlFor={`${id}-phone`} className={labelClass}>
                    Phone Number
                  </label>
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

              <div className="space-y-2">
                <label htmlFor={`${id}-service`} className={labelClass}>
                  Interested Service
                </label>
                <select
                  id={`${id}-service`}
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
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

              {/* Error message */}
              {status === "error" && (
                <p role="alert" className="text-red-500 text-sm font-medium">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                aria-disabled={status === "loading"}
                className="w-full bg-accent-blue hover:bg-slate-900 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg rounded-full px-4 py-5 mt-4 transition-colors flex items-center justify-center gap-3 group shadow-xl"
              >
                {status === "loading" ? (
                  <>
                    <span
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      aria-hidden="true"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <ArrowRight
                      className="group-hover:translate-x-2 transition-transform"
                      size={20}
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </section>

    </div>
  );
}
