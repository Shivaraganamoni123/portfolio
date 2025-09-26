import { certificationsData } from '@/app/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Award, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-transparent first:pt-0">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional certifications and credentials.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <Card key={cert.title} className="glass-card flex flex-col overflow-hidden">
              {cert.image && (
                 <div className="relative aspect-video w-full overflow-hidden">
                    <Image 
                      src={cert.image.imageUrl}
                      alt={cert.image.description}
                      data-ai-hint={cert.image.imageHint}
                      fill
                      className="object-contain"
                    />
                 </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  
                  <div className="flex-grow flex items-end justify-end mt-4">
                    {cert.url && (
                      <Button asChild variant="link">
                        <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                          View Credential <LinkIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
