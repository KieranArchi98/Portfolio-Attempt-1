"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/app/sharedComponents/ui/Icon';
import { Button } from '@/app/sharedComponents/ui/Button';
import { Card } from '@/app/sharedComponents/ui/Card';
import { AnimatedRitualIcon } from '@/app/sharedComponents/ui/AnimatedRitualIcon';

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
        id: 'konnect',
        name: 'Konnect',
        description: 'Agentic dashboard and centralized knowledge base',
        longDescription: 'A sophisticated agentic command center designed to aggregate diverse knowledge streams and provide a unified interface for system-wide operations and information retrieval.',
        image: '/placeholder-project.jpg',
        technologies: ['React', 'Next.js', 'LLM Integration', 'Tailwind'],
        githubUrl: 'https://github.com/KieranArchi98/Konnect',
    },
    {
        id: 'gemini-ai',
        name: 'Gemini AI',
        description: 'Personalized LLM application interface',
        longDescription: 'A custom-tailored interface leveraging Google Gemini models to provide specialized AI assistance, optimized for technical workflows and personal productivity.',
        image: '/placeholder-project.jpg',
        technologies: ['Python', 'Google AI SDK', 'Streamlit', 'API Design'],
        githubUrl: 'https://github.com/KieranArchi98/Gemini-AI',
    },
    {
        id: 'netdoctor',
        name: 'NetDoctor',
        description: 'Python-based network diagnostic utility',
        longDescription: 'An automated network health monitoring and troubleshooting tool. It performs rapid diagnostics across various protocols to identify bottlenecks and connectivity failures.',
        image: '/placeholder-project.jpg',
        technologies: ['Python', 'Scapy', 'Network Protocols', 'CLI Automation'],
        githubUrl: 'https://github.com/KieranArchi98/NetDoctor',
    },
    {
        id: 'powershell-toolkit',
        name: 'Powershell CLI Toolkit',
        description: 'Sysadmin troubleshooting and automation suite',
        longDescription: 'A comprehensive collection of PowerShell scripts designed for system administrators to automate repetitive tasks, audit security, and troubleshoot Windows environments.',
        image: '/placeholder-project.jpg',
        technologies: ['PowerShell', 'Windows Server', 'Automation', 'Scripting'],
        githubUrl: 'https://github.com/KieranArchi98/SysAdmin-CLI-Toolkit',
    },
    {
        id: 'cosmic-miner',
        name: 'Cosmic Miner',
        description: 'Immersive space-themed idle clicker game',
        longDescription: 'A complex idle game exploring celestial resource extraction. Features intricate progression systems, prestige mechanics, and a data-driven upgrade architecture.',
        image: '/placeholder-project.jpg',
        technologies: ['TypeScript', 'Vite', 'State Management', 'Game Logic'],
        githubUrl: 'https://github.com/KieranArchi98/Cosmic-Miner',
    },
    {
        id: 'harbor',
        name: 'Harbor',
        description: 'Community-driven forum and discussion platform',
        longDescription: 'A scalable, Reddit-inspired forum application featuring hierarchical discussions, user voting systems, and specialized technical communities.',
        image: '/placeholder-project.jpg',
        technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth.js'],
        githubUrl: 'https://github.com/KieranArchi98/Harbor',
    }
];

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="pt-10 pb-20 lg:pt-14 lg:pb-28 relative overflow-hidden bg-background-primary">
            <div className="w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-16 space-y-8 w-full">
                    <div className="flex flex-col items-center justify-center gap-6 w-full">
                        <AnimatedRitualIcon
                            name="projects"
                            size={64}
                        />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-primary tracking-tighter uppercase font-mono">
                            Portfolio
                        </h1>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl font-mono opacity-60 w-full text-center lowercase tracking-tight">
                        A systematic collection of architectural solutions and engineering prototypes.
                    </p>
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
