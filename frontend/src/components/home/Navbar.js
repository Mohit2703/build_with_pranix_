import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)] flex items-center justify-center text-white font-bold">
                                S
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                                ScopeSmith
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#services" className="text-slate-600 dark:text-slate-300 hover:text-[var(--brand-blue)] dark:hover:text-[var(--brand-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Services
                            </Link>
                            <Link href="#ai-generator" className="text-slate-600 dark:text-slate-300 hover:text-[var(--brand-blue)] dark:hover:text-[var(--brand-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                AI Generator
                            </Link>
                            <Link href="#process" className="text-slate-600 dark:text-slate-300 hover:text-[var(--brand-blue)] dark:hover:text-[var(--brand-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Process
                            </Link>
                            <Link href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-[var(--brand-blue)] dark:hover:text-[var(--brand-blue)] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="/start"
                            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
