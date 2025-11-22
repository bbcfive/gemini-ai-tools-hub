"use client";

import { useState } from "react";
import { CTAForm } from "@/components/CTAForm";
import { HeroMatrix } from "@/components/HeroMatrix";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { TimelineGrid } from "@/components/TimelineGrid";
import { ToolGallery } from "@/components/ToolGallery";

const heroStats = [
  { value: "54+", label: "Atomic capabilities integrated" },
  { value: "172ms", label: "Average response latency" },
  { value: "30%", label: "Development efficiency boost" }
];

const visionCards = [
  {
    title: "Semantic Prism",
    detail: "Self-calibrates the input-think-output triangle so reasoning stays consistent in ambiguous contexts."
  },
  {
    title: "Modules as a Service",
    detail: "Break atomic abilities into drag-and-drop modules so teams can compose AI flows inside the Hub."
  },
  {
    title: "Multimodal Interop",
    detail: "Built-in vector memory plus audio/video adapters for content, design, and support scenarios."
  }
];

const techBullets = [
  "Tri-matrix core: perception, planning, and execution reasoning paths in parallel",
  "Prism Memory: cross-modal vector cache with < 20 ms refresh",
  "Adaptive Plugins: auto load/unload tools based on context"
];

const pyramid = [
  "Core Model · Gemini3 Pro",
  "Semantic Service Mesh",
  "Plugin & Data Fabric",
  "Workflow Orchestrator",
  "Industry Playbooks"
];

const trendingKeywords = ["Semantic search", "Content automation", "Support bot", "Design generation", "Multimodal", "Workflow"];

const categoryCallouts = [
  {
    label: "Multimodal Models",
    headline: "Unified image-text-audio-video reasoning",
    detail: "Powered by the Gemini3 Pro semantic core"
  },
  {
    label: "Plugin Ecosystem",
    headline: "Plug-and-play tool orchestration",
    detail: "Prism Memory · WaveMesh"
  },
  {
    label: "Industry Templates",
    headline: "Content, support, and ops coverage",
    detail: "Fresh playbooks every week"
  }
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background dark:bg-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-24 px-6 py-16">
        <section className="hero-grid rounded-[32px] border border-slate-200/60 bg-white/80 p-10 shadow-[0_25px_70px_rgba(15,23,42,0.18)] dark:border-slate-800/70 dark:bg-slate-900/70">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand dark:border-slate-700">
                AI Tool Hub
                <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[11px] text-brand">Gemini3 Pro</span>
              </div>
              <div>
                <h1 className="text-4xl font-semibold text-slate-900 dark:text-white lg:text-5xl">
                  Discover, orchestrate, and launch your <span className="text-brand">AI tool universe</span>
                </h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  Inspired by the Toolify layout, the Gemini3 Pro AI Hub aggregates models, plugins, and scenario templates with unified search, filters, and workflow orchestration.
                </p>
              </div>
              <div className="space-y-4">
                <label className="relative block">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search tools, plugins, or industry scenarios..."
                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-12 py-4 text-base text-slate-900 shadow-inner shadow-slate-200 focus:border-brand focus:outline-none dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                  />
                </label>
                <div className="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-300">
                  <span>Trending searches:</span>
                  {trendingKeywords.map((keyword) => (
                    <button
                      key={keyword}
                      type="button"
                      onClick={() => setSearchTerm(keyword)}
                      className="rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700 dark:text-slate-200"
                    >
                      #{keyword}
                    </button>
                  ))}
                </div>
              </div>
              <dl className="grid gap-6 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</dt>
                    <dd className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_25px_55px_rgba(108,99,241,0.18)] dark:border-slate-800 dark:bg-slate-950/80">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                <span>Gemini3 Pro Semantic Matrix</span>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">Live</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Dynamic attention weights</p>
              <HeroMatrix />
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Multimodal routing</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>Image · Semantic spectrum alignment</li>
                  <li>Text · Structured reasoning</li>
                  <li>Voice · Low-latency transcription</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {categoryCallouts.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-200/60 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">{item.label}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{item.headline}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
            </article>
          ))}
        </section>

        <section id="vision" className="space-y-10">
          <SectionHeading
            eyebrow="Product Vision"
            title="Gemini3 Pro = Semantic triangle + tooling ecosystem"
            description="The semantic prism powers an orchestratable ecosystem where models, plugins, data, and industry templates collaborate inside the Hub."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {visionCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/70">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{card.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="toolset" className="space-y-12">
          <SectionHeading
            eyebrow="Tool Directory"
            title="Core tools inside the AI Hub"
            description="Built around the Gemini3 Pro semantic core, covering model services, data plugins, and scenario templates end to end."
          />
          <ToolGallery searchTerm={searchTerm} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white/90 p-8 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Gemini3 Pro Technical Highlights</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Three-layer semantic engine</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {techBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-transparent bg-gradient-to-br from-brand/15 via-brand-strong/10 to-transparent p-8 text-slate-900 shadow-xl dark:text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">AI Hub Capability Map</p>
            <h3 className="mt-4 text-2xl font-semibold">Five-layer pyramid from core to scenario</h3>
            <ol className="mt-5 space-y-3 text-base font-medium">
              {pyramid.map((item, index) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 font-semibold dark:border-white/40">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section id="workflow" className="space-y-10">
          <SectionHeading eyebrow="Adaptive Workflows" title="Design, build, and operate in one place" />
          <TimelineGrid />
        </section>

        <section>
          <Testimonials />
        </section>

        <section id="cta" className="section-surface rounded-[32px] border border-slate-200/70 p-10 dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Join the beta</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Build your dedicated AI Hub</h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-200">
                Request access to the Gemini3 Pro private beta and unlock multimodal reasoning, plugin orchestration, and industry templates in one workspace.
              </p>
            </div>
            <CTAForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/80 px-6 py-10 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="text-base text-slate-900 dark:text-white">Gemini3 Pro AI Hub</strong>
            <p className="mt-2 max-w-xl">
              A next-gen AI tool station inspired by the new Gemini3 Pro paradigm—connecting models, plugins, data, and collaboration.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-brand">
              Technical Paper
            </a>
            <a href="#" className="hover:text-brand">
              API Docs
            </a>
            <a href="#" className="hover:text-brand">
              Terms
            </a>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs text-slate-500">© 2024 Gemini3 Pro Collective. All rights reserved.</p>
      </footer>
    </div>
  );
}
