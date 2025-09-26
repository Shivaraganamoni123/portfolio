import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { profileData } from '@/app/lib/data';

export function HeroSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] min-h-[500px] flex items-center justify-center text-center">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline gradient-text">
            {profileData.name}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {profileData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#portfolio">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
