import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/app/lib/data';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="glass-card overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)] hover:border-primary">
      <Link href={`/projects/${project.id}`}>
        <div className="relative aspect-video">
          {project.image && (
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              data-ai-hint={project.image.imageHint}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-primary font-medium pt-2">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
