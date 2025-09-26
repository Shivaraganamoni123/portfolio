'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { profileData } from '@/app/lib/data';
import { motion } from 'framer-motion';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 50, delay: 0.5 } },
  };

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] min-h-[700px] flex items-center">
      <motion.div
        className="container mx-auto max-w-7xl px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline gradient-text"
              variants={itemVariants}
            >
              {profileData.name}
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground md:text-xl max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              {profileData.tagline}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg">
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative hidden md:flex justify-center items-center"
            variants={imageVariants}
          >
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl profile-glow">
              <Image
                src="https://res.cloudinary.com/dtitgjfbk/image/upload/v1758881098/pro_mf8nuo.jpg"
                alt="R. Shiva Shankar"
                layout="fill"
                objectFit="cover"
                className="transform scale-125"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
