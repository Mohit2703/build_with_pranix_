export default function WhyChooseUs() {
    const features = [
        {
            title: 'Faster Delivery',
            description: 'We use AI-driven development workflows to deliver projects 2x faster than traditional agencies.',
            icon: '⚡'
        },
        {
            title: 'Scalable Architecture',
            description: 'Built on modern tech stacks designed to handle millions of users from day one.',
            icon: '🏗️'
        },
        {
            title: 'AI-Enhanced Efficiency',
            description: 'Leveraging cutting-edge AI tools for code generation, testing, and optimization.',
            icon: '🧠'
        },
        {
            title: 'Transparent Communication',
            description: 'Real-time updates, clear milestones, and direct access to your development team.',
            icon: '💬'
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Why Build With Us?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        We combine human expertise with AI efficiency to deliver exceptional results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-md border border-slate-100 dark:border-slate-800">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
