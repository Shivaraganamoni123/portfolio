'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { getAIGeneratedDescription } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import type { Project } from '@/app/lib/data';
import { useToast } from '@/hooks/use-toast';


function GenerateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="mr-2 h-4 w-4" />
      )}
      Generate with AI
    </Button>
  );
}

interface AIProjectDescriptionGeneratorProps {
  project: Project;
}

export function AIProjectDescriptionGenerator({ project }: AIProjectDescriptionGeneratorProps) {
  const [generatedDescription, setGeneratedDescription] = useState('');
  const { toast } = useToast();

  const handleGenerate = async (formData: FormData) => {
    const projectDetails = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      technologies: formData.get('technologies') as string,
      keyFeatures: formData.get('keyFeatures') as string,
    };
    
    setGeneratedDescription('Generating...');

    const result = await getAIGeneratedDescription(projectDetails);
    if (result.success && result.description) {
      setGeneratedDescription(result.description);
      toast({
        title: "Success!",
        description: "New project description generated."
      })
    } else {
      setGeneratedDescription('');
      toast({
        title: "Error",
        description: result.error || "Failed to generate description.",
        variant: 'destructive'
      })
    }
  };

  return (
    <Card className="glass-card border-dashed">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-accent" />
          AI Project Description Generator
        </CardTitle>
        <CardDescription>
          Use AI to craft a compelling short description for your project. Fill in the details below and let the magic happen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <form action={handleGenerate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input id="title" name="title" defaultValue={project.title} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Brief Description / Goal</Label>
              <Textarea id="description" name="description" defaultValue={project.longDescription} rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="technologies">Technologies Used (comma-separated)</Label>
              <Input id="technologies" name="technologies" defaultValue={project.technologies.join(', ')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="keyFeatures">Key Features (comma-separated)</Label>
              <Input id="keyFeatures" name="keyFeatures" placeholder="e.g., Real-time collaboration, User authentication" />
            </div>
            <GenerateButton />
          </form>
          <div className="space-y-2 flex flex-col">
            <Label htmlFor="generated-description">Generated Description</Label>
            <Textarea
              id="generated-description"
              readOnly
              value={generatedDescription}
              placeholder="AI-generated description will appear here..."
              className="h-full min-h-[200px] flex-grow bg-background"
              rows={10}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
