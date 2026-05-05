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
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("slideshow").title("Home Slideshow"),
            S.divider(),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("serviceArea").title("Service Areas"),
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("review").title("Reviews"),
            S.documentTypeListItem("post").title("Blog Posts"),
            S.documentTypeListItem("teamMember").title("Team Members"),
          ]),
    }),
    visionTool(),
    media(),
  ],
  schema: { types: schemaTypes },
});
