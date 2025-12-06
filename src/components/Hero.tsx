import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 py-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-secondary-foreground font-semibold mb-4 tracking-wide uppercase">Full Stack Developer</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Building digital <br />
                        <span className="text-gradient">experiences</span> that matter.
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                        I craft exceptional digital products with modern technologies.
                        Focused on building accessible, pixel-perfect, and performant web applications.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="https://drive.google.com/file/d/113eJK_PZgnYr4edxXUYZzG82dOwK_zmd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white/20 hover:bg-white/5 rounded-full font-medium transition-colors flex items-center gap-2">
                            Download CV <Download className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl rotate-6 opacity-50 blur-lg" />
                        <div className="absolute inset-0 bg-secondary rounded-2xl border border-white/10 flex items-center justify-center p-8">
                            {/* Placeholder for dev illustration or code snippet image */}
                            <div className="text-center">
                                <p className="font-mono text-sm text-blue-400">const developer = {"{"}</p>
                                <p className="font-mono text-sm pl-4 text-purple-400">name: "Olasehinde Micheal",</p>
                                <p className="font-mono text-sm pl-4 text-purple-400">skills: ["React", "Node", "Design"],</p>
                                <p className="font-mono text-sm pl-4 text-green-400">hardWork:Greatness</p>
                                <p className="font-mono text-sm">{"}"};</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
