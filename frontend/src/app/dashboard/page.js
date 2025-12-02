'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('auth_token');
        const data = await api.get('/projects/project/', {}, token);
        setProjects(data.data || []);
      } catch (err) {
        setError(err.detail || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>

      <div className="mb-4">
        <Link
          href="/projects/create"
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          + Create New Project
        </Link>
      </div>

      {loading && <div>Loading projects...</div>}
      {error && <div className="text-red-600">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded p-4 shadow bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="font-semibold text-lg">{project.name}</h2>
              <div className="text-gray-600 text-sm">
                {project.description || 'No description'}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Status: {project.status || 'N/A'}
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Link
                href={`/projects/${project.id}`}
                className="text-indigo-600 hover:underline"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
