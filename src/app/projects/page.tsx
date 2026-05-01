import { getAllProjects } from "@/sanity/queries";
import ProjectsContent from "./ProjectsContent";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const currentYear = new Date().getFullYear();
  return <ProjectsContent projects={projects} currentYear={currentYear} />;
}
