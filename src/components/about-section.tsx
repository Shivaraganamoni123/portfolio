import Image from 'next/image';
import { profileData } from '@/app/lib/data';
import { Card } from './ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            {profileData.profilePicture && (
              <Card className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-lg">
                <Image
                  src={profileData.profilePicture.imageUrl}
                  alt={profileData.profilePicture.description}
                  data-ai-hint={profileData.profilePicture.imageHint}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </Card>
            )}
          </div>
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold font-headline">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              {profileData.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
