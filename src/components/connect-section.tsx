import Link from 'next/link';
import { profileData } from '@/app/lib/data';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export function ConnectSection() {
  const mainConnection = profileData.connect.find(c => c.main);
  const otherConnections = profileData.connect.filter(c => !c.main);

  return (
    <section id="connect" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto max-w-lg px-4 md:px-6">
        <h2 className="text-2xl font-bold font-headline mb-8 flex items-center">
          <span className="w-8 h-1 bg-accent mr-4"></span>
          Connect With Me
        </h2>
        
        <Card className="glass-card p-6">
          {mainConnection && (
            <Link href={mainConnection.url} target="_blank" rel="noopener noreferrer" className="block mb-4">
              <Card className="glass-card p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                <mainConnection.icon className="h-8 w-8 text-primary" />
                <span className="font-semibold text-lg">{mainConnection.username}</span>
              </Card>
            </Link>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherConnections.map((connection) => (
              <Link key={connection.name} href={connection.url} target="_blank" rel="noopener noreferrer">
                <Card className={cn(
                  "glass-card p-4 group hover:bg-white/10 transition-colors h-full",
                  connection.name === 'Discord' && 'bg-accent/20 hover:bg-accent/30'
                )}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <connection.icon className="h-7 w-7 text-foreground/80" />
                      <div>
                        <p className="font-semibold">{connection.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{connection.username}</p>
                      </div>
                    </div>
                    {connection.name !== 'Discord' && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
