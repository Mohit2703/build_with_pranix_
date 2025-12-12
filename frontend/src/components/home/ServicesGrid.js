const services = [
    {
        title: 'Custom CRM Development',
        description: 'Tailored customer relationship management systems that fit your unique business processes.',
        icon: '📊',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Social Media Platforms',
        description: 'Scalable social networks with real-time features, feeds, and robust user management.',
        icon: '🌐',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        title: 'SaaS Development',
        description: 'Full-cycle SaaS product development from ideation to deployment and scaling.',
        icon: '🚀',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        icon: '📱',
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Website Development',
        description: 'High-performance, SEO-optimized websites with stunning designs.',
        icon: '💻',
        gradient: 'from-indigo-500 to-violet-500'
    },
    {
        title: 'AI Automations',
        description: 'Intelligent automation solutions to streamline workflows and boost productivity.',
        icon: '🤖',
        gradient: 'from-[var(--brand-teal)] to-teal-600'
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        We deliver cutting-edge solutions across a wide spectrum of technologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
