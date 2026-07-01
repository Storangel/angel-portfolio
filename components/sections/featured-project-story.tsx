import { ProjectStory } from "@/components/sections/project-story";
import type { Project } from "@/types/content";

interface FeaturedProjectStoryProps {
  project: Project;
  isFirst?: boolean;
}

export function FeaturedProjectStory({
  project,
  isFirst = false,
}: FeaturedProjectStoryProps) {
  return (
    <ProjectStory
      project={project}
      showFeaturedLabel={isFirst}
      showExploreCta
    />
  );
}
