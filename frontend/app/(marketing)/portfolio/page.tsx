"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { Button } from '@/app/sharedComponents/ui/Button';
import { Card } from '@/app/sharedComponents/ui/Card';

interface Project {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: '1',
        name: 'E-Commerce Platform',
        description: 'Full-stack online store with payment integration',
        longDescription: 'A comprehensive e-commerce solution built with Next.js and Stripe. Features include product catalog, shopping cart, secure checkout, order management, and admin dashboard.',
        image: '/placeholder-project.jpg',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
        githubUrl: 'https://github.com/username/ecommerce',
        liveUrl: 'https://demo.example.com'
    },
    {
        id: '2',
        name: 'Task Management App',
        description: 'Collaborative project management tool',
        longDescription: 'A modern task management application with real-time collaboration features. Includes kanban boards, team workspaces, file attachments, and activity tracking.',
        image: '/placeholder-project.jpg',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        githubUrl: 'https://github.com/username/taskmanager'
    },
    {
        id: '3',
        name: 'Weather Dashboard',
        description: 'Real-time weather data visualization',
        longDescription: 'An interactive weather dashboard that displays current conditions, forecasts, and historical data. Features beautiful charts and location-based weather alerts.',
        image: '/placeholder-project.jpg',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
        githubUrl: 'https://github.com/username/weather-dashboard',
        liveUrl: 'https://weather.example.com'
    },
    {
        id: '4',
        name: 'Social Media Analytics',
        description: 'Track and analyze social media metrics',
        longDescription: 'A comprehensive analytics platform for social media managers. Provides insights into engagement, growth, and content performance across multiple platforms.',
        image: '/placeholder-project.jpg',
        technologies: ['Python', 'Django', 'React', 'D3.js'],
        githubUrl: 'https://github.com/username/social-analytics'
    },
    {
        id: '5',
        name: 'Fitness Tracker',
        description: 'Personal health and workout logging app',
        longDescription: 'Track your workouts, nutrition, and progress over time. Includes exercise library, custom workout plans, and progress visualization with charts.',
        image: '/placeholder-project.jpg',
        technologies: ['React Native', 'Firebase', 'Redux'],
        githubUrl: 'https://github.com/username/fitness-tracker'
    },
    {
        id: '6',
        name: 'Blog CMS',
        description: 'Headless content management system',
        longDescription: 'A modern headless CMS built for developers. Features markdown support, media management, role-based access control, and RESTful API.',
        image: '/placeholder-project.jpg',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
        githubUrl: 'https://github.com/username/blog-cms',
        liveUrl: 'https://cms.example.com'
    }
];

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="py-20 lg:py-28">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Icon name="code" size={48} className="text-brand-primary" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-primary tracking-tight">
                            My Projects
                        </h1>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                variant="bordered"
                                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Project Image Placeholder */}
                                <div className="w-full h-48 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 flex items-center justify-center relative overflow-hidden">
                                    <Icon name="code" size={48} className="text-brand-primary/40" />
                                    <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors" />
                                </div>

                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground-primary mb-2 group-hover:text-brand-primary transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-foreground-secondary text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-3 py-1 bg-background-muted text-foreground-muted text-xs font-medium rounded-full">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedProject(null)}
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-background-primary rounded-2xl shadow-2xl w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] 2xl:w-[65%] max-h-[90vh] overflow-y-auto"
                            >
                                {/* Modal Header */}
                                <div className="sticky top-0 bg-background-primary border-b border-border-default p-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-foreground-primary">
                                        {selectedProject.name}
                                    </h2>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 hover:bg-background-muted rounded-lg transition-colors"
                                    >
                                        <Icon name="close" size={24} />
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="p-6 space-y-6">
                                    {/* Image */}
                                    <div className="w-full h-64 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 rounded-xl flex items-center justify-center">
                                        <Icon name="code" size={64} className="text-brand-primary/40" />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground-primary mb-2">About</h3>
                                        <p className="text-foreground-secondary leading-relaxed">
                                            {selectedProject.longDescription}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground-primary mb-3">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-2 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button variant="outline" className="w-full gap-2">
                                                <Icon name="code" size={20} />
                                                View Code
                                            </Button>
                                        </a>
                                        {selectedProject.liveUrl && (
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1"
                                            >
                                                <Button variant="primary" className="w-full gap-2">
                                                    <Icon name="visible" size={20} />
                                                    Live Demo
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
