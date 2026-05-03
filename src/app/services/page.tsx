import { getAllServices } from "@/sanity/queries";
import ServicesContent from "./ServicesContent";

export default async function ServicesPage() {
  const services = await getAllServices();
  return <ServicesContent services={services} />;
}
