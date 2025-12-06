import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

type FormData = {
    name: string;
    email: string;
    message: string;
};

export function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
            // You can get them by signing up at https://www.emailjs.com/

            const serviceId = "Big-Mike";
            const templateId = "template_7pj4qti";
            const publicKey = "LeY7rQYTcvh6vxLW3";

            await emailjs.send(serviceId, templateId, {
                from_name: data.name,
                from_email: data.email,
                message: data.message,
            }, publicKey);
            toast.success("Message sent successfully!");

            reset();
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work <span className="text-gradient">Together</span></h2>
                    <p className="text-muted-foreground">
                        Have a project in mind? detailed discussion? or just want to say hi?
                    </p>
                </motion.div>

                <div className="bg-secondary/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-400 text-xs ml-1">{errors.name.message}</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
                                    })}
                                    className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-400 text-xs ml-1">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                rows={5}
                                className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20 resize-none"
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <span className="text-red-400 text-xs ml-1">{errors.message.message}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
