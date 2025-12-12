import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[var(--brand-blue)]/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse" />
                <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-[var(--brand-purple)]/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse delay-1000" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--brand-teal)]/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[var(--brand-blue)] text-sm font-medium mb-6 border border-blue-100 dark:border-blue-800">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-blue)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-blue)]"></span>
                            </span>
                            Accepting New Projects
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            Build Anything. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-purple)] to-[var(--brand-teal)]">
                                Scale Everything.
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We transform your ideas into powerful digital products — CRMs, SaaS, apps, websites, and AI-driven solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/quote"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)] rounded-full hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                            >
                                Get Your Project Quote
                            </Link>
                            <Link
                                href="/ai-requirements"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-white transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-lg hover:border-[var(--brand-teal)] group"
                            >
                                <span className="mr-2">✨</span>
                                Generate Requirements with AI
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Abstract 3D Graphic */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full aspect-square max-w-[500px]">
                            {/* Central Sphere */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/20 to-[var(--brand-purple)]/20 rounded-full animate-pulse blur-xl" />

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 animate-[spin_60s_linear_infinite]" />

                            {/* Floating Elements */}
                            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[var(--brand-teal)] to-blue-500 rounded-2xl shadow-2xl animate-bounce delay-100 backdrop-blur-md border border-white/20" />
                            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[var(--brand-purple)] to-pink-500 rounded-full shadow-2xl animate-bounce delay-300 backdrop-blur-md border border-white/20" />
                            <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-2xl animate-bounce delay-700 backdrop-blur-md border border-white/20" />

                            {/* Glass Card */}
                            <div className="absolute bottom-10 left-10 right-10 bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-teal)]" />
                                    <div>
                                        <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
                                        <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded" />
                                    <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
