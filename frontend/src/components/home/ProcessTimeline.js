export default function ProcessTimeline() {
    const steps = [
        { title: 'Discovery', icon: '🔍' },
        { title: 'AI Requirements', icon: '🤖' },
        { title: 'Design', icon: '🎨' },
        { title: 'Development', icon: '💻' },
        { title: 'Delivery', icon: '🚀' }
    ];

    return (
        <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Our Process
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        A streamlined journey from concept to launch.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full border-4 border-slate-50 dark:border-slate-800 flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:border-[var(--brand-blue)] transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    {step.title}
                                </h3>
                                <div className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                                    Step 0{index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
