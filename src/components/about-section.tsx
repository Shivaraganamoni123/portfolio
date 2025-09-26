'use client';
import Image from 'next/image';
import { profileData } from '@/app/lib/data';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-transparent">
      <motion.div
        className="container mx-auto max-w-7xl px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <motion.div className="md:col-span-1 flex justify-center" variants={imageVariants}>
            {profileData.profilePicture && (
              <Card className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 shadow-lg bg-card/60 backdrop-blur-lg ring-2 ring-primary/50 hover:ring-primary transition-shadow duration-300 ease-in-out shadow-primary/20 hover:shadow-primary/40">
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
          </motion.div>
          <motion.div className="md:col-span-2 space-y-4" variants={textVariants}>
            <h2 className="text-3xl font-bold font-headline gradient-text">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              {profileData.bio}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
