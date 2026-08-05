export const SERVICE_OPTIONS = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "solar-storage", label: "Solar Battery" },
  { value: "electrical", label: "Electrical Design" },
  { value: "maintenance", label: "General Maintenance" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];
