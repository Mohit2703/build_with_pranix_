import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)] flex items-center justify-center text-white font-bold">
                                S
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">
                                ScopeSmith
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            Building the future of digital products with AI-driven development and premium design.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {['twitter', 'github', 'linkedin'].map((social) => (
                                <a key={social} href={`#${social}`} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[var(--brand-blue)] hover:text-white transition-colors">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 bg-current" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Custom CRM</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">SaaS Development</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Mobile Apps</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">AI Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li>hello@scopesmith.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 Tech Plaza, Suite 400<br />San Francisco, CA 94107</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} ScopeSmith. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
                        <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
