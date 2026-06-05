"use client";

import Image from "next/image";
import { useState } from "react";
import {
    ChevronsDown,
    ChevronsLeft,
    ChevronsRight,
    CircleDot,
    Crosshair,
    Footprints,
    Gamepad2,
    Swords,
} from "lucide-react";
const playlistItems = [
    {
        title: "Ghost of Tsushima",
        youtubeId: "rTNfgIAi3pY",
        image: "/src/img/game/sushima.jpg",
        imagePosition: "center",
        className: "from-slate-950 via-slate-800 to-stone-500",
        accent: "left-1/3 top-1/2",
    },
    {
        title: "Doom Eternal",
        youtubeId: "_UuktemkCFI",
        className: "from-zinc-950 via-slate-700 to-orange-500",
        accent: "left-1/2 top-1/3",
    },
    {
        title: "Sekiro",
        youtubeId: "rXMX4YJ7Lks",
        className: "from-stone-300 via-stone-500 to-zinc-950",
        accent: "left-2/3 top-1/4",
    },
    {
        title: "Elden Ring",
        youtubeId: "E3Huy2cdih0",
        image: "/src/img/game/eldenring.jpg",
        imagePosition: "right center",
        className: "from-neutral-950 via-amber-900 to-stone-300",
        accent: "left-1/2 top-1/2",
    },
    {
        title: "Hades",
        youtubeId: "91t0ha9x0AE",
        className: "from-red-950 via-zinc-900 to-emerald-500",
        accent: "left-2/5 top-1/3",
    },
];

const controls = [
    { label: "Item", icon: CircleDot },
    { label: "Attack", icon: Crosshair },
    { label: "Special Attack", icon: Swords },
    { label: "Dash", icon: Footprints },
];

