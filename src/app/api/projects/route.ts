import { NextResponse } from "next/server";
import type { FeaturedProject } from "@/src/hooks/useProjects";

const projects: FeaturedProject[] = [
    {
        url: "https://github.com/madamroger007/inventaris.git",
        title: "IOT Smart Farming",
        description: "The system monitors real-time environmental data and automatically controls water irrigation and mist spray to improve plant growth efficiency.",
        icons: [
            {
                id: "kytnqx4kgoulfnw3sezi6sjr",
                name: "Flask",
                url: "https://res.cloudinary.com/dqg6nsz40/image/upload/v1771893826/portfolio/flask.png",
            },
            {
                id: "2podkypujasjqro2n7difhx7",
                name: "Python",
                url: "https://res.cloudinary.com/dqg6nsz40/image/upload/v1771893826/portfolio/python.png",
            },
            {
                id: "mqtt",
                name: "MQTT",
            },
            {
                id: "esp32",
                name: "ESP32",
            },
        ],
        imgUrl: "https://res.cloudinary.com/dqg6nsz40/image/upload/v1771893826/portfolio/nslz3k1lvrfd6a48anxs.png",
        id: "fyrun55jdcuwbepiwrkrx76a",
        publicId: "portfolio/nslz3k1lvrfd6a48anxs",
        createdAt: "2026-02-24T00:43:47.435Z",
        updatedAt: "2026-02-24T00:43:47.436Z",
        category: {
            id: "57matkw74lod4mjikmqhqyng",
            title: "Application",
            subtitle: "Application",
        },
    },
    {
        id: "portfolio-platform",
        url: "https://github.com/madamroger007",
        title: "Frontend Portfolio Platform",
        description: "A responsive portfolio experience with modern sections, animation, and adaptive theme styling.",
        icons: [
            { id: "next", name: "Next.js" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "framer", name: "Framer Motion" },
            { id: "typescript", name: "TypeScript" },
        ],
        imgUrl: "/src/img/game/bg2.jpg",
        publicId: "local/portfolio-platform",
        createdAt: "2026-06-05T00:00:00.000Z",
        updatedAt: "2026-06-05T00:00:00.000Z",
        category: {
            id: "frontend",
            title: "Application",
            subtitle: "Frontend",
        },
    },
    {
        id: "ai-decision-system",
        url: "https://github.com/madamroger007",
        title: "AI Project Decision System",
        description: "An AI-assisted decision workflow for classifying project signals and supporting automation.",
        icons: [
            { id: "python", name: "Python" },
            { id: "flask", name: "Flask" },
            { id: "ml", name: "Machine Learning" },
            { id: "postgres", name: "PostgreSQL" },
        ],
        imgUrl: "/src/img/game/wukong.jpg",
        publicId: "local/ai-decision-system",
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z",
        category: {
            id: "ai",
            title: "Application",
            subtitle: "AI System",
        },
    },
];

export const GET = () => NextResponse.json(projects);
