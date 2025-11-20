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
  { value: "54+", label: "原子能力适配" },
  { value: "172ms", label: "平均响应延迟" },
  { value: "30%", label: "研发效率提升" }
];

const visionCards = [
  {
    title: "语义三棱镜",
    detail: "以\"输入-思维-输出\"三角结构实时自校准，让模型在不确定场景中保持语义一致性。"
  },
  {
    title: "模块即服务",
    detail: "原子能力拆解为可编排的 Module，开发者通过 Hub 即可拖拽式构建 AI 流程。"
  },
  {
    title: "多模态互通",
    detail: "内置向量内存与音视频适配层，为内容、设计、客服等团队提供全模态解决方案。"
  }
];

const techBullets = [
  "三角矩阵内核：感知、规划、执行三条推理路径并行",
  "Prism Memory：跨模态向量记忆池，延迟刷新小于 20ms",
  "Adaptive Plugins：根据上下文自动加载/卸载工具"
];

const pyramid = [
  "Core Model · Gemini3 Pro",
  "Semantic Service Mesh",
  "Plugin & Data Fabric",
  "Workflow Orchestrator",
  "Industry Playbooks"
];

const trendingKeywords = ["语义搜索", "内容自动化", "客服机器人", "设计生成", "多模态", "工作流"];

const categoryCallouts = [
  {
    label: "多模态模型",
    headline: "统一图文音视频推理",
    detail: "Gemini3 Pro 语义底座"
  },
  {
    label: "插件生态",
    headline: "即插即用的工具编排",
    detail: "Prism Memory · WaveMesh"
  },
  {
    label: "行业模板",
    headline: "内容、客服、运营全覆盖",
    detail: "每周更新热门模版"
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
                AI 工具站
                <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[11px] text-brand">Gemini3 Pro</span>
              </div>
              <div>
                <h1 className="text-4xl font-semibold text-slate-900 dark:text-white lg:text-5xl">
                  发现、编排、上线你的 <span className="text-brand">AI 工具宇宙</span>
                </h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  参考 Toolify 的工具聚合排版，Gemini3 Pro AI Hub 汇聚模型、插件、场景模版，提供搜索、筛选与工作流编排的一体化体验。
                </p>
              </div>
              <div className="space-y-4">
                <label className="relative block">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="搜索工具、插件或行业场景……"
                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-12 py-4 text-base text-slate-900 shadow-inner shadow-slate-200 focus:border-brand focus:outline-none dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                  />
                </label>
                <div className="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-300">
                  <span>热门搜索：</span>
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
                <span>Gemini3 Pro 语义矩阵</span>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">实时</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">动态注意力权重</p>
              <HeroMatrix />
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">多模态路由</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>图像 · 语义光谱校准</li>
                  <li>文本 · 结构化推理</li>
                  <li>语音 · 低延迟转写</li>
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
            eyebrow="产品愿景"
            title="Gemini3 Pro = 语义三角 + 工具化生态"
            description="围绕语义三棱镜打造可编排生态，让模型、插件、数据与行业模板在 Hub 内无缝协作。"
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
            eyebrow="工具矩阵"
            title="AI Hub 中心工具"
            description="围绕 Gemini3 Pro 语义核心搭建，从底层模型服务、数据插件到场景模板完整覆盖。"
          />
          <ToolGallery searchTerm={searchTerm} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white/90 p-8 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Gemini3 Pro 技术要点</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">三层语义引擎</h3>
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
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">AI Hub 能力映射</p>
            <h3 className="mt-4 text-2xl font-semibold">从底层到场景的 5 层金字塔</h3>
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
          <SectionHeading eyebrow="动态工作流" title="设计—构建—运营一站式完成" />
          <TimelineGrid />
        </section>

        <section>
          <Testimonials />
        </section>

        <section id="cta" className="section-surface rounded-[32px] border border-slate-200/70 p-10 dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">立即加入</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">构建你的专属 AI Hub</h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-200">
                预约 Gemini3 Pro 私测，解锁多模态推理、插件编排与行业模板的一体化能力。
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
              以新词 Gemini3 Pro 为灵感的下一代 AI 工具站 · 连接模型、插件、数据与协作。
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-brand">
              技术白皮书
            </a>
            <a href="#" className="hover:text-brand">
              API 文档
            </a>
            <a href="#" className="hover:text-brand">
              使用条款
            </a>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs text-slate-500">© 2024 Gemini3 Pro Collective. All rights reserved.</p>
      </footer>
    </div>
  );
}
