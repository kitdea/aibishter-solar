import { serviceSchema } from "./service";
import { projectSchema } from "./project";
import { postSchema } from "./post";
import { serviceAreaSchema } from "./serviceArea";
import { reviewSchema } from "./review";
import { teamMemberSchema } from "./teamMember";

export const schemaTypes = [serviceSchema, serviceAreaSchema, reviewSchema, projectSchema, postSchema, teamMemberSchema];
