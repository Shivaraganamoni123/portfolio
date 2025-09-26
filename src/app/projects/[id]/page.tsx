import { projectsData } from '@/app/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AIProjectDescriptionGenerator } from '@/components/ai-description-generator';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4">
              <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
              <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>

            {project.detailImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.detailImage.imageUrl}
                  alt={project.detailImage.description}
                  data-ai-hint={project.detailImage.imageHint}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold font-headline">About this project</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>{project.longDescription}</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-headline">Links</h3>
                <div className="flex flex-col gap-2">
                  {project.liveUrl && (
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" /> Live Site
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="secondary">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub Repo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <AIProjectDescriptionGenerator project={project} />

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
