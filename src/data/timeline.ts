export interface TimelineStep {
  title: string;
  detail: string;
  result: string;
}

export const timelineSteps: TimelineStep[] = [
  {
    title: "蓝图设定",
    detail: "导入行业知识图谱，利用 Gemini3 Pro 自动生成目标工作流。",
    result: "1 小时完成方案共创"
  },
  {
    title: "插件编排",
    detail: "通过 Hub 拖拽连接模型、工具与 API，支持实时预览。",
    result: "零代码完成流程搭建"
  },
  {
    title: "安全治理",
    detail: "启用语义防护、内容审计与权限隔离策略。",
    result: "合规开箱即用"
  },
  {
    title: "上线与监控",
    detail: "一键部署到团队环境，实时监控吞吐、时延与转化。",
    result: "运营效率提升 30%"
  }
];
