export const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Challenges", href: "#challenges" },
  { label: "Architecture", href: "#architecture" },
  { label: "Progress", href: "#progress" },
  { label: "Stack", href: "#stack" },
  { label: "Roadmap", href: "#roadmap" },
];

export const problemPoints = [
  "Handling retries when providers fail",
  "Preventing duplicate notifications",
  "Managing realtime delivery states",
  "Scaling websocket connections",
  "Orchestrating multi-channel delivery pipelines",
  "Scheduling delayed notifications reliably",
  "Tracking delivery status across providers",
  "Maintaining idempotent workflows",
  "Dealing with provider rate limits",
];

export const challenges = [
  {
    title: "Provider Reliability",
    description:
      "Push, email, and SMS gateways fail unpredictably. Apps need retry orchestration, exponential backoff, and failure recovery.",
    examples: ["Provider downtime", "Timeouts", "Invalid tokens", "Rate limiting"],
  },
  {
    title: "Duplicate Delivery",
    description:
      "Without idempotent workflows, users receive the same notification multiple times from retries, replays, or ack failures.",
    examples: ["Worker retries", "Queue replay", "Network interruptions"],
  },
  {
    title: "Realtime Synchronization",
    description:
      "Websocket reconnections, stale presence, and missed events make reliable realtime delivery hard under load.",
    examples: ["Reconnections", "Stale state", "Missed events"],
  },
  {
    title: "Scaling Async Workloads",
    description:
      "Growing volume demands background workers, queues, concurrency control, and job retry orchestration.",
    examples: ["Workers", "Queues", "Concurrency", "Retries"],
  },
  {
    title: "Multi-Channel Complexity",
    description:
      "Push, email, in-app, scheduling, and fallbacks fragment business logic when managed independently.",
    examples: ["Push", "Email", "In-app", "Scheduling"],
  },
  {
    title: "Observability Gaps",
    description:
      "Without delivery visibility, debugging production notification failures becomes extremely difficult.",
    examples: ["Delivery status", "Retries", "Provider responses"],
  },
];

export const solutions = [
  {
    title: "Unified Infrastructure",
    description: "Single platform for realtime in-app, push, and email notifications.",
  },
  {
    title: "Asynchronous Processing",
    description: "Redis and BullMQ workers for reliable background job execution.",
  },
  {
    title: "Delivery State Management",
    description: "Lifecycle tracking: pending, processing, delivered, failed, retried.",
  },
  {
    title: "Retry Orchestration",
    description: "Configurable retry strategies with automatic failure handling.",
  },
  {
    title: "Idempotent Pipelines",
    description: "Transactional workflows prevent duplicate deliveries.",
  },
  {
    title: "Realtime Gateway",
    description: "Socket.IO powered live in-app notification delivery.",
  },
  {
    title: "Provider Abstraction",
    description: "Modular adapters for push, email, and future SMS providers.",
  },
  {
    title: "Developer-First APIs",
    description: "Clean APIs, SDK extensibility, and modular backend design.",
  },
];

export const architectureLayers = [
  {
    name: "API Layer",
    role: "Authentication, validation, notification creation, channel orchestration.",
  },
  {
    name: "Queue & Workers",
    role: "BullMQ + Redis for retries, concurrency, delayed jobs, and failure recovery.",
  },
  {
    name: "Provider Layer",
    role: "Email, push, and realtime in-app delivery through abstracted adapters.",
  },
  {
    name: "Realtime Gateway",
    role: "Socket.IO gateway for live delivery updates and notification events.",
  },
  {
    name: "Persistence",
    role: "PostgreSQL for metadata, delivery states, retries, and preferences.",
  },
];

export const coreComponents = [
  { name: "Notification Engine", desc: "Central orchestration routing notifications across channels." },
  { name: "Delivery Workers", desc: "Background workers processing queued jobs asynchronously." },
  { name: "Retry Engine", desc: "Retry scheduling, exponential backoff, and failure management." },
  { name: "Realtime Gateway", desc: "Websocket connections and live notification delivery." },
  { name: "Provider Adapters", desc: "Third-party providers behind modular interfaces." },
  { name: "Delivery State Machine", desc: "Lifecycle tracking for every notification event." },
  { name: "Analytics Layer", desc: "Delivery metrics and provider response tracking." },
];

export const backendProgress = [
  {
    key: "Modular NestJS Backend Architecture",
    value: "done",
  },
  {
    key: "PostgreSQL + Drizzle ORM Schema Design",
    value: "done",
  },
  {
    key: "Redis Integration & BullMQ Queue Processing",
    value: "done",
  },
  {
    key: "Notification Delivery Pipelines",
    value: "done",
  },
  {
    key: "Delivery State Machine Implementation",
    value: "done",
  },
  {
    key: "Idempotent Workflow Design",
    value: "done",
  },
  {
    key: "Provider Abstraction Architecture",
    value: "done",
  },
  {
    key: "Worker-based Asynchronous Processing",
    value: "done",
  },
  {
    key: "REST API Development",
    value: "done",
  },
  {
    key: "WebSocket Realtime Gateway Foundation",
    value: "done",
  },
  {
    key: "DTO Validation with class-validator",
    value: "done",
  },
];

export const devopsProgress = [
  {
    key: "Environment-based Configuration",
    value: "done",
  },
  {
    key: "Queue-worker Separation Architecture",
    value: "done",
  },
  {
    key: "Scalable Service-oriented Structure",
    value: "done",
  },
  {
    key: "CI/CD Planning & Deployment Workflows",
    value: "in progress",
  },
  {
    key: "dockerized Local Development Environment",
    value: "in progress",
  }
];

export const frontendProgress = [
  {
    key: "Admin Dashboard UI",
    value: "in progress",
  },
  {
    key: "Notification Analytics Interface",
    value: "in progress",
  },
  {
    key: "Delivery Monitoring Views",
    value: "in progress",
  },
  {
    key: "Realtime Delivery Updates",
    value: "in progress",
  },
  {
    key: "Developer Onboarding Experience",
    value: "in progress",
  },
];
export const techStack = [
  { category: "Backend", items: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Redis", "BullMQ", "Socket.IO"] },
  { category: "Infrastructure", items: ["Docker", "GitHub Actions", "CI/CD Pipelines"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
];

export const heroPipeline = [
  { id: "api", label: "API" },
  { id: "queue", label: "Queue" },
  { id: "workers", label: "Workers" },
  { id: "providers", label: "Providers" },
  { id: "gateway", label: "Realtime Gateway" },
];

export const roadmapFeatures = [
  "Smart Orchestration",
  "Server-side and Client-side SDKs",
  "Push notification delivery",
  "Email notification delivery",
  "Realtime in-app notifications",
  "Retry orchestration",
  "Delivery tracking",
  "Notification scheduling",
  "Realtime status updates",
  "Multi-channel workflows",
  //"Dashboard analytics",
];

export const highlightStack = ["NestJS", "Redis", "BullMQ", "PostgreSQL", "Socket.IO", "Docker", "TypeScript"];
