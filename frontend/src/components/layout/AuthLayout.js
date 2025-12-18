import React from 'react';

export function AuthLayout({ children, title, description }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center mesh-gradient px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-slate-100 opacity-20 mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />

            <div className="w-full max-w-md space-y-8 relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-slate-800/50">
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full premium-gradient flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-6">
                        <div className="w-6 h-6 rounded-full border-[3px] border-white/30" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            {description}
                        </p>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
}
