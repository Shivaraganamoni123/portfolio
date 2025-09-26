import { profileData } from '@/app/lib/data';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { DiscordIcon, LeetCodeIcon } from './icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-secondary-foreground py-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">&copy; {year} {profileData.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href={profileData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
           <Link href={profileData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
           <Link href={profileData.socials.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <DiscordIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
           <Link href={profileData.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <LeetCodeIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={profileData.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
