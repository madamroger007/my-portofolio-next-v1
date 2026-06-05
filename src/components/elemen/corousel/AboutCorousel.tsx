"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

const slideTransition = {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
};

const carouselItems = [
    {
        no: "01",
        year: "2026",
        images: [
            {
                src: "/src/img/bg/madamroger.svg",
                alt: "Creative mascot artwork",
                className: "h-32 w-24 md:h-40 md:w-28 lg:h-44 lg:w-32",
            },
            {
                src: "/src/img/bg/line man.png",
                alt: "Line art portrait",
                className:
                    "z-10 -mx-4 h-44 w-28 md:h-56 md:w-32 lg:h-64 lg:w-36",
            },
            {
                src: "/src/img/bg/bg animation profile.png",
                alt: "Abstract orbit artwork",
                className: "h-32 w-24 md:h-40 md:w-28 lg:h-44 lg:w-32",
            },
        ],
    },
    {
        no: "02",
        year: "2025",
        images: [
            {
                src: "/src/img/projek/movie-flask.png",
                alt: "Movie project preview",
                className: "h-32 w-24 md:h-40 md:w-28 lg:h-44 lg:w-32",
            },
            {
                src: "/src/img/projek/levelmusik.png",
                alt: "Music project preview",
                className:
                    "z-10 -mx-4 h-44 w-28 md:h-56 md:w-32 lg:h-64 lg:w-36",
            },
            {
                src: "/src/img/projek/ifstore.png",
                alt: "Store project preview",
                className: "h-32 w-24 md:h-40 md:w-28 lg:h-44 lg:w-32",
            },
        ],
    },
    {
        no: "03",
        year: "2023",
        images: [
            {
                src: "/src/img/icon/steam.png",
                alt: "Steam icon",
                className: "h-32 w-24 md:h-40 md:w-28 lg:h-44 lg:w-32",
            },
            {
                src: "/src/img/icon/xbox.png",
                alt: "Xbox icon",
                className:
                    "z-10 -mx-4 h-44 w-28 md:h-56 md:w-32 lg:h-64 lg:w-36",
            },
            {
                src: "/src/img/icon/web.png",
                alt: "Web icon",
                className: "h-32 w-24 md:h-40 md:w-28 lg:h-44 lg:w-32",
            },
        ],
    },
];

const AboutCorousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const activeItem = carouselItems[activeIndex];
    const activeImage = activeItem.images[activeImageIndex];

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const interval = window.setInterval(() => {
            setActiveIndex((current) =>
                current === carouselItems.length - 1 ? 0 : current + 1
            );
        }, AUTO_SLIDE_INTERVAL);

        return () => window.clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [activeIndex]);

    const showPreviousImage = () => {
        setActiveIndex((current) =>
            current === 0 ? activeItem.images.length - 1 : current - 1
        );
    };

    const showNextImage = () => {
        setActiveIndex((current) =>
            current === activeItem.images.length - 1 ? 0 : current + 1
        );
    };

    return (
        <div
            className="relative"
            onBlur={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative md:flex md:flex-row">

                <div className=" flex items-center ">
                    {/* Two overlapping copies of the year text, clipped to show left (black) and right (white) halves */}
                    <span
                        className="absolute md:rotate-180 -rotate-90 text-5xl font-Newsreader font-black leading-none tracking-normal text-black [writing-mode:vertical-rl] [-webkit-text-stroke:1.2px_#ffffff] md:text-6xl"
                        style={{ clipPath: "inset(0 0 50% 0)" }}
                    >
                        {activeItem.no}
                    </span>

                    <span
                        className="md:rotate-180 -rotate-90 text-5xl font-Newsreader font-black leading-none tracking-normal text-white [writing-mode:vertical-rl] [-webkit-text-stroke:1.2px_#000000] md:text-6xl"
                        style={{ clipPath: "inset(50% 0 0 0)" }}
                    >
                        {activeItem.no}
                    </span>
                </div>
                <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                        animate={{ opacity: 1, x: 0 }}
                        className="flex max-md:flex-col w-full md:items-center md:justify-center gap-2 md:gap-4 flex-col"
                        exit={{ opacity: 0, x: "-35%" }}
                        initial={{ opacity: 0, x: "35%" }}
                        key={activeItem.year}
                        transition={slideTransition}
                    >


                        <div className="w-full">
                            <div className="flex items-center justify-center gap-4 md:hidden">
                                <button
                                    aria-label="Show previous image"
                                    className="inline-flex size-9 items-center justify-center rounded-full border border-neutral-300/50 bg-background/70 text-foreground shadow-sm transition-colors hover:bg-muted"
                                    onClick={showPreviousImage}
                                    type="button"
                                >
                                    <ChevronLeft className="size-5" />
                                </button>

                                <div className="flex flex-col items-center gap-3">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -24 }}
                                            initial={{ opacity: 0, x: 24 }}
                                            key={`${activeItem.year}-${activeImage.src}`}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                        >
                                            <Card className="relative h-64 w-52 overflow-hidden rounded-md border border-neutral-200/70 bg-card shadow-md shadow-slate-400 dark:border-neutral-800 dark:shadow-blue-500">
                                                <Image
                                                    alt={activeImage.alt}
                                                    className="object-contain p-4"
                                                    fill
                                                    sizes="208px"
                                                    src={activeImage.src}
                                                />
                                            </Card>
                                        </motion.div>
                                    </AnimatePresence>

                                </div>

                                <button
                                    aria-label="Show next image"
                                    className="inline-flex size-9 items-center justify-center rounded-full border border-neutral-300/50 bg-background/70 text-foreground shadow-sm transition-colors hover:bg-muted"
                                    onClick={showNextImage}
                                    type="button"
                                >
                                    <ChevronRight className="size-5" />
                                </button>
                            </div>

                            <div className="hidden items-center justify-center gap-5  md:flex md:gap-8">
                                {activeItem.images.map((image) => (
                                    <Card
                                        className={cn(
                                            "relative rounded-none border-0 shadow-md dark:shadow-blue-500 shadow-slate-400",
                                            image.className
                                        )}
                                        key={`${activeItem.year}-${image.src}`}
                                    >
                                        <Image
                                            alt={image.alt}
                                            className="object-contain p-3"
                                            fill
                                            sizes="(min-width: 1024px) 144px, (min-width: 768px) 128px, 112px"
                                            src={image.src}
                                        />
                                    </Card>
                                ))}
                            </div>
                        </div>


                        <div className="w-full mt-7 flex items-center justify-center gap-3 ">
                            {carouselItems.map((item, index) => (
                                <button
                                    aria-label={`Show ${item.year} slide`}
                                    className={cn(
                                        "h-3 w-3 rounded-full bg-neutral-300 transition-colors ",
                                        activeIndex === index && "bg-neutral-500"
                                    )}
                                    key={item.year}
                                    onClick={() => setActiveIndex(index)}
                                    type="button"
                                />
                            ))}
                        </div>


                    </motion.div>
                </AnimatePresence>


                <div>
                    <div className="relative ml-1 flex justify-end h-48 items-center md:ml-3 md:h-64 max-md:px-10">
                        {/* Two overlapping copies of the year text, clipped to show left (black) and right (white) halves */}
                        <span
                            className="absolute md:rotate-180 -rotate-90 text-5xl font-Newsreader font-black leading-none tracking-normal text-black [writing-mode:vertical-rl] [-webkit-text-stroke:1.2px_#ffffff] md:text-6xl"
                            style={{ clipPath: "inset(0 0 50% 0)" }}
                        >
                            {activeItem.year}
                        </span>

                        <span
                            className="md:rotate-180 -rotate-90 text-5xl font-Newsreader font-black leading-none tracking-normal text-white [writing-mode:vertical-rl] [-webkit-text-stroke:1.2px_#000000] md:text-6xl"
                            style={{ clipPath: "inset(50% 0 0 0)" }}
                        >
                            {activeItem.year}
                        </span>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AboutCorousel;
