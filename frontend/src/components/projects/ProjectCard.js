import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function ProjectCard({ project, onDelete }) {
    // Assuming project structure: { id, name, description, status, created_at }
    // Status might be 'completed', 'in_progress', etc.

    const statusVariant = {
        completed: 'success',
        in_progress: 'default',
        pending: 'warning',
    }[project.status] || 'default';

    return (
        <Card className="flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-indigo-500/10 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm group">
            <CardHeader>
                <div className="flex items-start justify-between gap-4">
                    <CardTitle className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white group-hover:text-[var(--brand-blue)] transition-colors">
                        {project.name}
                    </CardTitle>
                    <Badge variant={statusVariant} className="capitalize shadow-sm">
                        {project.status?.replace('_', ' ') || 'Unknown'}
                    </Badge>
                </div>
                <CardDescription className="line-clamp-2 mt-2 text-slate-500 dark:text-slate-400">
                    {project.description || 'No description provided.'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Created: {new Date(project.created_at).toLocaleDateString()}
                </p>
            </CardContent>
            <CardFooter className="gap-3 pt-2">
                <Link href={`/projects/${project.id}`} className="w-full">
                    <Button variant="outline" className="w-full border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[var(--brand-blue)] transition-colors">
                        Open Project
                    </Button>
                </Link>
                {project.status === 'completed' && (
                    <Link href={`/projects/${project.id}/report`} className="w-full">
                        <Button className="w-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)] text-white border-0 hover:opacity-90 transition-opacity shadow-md hover:shadow-indigo-500/25">
                            View Report
                        </Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}
