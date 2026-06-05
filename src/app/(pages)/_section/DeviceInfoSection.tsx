"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Gauge,
    HardDrive,
    MemoryStick,
    Server,
    Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IllustrationType =
    | "os"
    | "cpu"
    | "gpu"
    | "ram"
    | "ssd"
    | "hdd"
    | "motherboard"
    | "psu"
    | "monitor";

type Highlight = {
    value: string;
    label: string;
    description: string;
    icon: LucideIcon;
};

type ComponentSpec = {
    type: IllustrationType;
    name: string;
    spec: string;
    details: string[];
    description: string;
    badges: string[];
    accent: string;
};

const highlights: Highlight[] = [
    {
        value: "64 GB",
        label: "RAM",
        description: "Large memory headroom for development, design tools, and multitasking.",
        icon: MemoryStick,
    },
    {
        value: "16 GB",
        label: "VRAM",
        description: "Graphics memory for creative workloads and rich visual experiments.",
        icon: Gauge,
    },
    {
        value: "12",
        label: "Threads",
        description: "Responsive compile, preview, and daily productivity performance.",
        icon: Cpu,
    },
    {
        value: "3.86 TB",
        label: "Storage",
        description: "Fast project storage with a roomy archive drive for media and assets.",
        icon: HardDrive,
    },
];

