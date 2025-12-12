import Link from 'next/link';

export default function AIRequirementGenerator() {
    return (
        <section id="ai-generator" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-900 dark:bg-black">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)] text-sm font-medium mb-6 border border-[var(--brand-purple)]/20">
                            <span className="text-lg">✨</span>
                            AI-Powered Tool
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            AI-Powered Requirement Builder
                        </h2>

                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Instantly generate project questions and a complete requirement document tailored to your idea. Stop wasting weeks on discovery calls.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Smart question generation based on your idea',
                                'Comprehensive PDF requirement document',
                                'Instant cost and timeline estimation',
                                'Technical stack recommendations'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-6 h-6 rounded-full bg-[var(--brand-teal)]/20 flex items-center justify-center text-[var(--brand-teal)]">
                                        ✓
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/ai-requirements"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[var(--brand-purple)] rounded-full hover:bg-[var(--brand-purple)]/90 hover:shadow-lg hover:shadow-purple-500/30"
                        >
                            Try It Now
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)] rounded-2xl opacity-20 blur-xl animate-pulse" />
                        <div className="relative bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-2xl">
                            {/* Mock UI Header */}
                            <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-slate-400 text-sm font-mono">ScopeSmith AI</div>
                            </div>

                            {/* Chat Interface */}
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)] flex-shrink-0" />
                                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-4 text-slate-300 text-sm">
                                        Hello! Describe your project idea, and I'll help you define the requirements.
                                    </div>
                                </div>

                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-slate-600 flex-shrink-0" />
                                    <div className="bg-[var(--brand-blue)]/20 rounded-2xl rounded-tr-none p-4 text-white text-sm border border-[var(--brand-blue)]/30">
                                        I want to build a marketplace for freelance designers.
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)] flex-shrink-0" />
                                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-none p-4 text-slate-300 text-sm">
                                        <p className="mb-2">Great idea! Here are a few questions to clarify the scope:</p>
                                        <ul className="list-disc list-inside space-y-1 text-slate-400">
                                            <li>Should it handle payments directly?</li>
                                            <li>Do you need a portfolio showcase feature?</li>
                                            <li>Is there a vetting process for designers?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="mt-6 pt-4 border-t border-slate-700">
                                <div className="bg-slate-900 rounded-lg p-3 flex items-center gap-3">
                                    <div className="flex-1 text-slate-500 text-sm">Type your answer...</div>
                                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-blue)] flex items-center justify-center text-white">
                                        ↑
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