const GamePreview = ({
    title,
    image,
    imagePosition,
    className,
    accent,
    isActive = false,
    isLarge = false,
    onClick,
}: {
    title: string;
    image?: string;
    imagePosition?: string;
    className: string;
    accent: string;
    isActive?: boolean;
    isLarge?: boolean;
    onClick?: () => void;
}) => (
    <button
        type="button"
        aria-label={`Select ${title}`}
        onClick={onClick}
        className={[
            "relative overflow-hidden rounded-[26px] bg-gradient-to-br text-left shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition duration-300",
            className,
            isLarge ? "aspect-[1.45/1] w-full" : "aspect-square w-full",
            isActive ? "scale-[1.03] ring-2 ring-cyan-300 ring-offset-4 ring-offset-slate-950" : "opacity-80 hover:scale-[1.02] hover:opacity-100",
        ].join(" ")}
    >
        {image && (
            <Image
                src={image}
                alt={`${title} game artwork`}
                fill
                sizes="(min-width: 768px) 220px, 80vw"
                className="object-cover"
                style={{ objectPosition: imagePosition }}
            />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.24),transparent_22%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[24%] bg-black/40 [clip-path:polygon(0_56%,18%_40%,39%_52%,58%_34%,100%_48%,100%_100%,0_100%)]" />
        <div className={`absolute ${accent} size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/70 blur-sm`} />
        <div className={`absolute ${accent} size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white`} />
        <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate font-poppins text-xs font-bold text-white">
            {title}
        </span>
        {isLarge && (
            <>
                <div className="absolute bottom-6 left-1/2 h-16 w-24 -translate-x-1/2 rounded-t-full bg-black/70" />
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
                    <span className="size-5 rounded-full bg-cyan-400/80" />
                    <span className="size-8 rounded-full border-2 border-cyan-300 bg-cyan-500/35" />
                    <span className="size-5 rounded-full bg-cyan-400/80" />
                </div>
                <div className="absolute bottom-4 left-12 h-2 w-20 rounded-full bg-emerald-400/80" />
                <div className="absolute bottom-4 right-12 h-2 w-16 rounded-full bg-white/80" />
            </>
        )}
    </button>
);

const PlaylistGameSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedGame = playlistItems[selectedIndex];
    const visibleItems = [-1, 0, 1].map((offset) => {
        const itemIndex = (selectedIndex + offset + playlistItems.length) % playlistItems.length;

        return {
            ...playlistItems[itemIndex],
            itemIndex,
        };
    });

    const handlePrevious = () => {
        setSelectedIndex((currentIndex) =>
            currentIndex === 0 ? playlistItems.length - 1 : currentIndex - 1
        );
    };

    const handleNext = () => {
        setSelectedIndex((currentIndex) =>
            currentIndex === playlistItems.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <section id="gaming" className="relative isolate w-full bg-[url(/src/img/game/bg2.jpg)] bg-cover bg-center px-5 py-12 text-white shadow-2xl md:px-10 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_5%,rgba(148,163,184,0.28),transparent_28%),radial-gradient(circle_at_74%_52%,rgba(20,184,166,0.24),transparent_28%),linear-gradient(115deg,rgba(2,6,23,0.35),rgba(15,23,42,0.86))] -z-10" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_48%,transparent_49%),linear-gradient(25deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:180px_180px,36px_36px] -z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-slate-950 to-transparent -z-10" />
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-slate-950 to-transparent -z-10" />

            <div className="relative z-10 mx-auto max-w-6xl rounded-[34px] bg-slate-900/82 px-5 py-10 text-white shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur md:px-10 lg:px-12">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="font-poppins text-xs font-bold uppercase tracking-[0.45em] text-cyan-200/75">Gaming Queue</p>
                        <h2 className="mt-3 font-poppins text-3xl font-extrabold uppercase md:text-4xl">Playlist Game</h2>
                    </div>
                    <p className="max-w-sm text-sm leading-6 text-white/55">
                        Gameplay picks with the same moody arcade grading from the game intro.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-8">
                    <button
                        type="button"
                        aria-label="Previous game"
                        onClick={handlePrevious}
                        className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                        <ChevronsLeft className="size-6 stroke-[2.5]" />
                    </button>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-8">
                        {visibleItems.map((panel) => (
                            <div
                                key={panel.title}
                                className={`min-w-0 ${selectedIndex === panel.itemIndex ? "block" : "hidden sm:block"}`}
                            >
                                <GamePreview
                                    title={panel.title}
                                    image={panel.image}
                                    imagePosition={panel.imagePosition}
                                    className={panel.className}
                                    accent={panel.accent}
                                    isActive={selectedIndex === panel.itemIndex}
                                    onClick={() => setSelectedIndex(panel.itemIndex)}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        aria-label="Next game"
                        onClick={handleNext}
                        className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                        <ChevronsRight className="size-6 stroke-[2.5]" />
                    </button>
                </div>

                <div className="mt-6 flex justify-center gap-2">
                    {playlistItems.map((item, index) => (
                        <button
                            key={item.title}
                            type="button"
                            aria-label={`Play ${item.title}`}
                            onClick={() => setSelectedIndex(index)}
                            className={`h-2.5 rounded-full transition-all ${selectedIndex === index ? "w-8 bg-cyan-300" : "w-2.5 bg-white/45 hover:bg-white/75"}`}
                        />
                    ))}
                </div>

                <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(0,1.35fr)_0.75fr] md:gap-14">
                    <div className="aspect-video w-full overflow-hidden rounded-[30px] bg-black shadow-[0_22px_60px_rgba(0,0,0,0.42)] ring-1 ring-white/10">
                        <iframe
                            key={selectedGame.youtubeId}
                            className="h-full w-full"
                            src={`https://www.youtube.com/embed/${selectedGame.youtubeId}?rel=0&modestbranding=1`}
                            title={`${selectedGame.title} gameplay video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>

                    <div className="flex h-full flex-col justify-center gap-8 rounded-[30px] bg-slate-800/88 p-6 font-poppins shadow-[0_18px_45px_rgba(0,0,0,0.28)] ring-1 ring-white/10 backdrop-blur">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Now Playing</p>
                            <h3 className="mt-1 text-2xl font-extrabold">{selectedGame.title}</h3>
                        </div>
                        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-300 bg-cyan-400/10 px-6 py-3 font-extrabold uppercase text-cyan-200 shadow-[inset_-22px_0_0_rgba(10,10,10,0.4)]">
                            <Gamepad2 className="size-5" />
                            Controller
                        </div>

                        <div className="flex items-center gap-3 text-sm font-semibold">
                            <div className="grid grid-cols-2 gap-1">
                                <span className="grid size-5 place-items-center rounded-full border border-cyan-300/70 text-[10px] text-cyan-100">X</span>
                                <span className="grid size-5 place-items-center rounded-full border border-cyan-300/70 text-[10px] text-cyan-100">Y</span>
                                <span className="grid size-5 place-items-center rounded-full border border-cyan-300/70 text-[10px] text-cyan-100">A</span>
                                <span className="grid size-5 place-items-center rounded-full border border-cyan-300/70 text-[10px] text-cyan-100">B</span>
                            </div>
                            <span className="text-white/80">Action Button</span>
                        </div>

                        <div className="grid gap-3 text-base font-semibold text-white/82">
                            {controls.map(({ label, icon: Icon }) => (
                                <div key={label} className="flex items-center gap-3">
                                    <Icon className="size-5 text-cyan-200" />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaylistGameSection;
