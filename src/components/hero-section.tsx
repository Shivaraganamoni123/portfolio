'use client';
import Link from 'next/link';
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

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] min-h-[500px] flex items-center justify-center text-center">
      <motion.div
        className="container mx-auto max-w-4xl px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline gradient-text"
            variants={itemVariants}
          >
            {profileData.name}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground md:text-xl"
            variants={itemVariants}
          >
            {profileData.tagline}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
      </motion.div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
