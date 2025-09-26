import { projectsData } from '@/app/lib/data';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline">My Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Here's a selection of projects I've worked on. Feel free to explore them.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
