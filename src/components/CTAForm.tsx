"use client";

import { FormEvent, useState } from "react";

export function CTAForm() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString() ?? "";
    const scenario = formData.get("scenario")?.toString() ?? "Unspecified";
    setMessage(`Request received from ${email}. Focus scenario: ${scenario || "Unspecified"}.`);
    event.currentTarget.reset();
    setTimeout(() => setMessage(null), 4000);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
        Work email
        <input
          type="email"
          name="email"
          required
          placeholder="team@gemini3.pro"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </label>
      <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
        Primary scenario
        <select
          name="scenario"
          required
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-brand focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="Content Production">Content Production</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Design & Creative">Design & Creative</option>
          <option value="Data Intelligence">Data Intelligence</option>
        </select>
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-strong px-6 py-3 text-base font-semibold text-white shadow-[0_15px_35px_rgba(108,99,241,0.35)] transition hover:translate-y-0.5"
      >
        Request Private Beta
      </button>
      {message && <p className="text-sm font-semibold text-brand">{message}</p>}
    </form>
  );
}
