export type ToolCategory = "model" | "plugin" | "workflow" | "all";

export interface Tool {
  name: string;
  type: Exclude<ToolCategory, "all">;
  description: string;
  spec: string;
  tags: string[];
  badge?: string;
}

export const TOOL_CATEGORIES: Array<{ label: string; value: ToolCategory }> = [
  { label: "全部", value: "all" },
  { label: "模型服务", value: "model" },
  { label: "插件", value: "plugin" },
  { label: "工作流模板", value: "workflow" }
];

export const tools: Tool[] = [
  {
    name: "Gemini3 Core API",
    type: "model",
    description: "统一完成多模态推理的旗舰接口，支持语义三角动态温度调优。",
    spec: "吞吐 420 tok/s · SLA 99.7%",
    tags: ["多模态", "API", "推理"],
    badge: "旗舰"
  },
  {
    name: "Prism Memory Fabric",
    type: "plugin",
    description: "挂载在 Hub 的向量记忆插件，自动同步上下文与多团队知识。",
    spec: "扩展至 50M 条 embedding",
    tags: ["向量", "记忆", "知识库"],
    badge: "新"
  },
  {
    name: "Aurora Synth",
    type: "workflow",
    description: "内容团队专用模版，串联提示、审校与品牌声线检查。",
    spec: "平均节省 12 小时/迭代",
    tags: ["内容制作", "品牌", "工作流"]
  },
  {
    name: "WaveMesh Voice",
    type: "plugin",
    description: "语音到语义的极速通道，将实时语音流映射到 Gemini3 Pro。",
    spec: "延迟 90ms 内",
    tags: ["语音", "实时", "多模态"],
    badge: "热门"
  },
  {
    name: "Semantic Ops Dashboard",
    type: "workflow",
    description: "可视化监控面板，追踪模型使用、插件健康与工作流 SLA。",
    spec: "内置 12 种告警策略",
    tags: ["监控", "可视化", "运维"]
  },
  {
    name: "Context Forge",
    type: "model",
    description: "提示工程沙盒，自动生成并 A/B 测试多版本 Prompt。",
    spec: "智能评分 + 历史追溯",
    tags: ["Prompt", "实验", "优化"]
  }
];
