import { certificationsData } from '@/app/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Award, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional certifications and credentials.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <Card key={cert.title} className="glass-card flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {cert.issuer} &bull; {cert.year}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex items-end justify-end">
                {cert.url && (
                  <Button asChild variant="link">
                    <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Credential <LinkIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
