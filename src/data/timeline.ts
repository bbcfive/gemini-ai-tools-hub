export interface TimelineStep {
  title: string;
  detail: string;
  result: string;
}

export const timelineSteps: TimelineStep[] = [
  {
    title: "Blueprint Planning",
    detail: "Import industry knowledge graphs and let Gemini3 Pro auto-generate ideal workflows.",
    result: "Co-create a plan within 1 hour"
  },
  {
    title: "Plugin Orchestration",
    detail: "Drag-connect models, tools, and APIs inside the Hub with instant previews.",
    result: "Build flows with zero code"
  },
  {
    title: "Trust & Safety",
    detail: "Enable semantic guardrails, content audits, and permission isolation policies.",
    result: "Compliance-ready from day one"
  },
  {
    title: "Launch & Monitor",
    detail: "One-click deploy to the team environment with live throughput/latency tracking.",
    result: "30% improvement in operations"
  }
];
