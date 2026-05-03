import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { apiVersion, dataset, projectId } from "./env";
import { schemaTypes } from "./schemas";

export const sanityConfig = defineConfig({
  projectId,
  dataset,
  apiVersion,
  title: "Aibishter Solar",
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), media()],
  schema: { types: schemaTypes },
});
