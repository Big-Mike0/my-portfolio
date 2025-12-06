import { motion } from 'framer-motion';

const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Master' },
    { name: 'Framer Motion', level: 'Intermediate' },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My stack is focused on performance, accessibility, and developer experience.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="p-6 rounded-2xl border border-white/10 bg-secondary/50 backdrop-blur-sm hover:border-primary/50 transition-colors text-center group cursor-default w-full md:w-[30%]"
                        >
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
