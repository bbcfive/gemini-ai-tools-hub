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
  { label: "All", value: "all" },
  { label: "Model APIs", value: "model" },
  { label: "Plugins", value: "plugin" },
  { label: "Workflow Templates", value: "workflow" }
];

export const tools: Tool[] = [
  {
    name: "Gemini3 Core API",
    type: "model",
    description: "Flagship API for unified multimodal reasoning with semantic-triangle temperature tuning.",
    spec: "Throughput 420 tok/s · SLA 99.7%",
    tags: ["Multimodal", "API", "Inference"],
    badge: "Flagship"
  },
  {
    name: "Prism Memory Fabric",
    type: "plugin",
    description: "Vector-memory plugin that syncs context and team knowledge directly into the Hub.",
    spec: "Scales to 50M embeddings",
    tags: ["Vector", "Memory", "Knowledge Base"],
    badge: "New"
  },
  {
    name: "Aurora Synth",
    type: "workflow",
    description: "Content-team template chaining prompts, reviews, and brand voice checks.",
    spec: "Saves 12 hours per iteration on average",
    tags: ["Content", "Brand", "Workflow"]
  },
  {
    name: "WaveMesh Voice",
    type: "plugin",
    description: "Lightning path from speech to semantics, mapping live streams to Gemini3 Pro.",
    spec: "Latency under 90 ms",
    tags: ["Voice", "Realtime", "Multimodal"],
    badge: "Hot"
  },
  {
    name: "Semantic Ops Dashboard",
    type: "workflow",
    description: "Visual monitoring board for model usage, plugin health, and workflow SLAs.",
    spec: "12 built-in alert policies",
    tags: ["Monitoring", "Visualization", "Ops"]
  },
  {
    name: "Context Forge",
    type: "model",
    description: "Prompt-engineering sandbox that auto-generates and A/B tests multiple prompts.",
    spec: "Smart scoring + history trace",
    tags: ["Prompt", "Experiment", "Optimization"]
  }
];
