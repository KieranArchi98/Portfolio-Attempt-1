"use client";

import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

/* 
  Product-Page Specific Visuals
  Literal, Representative 3D Compositions V4
*/

const ISO_CONTAINER_STYLE = "relative w-full h-48 flex items-center justify-center perspective-1000";
const ISO_PLATFORM_STYLE = "relative w-32 h-32 transform-style-3d";

// Full Stack: Browser Window & Code
export function WebVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 45 }}
                whileInView={{ rotateX: 55, rotateZ: 35 }}
                viewport={{ once: true }}
            >
                {/* Browser Window Base */}
                <motion.div
                    className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-lg shadow-xl flex flex-col overflow-hidden"
                    style={{ transform: "translateZ(10px)" }}
                >
                    {/* Window Header */}
                    <div className="h-4 bg-slate-800 border-b border-slate-700 flex items-center px-2 gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                    {/* Code Content */}
                    <div className="p-2 space-y-1">
                        <div className="w-3/4 h-1 bg-slate-700 rounded" />
                        <div className="w-1/2 h-1 bg-slate-700 rounded" />
                        <div className="w-full h-1 bg-slate-700 rounded" />
                    </div>
                </motion.div>

                {/* Floating Syntax Block */}
                <motion.div
                    className="absolute -right-4 -bottom-4 bg-blue-600 rounded-md p-2 shadow-lg border border-blue-400"
                    style={{ transform: "translateZ(40px)" }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Icon name="code" className="text-white" size={20} />
                </motion.div>
            </motion.div>
        </div>
    );
}

// Tech Ops: Server Rack / Hardware
export function MobileVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 45 }}
                whileInView={{ rotateX: 55, rotateZ: 45 }}
            >
                {/* Server Chassis */}
                <div className="absolute inset-4 bg-gray-900 border border-gray-700 rounded-sm shadow-2xl flex flex-col justify-between py-1 px-2"
                    style={{ transform: "translateZ(20px)" }}>
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className="h-3 w-full bg-gray-800 rounded-sm border border-gray-700 flex items-center px-1 justify-between">
                            <div className="flex gap-0.5">
                                <div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse" />
                                <div className="w-0.5 h-0.5 rounded-full bg-green-500" />
                            </div>
                            <div className="w-4 h-0.5 bg-gray-600 rounded-full" />
                        </div>
                    ))}
                </div>

                {/* Status Indicator Panel */}
                <motion.div
                    className="absolute -right-2 top-8 w-12 h-16 bg-white/90 backdrop-blur rounded border border-green-500/50 flex flex-col items-center justify-center p-1 shadow-lg"
                    style={{ transform: "translateZ(50px) rotateY(-20deg)" }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Icon name="check" className="text-green-600" size={20} />
                    <div className="text-[6px] font-mono text-green-800 mt-1">SYS OK</div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Cloud & Network: Connected Infrastructure
export function NetArchVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 0 }}
                whileInView={{ rotateX: 60, rotateZ: 10 }}
            >
                {/* Central Cloud Node */}
                <motion.div
                    className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.2)] border border-blue-100"
                    style={{ transform: "translateZ(30px)" }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Icon name="server" className="text-blue-500" size={32} />
                </motion.div>

                {/* Connected Nodes */}
                {[0, 120, 240].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-full h-full"
                        style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
                    >
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shadow-sm"
                            style={{ transform: "rotateX(-60deg) translateY(-20px)" }}
                        >
                            <Icon name="globe" className="text-slate-400" size={16} />
                        </motion.div>
                        {/* Connection Line */}
                        <div className="absolute top-8 left-1/2 w-0.5 h-10 bg-blue-200 -translate-x-1/2" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

// AI: Processor Chip
export function AiVisual3D() {
    return (
        <div className={ISO_CONTAINER_STYLE}>
            <motion.div
                className={ISO_PLATFORM_STYLE}
                initial={{ rotateX: 60, rotateZ: 45 }}
            >
                {/* Main CPU Chip */}
                <div className="absolute inset-4 bg-slate-900 border-2 border-orange-500 rounded-lg shadow-xl flex items-center justify-center"
                    style={{ transform: "translateZ(10px)" }}>
                    <div className="absolute inset-0 bg-slate-800 m-1 rounded border border-slate-700 flex items-center justify-center">
                        <Icon name="cpu" className="text-orange-500" size={32} />
                    </div>
                </div>

                {/* Data Flow Particles */}
                {[0, 90, 180, 270].map((deg, i) => (
                    <div key={i} className="absolute inset-0 flex items-center justify-center" style={{ transform: `rotate(${deg}deg)` }}>
                        <motion.div
                            className="w-1 h-20 bg-gradient-to-t from-orange-500/50 to-transparent"
                            style={{ transform: "translateY(-40px) translateZ(5px)" }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export function ProductFeatureVisual({ variant }: { variant?: string }) {
    if (variant === 'web') return <WebVisual3D />;
    if (variant === 'mobile') return <MobileVisual3D />;
    if (variant === 'network-arch') return <NetArchVisual3D />;
    if (variant === 'ai') return <AiVisual3D />;

    return <WebVisual3D />;
}
