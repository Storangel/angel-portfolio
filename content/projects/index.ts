import type { Project } from "@/types/content";
import { carliexCore } from "@/content/projects/carliex-core";
import { onyxDigital } from "@/content/projects/onyx-digital";
import { satDigital } from "@/content/projects/sat-digital";
import { ypzOs } from "@/content/projects/ypz-os";

export const projects: Project[] = [
  satDigital,
  carliexCore,
  onyxDigital,
  ypzOs,
];

export { satDigital, carliexCore, onyxDigital, ypzOs };
