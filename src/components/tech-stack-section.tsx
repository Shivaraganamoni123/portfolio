import { skillsData } from '@/app/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function TechStackSection() {
    return (
        <section id="tech-stack" className="py-16 md:py-24 bg-transparent first:pt-0">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold font-headline">My Tech Stack</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A snapshot of the technologies, tools, and platforms I work with.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category) => (
                        <Card key={category.category} className="glass-card">
                            <CardHeader className="flex-row items-center gap-4">
                                <category.icon className="h-8 w-8 text-accent" />
                                <CardTitle>{category.category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
