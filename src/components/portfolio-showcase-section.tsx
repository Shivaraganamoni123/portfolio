import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectsSection } from '@/components/projects-section';
import { CertificationsSection } from '@/components/certifications-section';
import { TechStackSection } from '@/components/tech-stack-section';
import { Briefcase, Award, Cpu } from 'lucide-react';

export function PortfolioShowcaseSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline">Portfolio Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated look at my work, skills, and professional achievements.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <div className="flex justify-center">
            <TabsList className="glass-card mb-12 p-2 h-auto">
              <TabsTrigger value="projects" className="p-3">
                <Briefcase className="mr-2 h-5 w-5" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="certifications" className="p-3">
                <Award className="mr-2 h-5 w-5" />
                Certifications
              </TabsTrigger>
              <TabsTrigger value="tech-stack" className="p-3">
                <Cpu className="mr-2 h-5 w-5" />
                Tech Stack
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="projects">
            {/* The sections already have their own padding, so we can remove it from here. */}
            <ProjectsSection />
          </TabsContent>
          <TabsContent value="certifications">
            <CertificationsSection />
          </TabsContent>
          <TabsContent value="tech-stack">
            <TechStackSection />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
