export const SERVICE_OPTIONS = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "storage", label: "Battery Storage" },
  { value: "maintenance", label: "General Maintenance" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];
