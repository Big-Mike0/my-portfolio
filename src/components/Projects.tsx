import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online stores with real-time data visualization.",
        tags: ["React", "Tailwind", "Recharts"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    },
    {
        title: "SaaS Landing Page",
        description: "High-converting landing page with modern aesthetics and butter-smooth animations.",
        tags: ["React", "Framer Motion", "Stripe"],
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat interface powered by Large Language Models with streaming responses.",
        tags: ["TypeScript", "OpenAI API", "Socket.io"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2574&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl">
                        A small selection of projects I've worked on recently.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl bg-secondary border border-white/5 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    {project.links.github && (
                                        <a href={project.links.github} className="p-3 bg-background rounded-full hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} className="p-3 bg-background rounded-full hover:text-primary transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
