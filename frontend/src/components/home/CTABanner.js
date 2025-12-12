import Link from 'next/link';

export default function CTABanner() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)] px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to Build Your Product?
                        </h2>
                        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Let's turn your vision into reality. Start your project today with our AI-powered workflow.
                        </p>

                        <Link
                            href="/start"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--brand-blue)] transition-all duration-200 bg-white rounded-full hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Start Your Project
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
