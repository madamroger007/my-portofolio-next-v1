"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Github, Layers3, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useProjects, type FeaturedProject } from "@/src/hooks/useProjects";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

const formatYear = (date?: string) => {
    if (!date) {
        return "Project";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "Project";
    }

    return parsedDate.getFullYear().toString();
};

const getIconName = (icon: FeaturedProject["icons"][number]) => {
    if (typeof icon !== "string") {
        return icon.name;
    }

    const nameMatch = icon.match(/name:\s*"([^"]+)"/);
    return nameMatch?.[1] ?? icon;
};

const ProjectSkeleton = () => (
    <div className="overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-300/80 via-cyan-300/25 to-slate-200/70 p-px shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:from-white/18 dark:via-cyan-200/10 dark:to-white/5 dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
        <div className="rounded-[29px] border border-white/50 bg-white/82 p-3 backdrop-blur dark:border-white/10 dark:bg-slate-900/76">
            <div className="aspect-video animate-pulse rounded-[22px] bg-slate-200 dark:bg-white/10" />
        </div>
        <div className="space-y-5 p-6">
            <div className="flex gap-2">
                <div className="h-8 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
                <div className="h-8 w-28 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
            </div>
            <div className="h-7 w-3/4 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
            <div className="space-y-2">
                <div className="h-4 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
                <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
            </div>
            <div className="flex gap-2">
                {[0, 1, 2].map((item) => (
                    <div key={item} className="h-8 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
                ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="h-11 animate-pulse rounded-2xl bg-slate-200 dark:bg-white/10" />
                <div className="h-11 animate-pulse rounded-2xl bg-slate-200 dark:bg-white/10" />
            </div>
        </div>
    </div>
);

const StateCard = ({ message }: { message: string }) => (
    <div className="rounded-[30px] border border-slate-200/80 bg-white/80 p-8 text-center font-poppins text-base font-bold text-slate-700 shadow-[0_20px_55px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-slate-900/72 dark:text-white/78 dark:shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
        {message}
    </div>
);

const ProjectCard = ({ project, index }: { project: FeaturedProject; index: number }) => (
    <motion.article
        variants={fadeUp}
        transition={{ duration: 0.42, delay: index * 0.06 }}
        whileHover={{ y: -7 }}
        className="group relative min-w-0 overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-300/80 via-cyan-300/25 to-slate-200/70 p-px shadow-[0_24px_70px_rgba(15,23,42,0.14)] transition dark:from-white/18 dark:via-cyan-200/10 dark:to-white/5 dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
    >
        <div className="relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[29px] border border-white/50 bg-white/82 p-3 backdrop-blur dark:border-white/10 dark:bg-gray-900">
            <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/18" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/35 to-transparent dark:via-white/50" />

            <div className="relative aspect-video overflow-hidden rounded-[24px] bg-slate-200 ring-1 ring-slate-950/5 dark:bg-slate-950 dark:ring-white/10">
                <Image
                    src={project.imgUrl}
                    alt={`${project.title} project thumbnail`}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78)),radial-gradient(circle_at_70%_22%,rgba(34,211,238,0.24),transparent_24%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 font-poppins text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur">
                    {project.category?.title ?? "Project"}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                        <CalendarDays className="size-3.5" />
                        {formatYear(project.createdAt)}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                        <Tag className="size-3.5" />
                        {project.category?.subtitle ?? project.category?.title ?? "Project"}
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                <h3 className="font-poppins text-2xl font-extrabold leading-tight text-slate-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
                    {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-gray-400 dark:text-white/58">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.icons.map((icon, iconIndex) => {
                        const technology = getIconName(icon);

                        return (
                            <span
                                key={`${technology}-${iconIndex}`}
                                className="rounded-full border border-cyan-500/15 bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-800 transition group-hover:border-cyan-500/30 dark:border-white/10 dark:bg-white/[0.06] dark:text-cyan-100"
                            >
                                {technology}
                            </span>
                        );
                    })}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
                    <Link
                        href={project.url}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-400/10 px-4 py-3 font-poppins text-sm font-extrabold text-cyan-700 shadow-[inset_-24px_0_0_rgba(255,255,255,0.38)] transition hover:bg-cyan-400/20 dark:border-cyan-300 dark:text-cyan-200 dark:shadow-[inset_-24px_0_0_rgba(10,10,10,0.35)]"
                    >
                        View Project
                        <ArrowUpRight className="size-4" />
                    </Link>
                    <Link
                        href={project.url}
                        target="_blank"
                        aria-label={`${project.title} GitHub repository`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300/80 bg-white/60 px-4 py-3 font-poppins text-sm font-extrabold text-slate-700 transition hover:border-cyan-500/40 hover:text-cyan-700 dark:border-white/15 dark:bg-black/20 dark:text-white/78 dark:hover:text-cyan-200"
                    >
                        <Github className="size-4" />
                        <span className="sm:hidden lg:inline">GitHub</span>
                    </Link>
                </div>
            </div>
        </div>
    </motion.article>
);

const ProjectSection = () => {
    const { projects, isLoading, error } = useProjects();

    return (
        <motion.section
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="w-full px-5 py-20 text-slate-950 transition-colors duration-300 dark:text-white md:px-10 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">
                <motion.div variants={fadeUp} transition={{ duration: 0.45 }} className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/25 bg-cyan-400/10 px-4 py-2 font-poppins text-xs font-bold uppercase tracking-[0.35em] text-cyan-700 dark:border-cyan-300/25 dark:text-cyan-200">
                            <Layers3 className="size-4" />
                            PROJECTS
                        </div>
                        <h2 className="mt-5 font-poppins text-4xl font-extrabold uppercase leading-tight md:text-5xl">
                            Featured Projects
                        </h2>
                        <p className="mt-5 max-w-2xl font-raleway text-sm leading-7 text-gray-400 dark:text-white/62 md:text-base">
                            A selection of projects focused on frontend engineering, web applications, AI systems, and IoT development.
                        </p>
                    </div>
                </motion.div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {isLoading &&
                        [0, 1, 2].map((item) => (
                            <ProjectSkeleton key={item} />
                        ))}

                    {!isLoading && error && (
                        <div className="md:col-span-2 xl:col-span-3">
                            <StateCard message="Failed to load project data." />
                        </div>
                    )}

                    {!isLoading && !error && projects.length === 0 && (
                        <div className="md:col-span-2 xl:col-span-3">
                            <StateCard message="No projects available." />
                        </div>
                    )}

                    {!isLoading &&
                        !error &&
                        projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectSection;