const componentSpecs: ComponentSpec[] = [
    {
        type: "os",
        name: "Operating System",
        spec: "Windows 11 Pro 25H2",
        details: ["64-bit", "x64-based processor"],
        description: "The daily desktop environment for development tools, creative apps, and project orchestration.",
        badges: ["Windows", "Pro", "64-bit"],
        accent: "from-cyan-600 to-sky-900",
    },
    {
        type: "cpu",
        name: "Processor",
        spec: "Intel Core i5-12400F",
        details: ["12th Generation", "6 Cores / 12 Threads", "Base Clock: 2.50 GHz"],
        description: "A balanced CPU for frontend builds, local services, browser testing, and parallel workflows.",
        badges: ["Intel", "6 Cores", "12 Threads"],
        accent: "from-blue-600 to-cyan-900",
    },
    {
        type: "gpu",
        name: "Graphics Card",
        spec: "AMD Radeon RX 9060 XT",
        details: ["16 GB VRAM"],
        description: "Dedicated graphics power for 3D web experiments, visual previews, and creative production.",
        badges: ["AMD", "16 GB", "3D Web"],
        accent: "from-rose-600 to-red-900",
    },
    {
        type: "ram",
        name: "Memory",
        spec: "64 GB DDR4 RAM",
        details: ["Speed: 2666 MT/s"],
        description: "Enough memory to keep IDEs, browsers, design tools, and multiple dev servers open together.",
        badges: ["DDR4", "2666 MT/s", "Multitask"],
        accent: "from-emerald-300 <to-cyan-9></to-cyan-9>00",
    },
    {
        type: "ssd",
        name: "SSD Storage",
        spec: "2.5 TB SSD",
        details: ["Fast app and project storage"],
        description: "Primary storage for codebases, tools, build caches, and active creative work.",
        badges: ["SSD", "Fast IO", "Projects"],
        accent: "from-violet-300 to-cyan-900",
    },
    {
        type: "hdd",
        name: "Hard Disk Drive",
        spec: "2 TB HDD",
        details: ["Total Storage: 3.86 TB"],
        description: "Archive space for recordings, large media files, backups, and long-running experiments.",
        badges: ["HDD", "Archive", "2 TB"],
        accent: "from-amber-300 to-orange-900",
    },
    {
        type: "motherboard",
        name: "Motherboard",
        spec: "Gigabyte H610M K DDR4",
        details: ["DDR4 platform", "Compact workstation foundation"],
        description: "The core board tying together CPU, memory, graphics, storage, and expansion.",
        badges: ["Gigabyte", "H610M", "DDR4"],
        accent: "from-lime-300 to-emerald-900",
    },
    {
        type: "psu",
        name: "Power Supply",
        spec: "750W 80+ Bronze PSU",
        details: ["750W capacity", "80+ Bronze efficiency"],
        description: "Stable power delivery for the workstation during development, rendering, and multitasking.",
        badges: ["750W", "80+ Bronze", "Stable"],
        accent: "from-yellow-300 to-cyan-900",
    },
    {
        type: "monitor",
        name: "Dual Monitor Setup",
        spec: "32-inch FHD + Skyworth 24-inch 2K",
        details: ["Primary: 1920x1080", "Secondary: 2560x1440", "Dual Monitor Setup"],
        description: "A wide workspace for code, preview windows, docs, dashboards, and creative references.",
        badges: ["Dual Screen", "FHD", "2K"],
        accent: "from-cyan-300 to-violet-900",
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const HardwareIllustration = ({ type }: { type: IllustrationType }) => {
    const common = "drop-shadow-[0_18px_35px_rgba(34,211,238,0.18)]";

    if (type === "cpu") {
        return (
            <svg viewBox="0 0 160 120" className={`h-full w-full ${common}`} role="img" aria-label="CPU illustration">
                <rect x="44" y="24" width="72" height="72" rx="14" className="fill-white stroke-cyan-600/50 dark:fill-slate-950 dark:stroke-cyan-200/70" strokeWidth="3" />
                <rect x="61" y="41" width="38" height="38" rx="8" className={`fill-transparent stroke-cyan-300`} strokeWidth="4" />
                {[28, 44, 60, 76, 92, 108, 124].map((x) => (
                    <path key={x} d={`M${x} 12v14M${x} 94v14`} className="stroke-cyan-600/50 dark:stroke-cyan-200/70" strokeWidth="4" strokeLinecap="round" />
                ))}
                {[28, 44, 60, 76, 92, 108, 124].map((y) => (
                    <path key={y} d={`M32 ${y}H18M142 ${y}h-14`} className="stroke-cyan-600/50 dark:stroke-cyan-200/70" strokeWidth="4" strokeLinecap="round" />
                ))}
                <circle cx="80" cy="60" r="9" className="fill-cyan-300" />
            </svg>
        );
    }

    if (type === "gpu") {
        return (
            <svg viewBox="0 0 180 120" className={`h-full w-full ${common}`} role="img" aria-label="GPU illustration">
                <rect x="20" y="28" width="128" height="58" rx="14" className="fill-white stroke-slate-300 dark:fill-slate-950 dark:stroke-white/20" strokeWidth="3" />
                <rect x="148" y="40" width="14" height="34" rx="3" className="fill-cyan-200/80" />
                <circle cx="68" cy="57" r="21" className="fill-slate-100 stroke-cyan-500 dark:fill-slate-800 dark:stroke-cyan-300" strokeWidth="4" />
                <circle cx="68" cy="57" r="8" className="fill-cyan-300" />
                <path d="M94 45h31M94 58h38M94 71h24" className="stroke-orange-300" strokeWidth="5" strokeLinecap="round" />
                <path d="M38 90h72" className="stroke-cyan-300/70" strokeWidth="7" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "ram") {
        return (
            <svg viewBox="0 0 180 120" className={`h-full w-full ${common}`} role="img" aria-label="RAM illustration">
                <rect x="22" y="40" width="136" height="42" rx="10" className="fill-white stroke-emerald-500/70 dark:fill-slate-950 dark:stroke-emerald-300/80" strokeWidth="3" />
                {[42, 68, 94, 120].map((x) => (
                    <rect key={x} x={x} y="50" width="18" height="18" rx="4" className="fill-emerald-300/80" />
                ))}
                {[38, 58, 78, 98, 118, 138].map((x) => (
                    <path key={x} d={`M${x} 82v9`} className="stroke-yellow-200" strokeWidth="4" strokeLinecap="round" />
                ))}
                <path d="M32 35h116" className="stroke-cyan-200/50" strokeWidth="4" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "ssd" || type === "hdd") {
        return (
            <svg viewBox="0 0 170 120" className={`h-full w-full ${common}`} role="img" aria-label={`${type.toUpperCase()} illustration`}>
                <rect x="42" y="24" width="86" height="72" rx="16" className="fill-white stroke-slate-300 dark:fill-slate-950 dark:stroke-white/20" strokeWidth="3" />
                <rect x="57" y="40" width="56" height="16" rx="6" className={type === "ssd" ? "fill-violet-300/80" : "fill-amber-300/80"} />
                {type === "hdd" ? (
                    <>
                        <circle cx="85" cy="72" r="15" className="fill-slate-100 stroke-cyan-600/50 dark:fill-slate-800 dark:stroke-cyan-200/70" strokeWidth="4" />
                        <circle cx="85" cy="72" r="5" className="fill-cyan-300" />
                    </>
                ) : (
                    <path d="M61 72h48M61 82h34" className="stroke-cyan-200" strokeWidth="5" strokeLinecap="round" />
                )}
                <path d="M66 102h38" className="stroke-yellow-200" strokeWidth="6" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "motherboard") {
        return (
            <svg viewBox="0 0 170 120" className={`h-full w-full ${common}`} role="img" aria-label="Motherboard illustration">
                <rect x="32" y="18" width="106" height="84" rx="14" className="fill-white stroke-emerald-500/60 dark:fill-slate-950 dark:stroke-emerald-300/70" strokeWidth="3" />
                <rect x="50" y="36" width="28" height="28" rx="6" className="fill-emerald-300/80" />
                <rect x="93" y="34" width="22" height="52" rx="5" className="fill-cyan-300/70" />
                <path d="M52 78h28M52 88h20M123 34v52" className="stroke-yellow-200" strokeWidth="4" strokeLinecap="round" />
                <circle cx="122" cy="88" r="6" className="fill-orange-300" />
                <path d="M78 50h15M78 60h15" className="stroke-cyan-200" strokeWidth="3" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "psu") {
        return (
            <svg viewBox="0 0 170 120" className={`h-full w-full ${common}`} role="img" aria-label="Power supply illustration">
                <rect x="38" y="30" width="96" height="62" rx="14" className="fill-white stroke-amber-500/60 dark:fill-slate-950 dark:stroke-yellow-200/70" strokeWidth="3" />
                <circle cx="78" cy="61" r="20" className="fill-slate-100 stroke-cyan-600/50 dark:fill-slate-800 dark:stroke-cyan-200/70" strokeWidth="4" />
                <path d="M78 43v36M60 61h36M65 48l26 26M91 48L65 74" className="stroke-cyan-300/80" strokeWidth="3" strokeLinecap="round" />
                <rect x="108" y="48" width="14" height="26" rx="3" className="fill-yellow-300/80" />
                <path d="M134 48h14M134 62h19M134 76h12" className="stroke-cyan-200" strokeWidth="4" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "monitor") {
        return (
            <svg viewBox="0 0 190 120" className={`h-full w-full ${common}`} role="img" aria-label="Dual monitor illustration">
                <rect x="20" y="24" width="74" height="48" rx="10" className="fill-white stroke-cyan-600/50 dark:fill-slate-950 dark:stroke-cyan-200/70" strokeWidth="3" />
                <rect x="98" y="17" width="74" height="56" rx="10" className="fill-white stroke-violet-500/50 dark:fill-slate-950 dark:stroke-violet-200/70" strokeWidth="3" />
                <path d="M36 84h42M116 84h38M57 72v12M135 73v11" className="stroke-cyan-200" strokeWidth="5" strokeLinecap="round" />
                <path d="M32 38h48M110 34h48M110 48h32" className="stroke-cyan-300/70" strokeWidth="4" strokeLinecap="round" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 170 120" className={`h-full w-full ${common}`} role="img" aria-label="Operating system illustration">
            <rect x="34" y="24" width="102" height="68" rx="16" className="fill-white stroke-cyan-600/50 dark:fill-slate-950 dark:stroke-cyan-200/70" strokeWidth="3" />
            <rect x="52" y="42" width="23" height="18" rx="4" className="fill-cyan-300/80" />
            <rect x="80" y="42" width="34" height="18" rx="4" className="fill-sky-300/80" />
            <rect x="52" y="65" width="62" height="10" rx="4" className="fill-slate-200 dark:fill-white/20" />
            <path d="M64 100h42M85 92v8" className="stroke-cyan-200" strokeWidth="5" strokeLinecap="round" />
            <circle cx="125" cy="37" r="10" className={`fill-transparent stroke-current text-cyan-300`} strokeWidth="4" />
        </svg>
    );
};

const HighlightCard = ({ item, index }: { item: Highlight; index: number }) => {
    const Icon = item.icon;

    return (
        <motion.div
            variants={sectionVariants}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-slate-900/72 dark:shadow-[0_20px_55px_rgba(0,0,0,0.28)] bg-slate-100 text-slate-700 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute -right-10 -top-10 size-28 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/18" />
            <div className="relative flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-cyan-500/20 bg-cyan-400/10 text-cyan-600 dark:border-cyan-300/25 dark:text-cyan-200">
                    <Icon className="size-6" />
                </div>
                <div className="min-w-0">
                    <p className="font-poppins text-3xl font-extrabold text-slate-950 dark:text-white">{item.value}</p>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">{item.label}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-300">{item.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const ComponentCard = ({ component, index }: { component: ComponentSpec; index: number }) => (
    <motion.article
        variants={sectionVariants}
        transition={{ duration: 0.45, delay: 0.12 + index * 0.04 }}
        whileHover={{ y: -8 }}
        className="group relative min-w-0 overflow-hidden rounded-[30px]  p-px shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:from-white/18 dark:via-cyan-200/10 dark:to-white/5 dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)] bg-slate-100 text-slate-700 dark:bg-gray-900/70 dark:text-gray-300"
    >
        <div className="relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[29px] bg-white/88 p-6 backdrop-blur dark:bg-slate-950/86">
            <div className={`absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br ${component.accent} opacity-16 blur-3xl transition group-hover:opacity-28`} />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/35 to-transparent dark:via-white/50" />

            <div className="relative h-36">
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                    className="absolute inset-0"
                >
                    <HardwareIllustration type={component.type} />
                </motion.div>
            </div>

            <div className="relative mt-4 flex flex-1 flex-col">
                <p className="font-poppins text-xs font-bold uppercase tracking-[0.36em] text-cyan-700/80 dark:text-cyan-200/70">
                    {component.name}
                </p>
                <h3 className="mt-3 font-poppins text-2xl font-extrabold leading-tight text-slate-950 dark:text-white">
                    {component.spec}
                </h3>

                <div className="mt-5 grid gap-2">
                    {component.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-white/70">
                            <span className="size-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                            <span>{detail}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-5 flex-1 text-sm leading-6 text-slate-600 dark:text-gray-400">
                    {component.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {component.badges.map((badge) => (
                        <span
                            key={badge}
                            className="rounded-full border border-cyan-500/15 bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-800 dark:border-white/10 dark:bg-white/[0.06] dark:text-cyan-200"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.article>
);

const DeviceInfoSection = () => {
    return (
        <motion.section
            id="computer-specification"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="relative isolate w-full overflow-hidden px-5 py-20 text-slate-950 dark:text-white md:px-10 lg:px-12"
        >
 
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent)] dark:bg-[linear-gradient(to_top,rgba(30,20,10,0.7),transparent)]" />

            <div className="mx-auto max-w-6xl">
                <motion.div variants={sectionVariants} transition={{ duration: 0.5 }} className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/25 bg-cyan-400/10 px-4 py-2 font-poppins text-xs font-bold uppercase tracking-[0.35em] text-cyan-700 dark:border-cyan-300/25 dark:text-cyan-200">
                            <Sparkles className="size-4" />
                            MY WORKSTATION
                        </div>
                        <h2 className="mt-5 font-poppins text-4xl font-extrabold uppercase leading-tight md:text-5xl">
                            Computer <span className="text-blue-600">Specification</span>
                        </h2>
                        <p className="mt-5 max-w-2xl font-raleway text-sm leading-7 text-slate-600  dark:text-gray-300 md:text-base">
                            A powerful development workstation built for web development, game development, multitasking, and creative production.
                        </p>
                    </div>

                    <div className="grid min-w-[220px] gap-3 rounded-[26px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.12)] backdrop-blur dark:border-slate-100/10 dark:bg-slate-900 dark:shadow-[0_20px_55px_rgba(0,0,0,0.28)] transition-colors duration-300">
                        <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-200">
                            <Server className="size-5" />
                            <span className="font-poppins text-sm font-extrabold uppercase tracking-[0.24em]">Built For</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["App", "Design", "AI", "Game"].map((item) => (
                                <span key={item} className="rounded-full bg-slate-100 text-slate-700 dark:bg-gray-900 dark:text-gray-300 px-3 py-1.5 text-xs font-bold ">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" id="specification">
                    {highlights.map((item, index) => (
                        <HighlightCard key={item.label} item={item} index={index} />
                    ))}
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {componentSpecs.map((component, index) => (
                        <ComponentCard key={component.name} component={component} index={index} />
                    ))}
                </div>

            </div>
        </motion.section>
    );
};

export default DeviceInfoSection;
