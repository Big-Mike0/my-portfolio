import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-secondary/30">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Olasehinde Micheal. All rights reserved.
                </p>

                <div className="flex items-center space-x-6">
                    <a href="https://github.com/Big-Mike0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
}
