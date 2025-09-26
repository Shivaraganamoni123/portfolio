
'use client';
import { motion } from 'framer-motion';
import { Code, User, Github, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [Code, User, Github];
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
      type: 'spring',
      stiffness: 150,
      damping: 10,
    },
  }),
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1, duration: 0.8 },
    },
};

const subTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 0.8 },
    },
}

export function PreLoader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);
  
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
        initial: {
            d: initialPath,
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 }
        }
    }

  if (dimension.width === 0) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #1E1B4B, #0F172A, #1E1B4B)' }}
      initial="visible"
      exit="exit"
    >
      <div className="text-center space-y-8">
        <motion.div className="flex justify-center gap-6">
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="p-4 bg-primary/10 rounded-full shadow-lg ring-2 ring-primary/50"
            >
              <Icon className="h-8 w-8 text-primary" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Welcome To My <span className="gradient-text">Portfolio Website</span>
        </motion.h1>

        <motion.div 
            variants={subTextVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-2 text-muted-foreground"
        >
            <Globe className="h-5 w-5"/>
            <span>S.Jes|</span>
        </motion.div>
      </div>

       <motion.svg className="absolute top-0 w-full h-[calc(100%_+_300px)] left-0" {...curve}>
            <motion.path d={initialPath} variants={curve} initial="initial" exit="exit" className="fill-background"></motion.path>
       </motion.svg>
    </motion.div>
  );
}
