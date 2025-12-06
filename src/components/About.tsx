import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About <span className="text-gradient">Me</span></h2>

                    <div className="bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Hello! I'm <span className="text-white font-semibold">Olasehinde Micheal</span>, a passionate Full Stack Developer based in Nigeria.
                            </p>
                            <p>
                                My journey in web development began with a curiosity for how things work on the internet.
                                Over the years, I've honed my skills in building robust, scalable, and user-friendly applications.
                                I specialize in the <span className="text-white">React ecosystem</span>, creating seamless digital experiences that solve real-world problems.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open source,
                                or sharing my knowledge with the developer community. I believe in continuous learning
                                and always strive to stay up-to-date with the latest industry trends.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
