"use client";

import { useEffect, useState } from "react";

export type ProjectIcon = {
    id?: string;
    name: string;
    url?: string;
};

export type FeaturedProject = {
    id: string;
    url: string;
    title: string;
    description: string;
    icons: Array<ProjectIcon | string>;
    imgUrl: string;
    publicId?: string;
    createdAt?: string;
    updatedAt?: string;
    category: {
        id: string;
        title: string;
        subtitle: string;
    } | null;
};

type UseProjectsState = {
    projects: FeaturedProject[];
    isLoading: boolean;
    error: string | null;
};

let cachedProjects: FeaturedProject[] | null = null;

export const useProjects = (): UseProjectsState => {
    const [projects, setProjects] = useState<FeaturedProject[]>(cachedProjects ?? []);
    const [isLoading, setIsLoading] = useState(!cachedProjects);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (cachedProjects) {
            return;
        }

        let isMounted = true;

        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");

                if (!response.ok) {
                    throw new Error("Failed to load project data.");
                }

                const data = await response.json();
                const projectList = Array.isArray(data) ? data : data.data;

                if (!Array.isArray(projectList)) {
                    throw new Error("Invalid project response.");
                }

                cachedProjects = projectList;

                if (isMounted) {
                    setProjects(projectList);
                    setError(null);
                }
            } catch {
                if (isMounted) {
                    setError("Failed to load project data.");
                    setProjects([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchProjects();

        return () => {
            isMounted = false;
        };
    }, []);

    return { projects, isLoading, error };
};
