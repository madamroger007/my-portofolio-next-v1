"use client";

import { IconHero } from "@/src/components/elemen/img/Icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Play,
    Search,
    Star,
} from "lucide-react";
import { FaSteam } from "react-icons/fa";
import Link from "next/link";

const featuredSlides = [
    {
        title: "Ghost of Tsushima",
        label: "Ghost of Tsushima",
        image: "/src/img/game/sushima.jpg",
        imagePosition: "center",
        className: "from-zinc-950 via-stone-700 to-amber-500",
    },
    {
        title: "Black Myth Wukong",
        label: "Black Myth Wukong",
        image: "/src/img/game/wukong.jpg",
        imagePosition: "left center",
        className: "from-red-950 via-zinc-900 to-rose-500",
    },
    {
        title: "Resident Evil Biohazard",
        label: "Resident Evil Biohazard",
        image: "/src/img/game/re7.jpg",
        imagePosition: "right center",
        className: "from-cyan-950 via-slate-900 to-lime-300",
    },
];

const gameCards = [
    {
        title: "Black Myth Wukong",
        rank: 1,
        rating: "5.0",
        image: "/src/img/game/wukong.jpg",
        imagePosition: "left center",
        className: "from-red-900 via-stone-700 to-slate-300",
    },
    {
        title: "Ghost of Tsushima",
        rank: 2,
        rating: "5.0",
        image: "/src/img/game/sushima.jpg",
        imagePosition: "center",
        className: "from-emerald-900 via-yellow-700 to-orange-400"
    },
    {
        title: "Elden Ring",
        rank: 3,
        rating: "5.0",
        image: "/src/img/game/eldenring.jpg",
        imagePosition: "right center",
        className: "from-zinc-950 via-stone-600 to-gray-300",
    },
    {
        title: "Resident Evil Biohazard",
        rank: 4,
        rating: "5.0",
        image: "/src/img/game/re7.jpg",
        imagePosition: "center bottom",
        className: "from-blue-950 via-sky-500 to-white",
    },
];

const GamePoster = ({
    className,
    image,
    imagePosition,
    title,
}: {
    className: string;
    image: string;
    imagePosition: string;
    title: string;
}) => (
    <div className={`relative aspect-[1.55/1] overflow-hidden rounded-[26px] bg-gradient-to-br ${className}`}>
        <Image
            src={image}
            alt={`${title} game artwork`}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.34),transparent_54%),radial-gradient(circle_at_65%_28%,rgba(255,255,255,0.16),transparent_18%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs uppercase tracking-[0.45em] text-white/70">{title.split(" ")[0]}</p>
            <h3 className="mt-1 font-poppins text-2xl font-extrabold uppercase tracking-[0.18em] text-white md:text-3xl">
                {title.split(" ").slice(1).join(" ") || title}
            </h3>
        </div>
    </div>
);

const GameIntroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const currentSlide = featuredSlides[activeSlide];

    useEffect(() => {
        const carouselTimer = window.setInterval(() => {
            setActiveSlide((currentIndex) => (currentIndex + 1) % featuredSlides.length);
        }, 4000);

        return () => window.clearInterval(carouselTimer);
    }, []);

    const handlePreviousSlide = () => {
        setActiveSlide((currentIndex) =>
            currentIndex === 0 ? featuredSlides.length - 1 : currentIndex - 1
        );
    };

    const handleNextSlide = () => {
        setActiveSlide((currentIndex) => (currentIndex + 1) % featuredSlides.length);
    };

    return (
        <section className="w-full ">
            <div className="relative mx-auto overflow-hidden bg-[url(/src/img/game/bg.jpg)] bg-cover bg-center px-5 pb-6 pt-6 text-white shadow-2xl md:px-12 md:pt-9">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_5%,rgba(148,163,184,0.28),transparent_28%),radial-gradient(circle_at_74%_52%,rgba(20,184,166,0.24),transparent_28%),linear-gradient(115deg,rgba(2,6,23,0.35),rgba(15,23,42,0.86))]" />
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_48%,transparent_49%),linear-gradient(25deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:180px_180px,36px_36px]" />
                <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-slate-950 to-transparent" />

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
                    <div className="flex items-center gap-3">
                        <IconHero className="size-12 fill-gray-100" />
                        <span className="font-poppins text-xl font-extrabold">Madamroger</span>
                    </div>

                    <nav className="hidden items-center gap-8 font-poppins text-sm font-semibold text-white/80 lg:flex">
                        <a href="#studio" className="transition hover:text-cyan-300">Instagram</a>
                        <a href="#features" className="transition hover:text-cyan-300">YouTube</a>
                        <a href="#download" className="transition hover:text-cyan-300">TikTok</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link href="https://steamcommunity.com/profiles/76561199158732070/" target="_blank" className="hidden items-center gap-3 rounded-full border border-white/25 bg-black/50 px-6 py-3 font-poppins text-sm font-bold transition hover:border-cyan-300 md:flex">
                            Steam
                            <FaSteam className="size-5" />
                        </Link>
                        <Link href="https://www.youtube.com/@madamroger" target="_blank" className="rounded-full border border-cyan-300 bg-cyan-400/10 px-6 py-3 font-poppins text-sm font-extrabold text-cyan-200 shadow-[inset_-22px_0_0_rgba(10,10,10,0.4)] transition hover:bg-cyan-300/20">
                            Playing Now
                        </Link>
                        <Link href="https://www.youtube.com/@madamroger" target="_blank" aria-label="Search games" className="grid size-10 place-items-center rounded-full border border-white/15 text-white/55 transition hover:text-white">
                            <Search className="size-5" />
                        </Link>
                    </div>
                </div>

                <div className="relative z-10 mt-16 grid items-center gap-10 lg:grid-cols-[0.92fr_1.15fr]">
                    <div className="max-w-lg">
                        <h2 className="font-poppins text-4xl font-extrabold uppercase leading-tight tracking-wide text-white md:text-5xl">
                            Enjoy Exploring The Game World ! Play with Us
                        </h2>
                        <p className="mt-7 max-w-md font-raleway text-sm leading-6 text-white/62 md:text-base ">
                            Im a content creator who loves to share my passion for gaming with the world. I create videos about game reviews, gameplay, and gaming news. I also stream on YouTube, where I interact with my audience and play games live. My goal is to entertain and inform my viewers while building a community of gamers who share my enthusiasm for the gaming industry.
                        </p>
                        <div className="mt-8 flex items-center gap-5">
                            <Link href="https://www.youtube.com/@madamroger" target="_blank" className="rounded-2xl border border-cyan-300 bg-slate-950/50 px-8 py-4 font-poppins font-extrabold text-cyan-200 shadow-[inset_-28px_0_0_rgba(77,0,1,0.45)] transition hover:bg-cyan-300/10">
                                See More
                            </Link>
                            <Link href="https://www.youtube.com/@madamroger" target="_blank" aria-label="Play intro video" className="grid size-14 place-items-center rounded-full bg-white/15 text-white shadow-[0_0_40px_rgba(255,255,255,0.28)] backdrop-blur transition hover:bg-white/25">
                                <Play className="ml-1 size-5 fill-white" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative min-h-[300px]">
                        <div className="absolute right-0 top-12 hidden h-56 w-40 rounded-[24px] bg-gradient-to-br from-yellow-900 via-red-800 to-zinc-950 opacity-70 shadow-2xl md:block" />
                        <div className="absolute right-12 top-6 hidden h-64 w-48 rounded-[26px] bg-gradient-to-br from-red-950 via-zinc-900 to-rose-500 opacity-85 shadow-2xl md:block" />
                        <div className="relative z-10 ml-auto max-w-xl">
                            <GamePoster
                                key={currentSlide.title}
                                className={currentSlide.className}
                                image={currentSlide.image}
                                imagePosition={currentSlide.imagePosition}
                                title={currentSlide.title}
                            />

                            <div className="absolute inset-y-0 left-3 flex items-center">
                                <button
                                    type="button"
                                    aria-label="Previous featured game"
                                    onClick={handlePreviousSlide}
                                    className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200 bg-opacity-20"
                                >
                                    <ChevronLeft className="size-5" />
                                </button>
                            </div>

                            <div className="absolute inset-y-0 right-3 flex items-center">
                                <button
                                    type="button"
                                    aria-label="Next featured game"
                                    onClick={handleNextSlide}
                                    className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200 bg-opacity-20"
                                >
                                    <ChevronRight className="size-5" />
                                </button>
                            </div>

                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                                {featuredSlides.map((slide, index) => (
                                    <button
                                        key={slide.title}
                                        type="button"
                                        aria-label={`Show ${slide.title}`}
                                        onClick={() => setActiveSlide(index)}
                                        className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-8 bg-cyan-300" : "w-2.5 bg-white/45 hover:bg-white/75"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-20 mt-14 rounded-[34px] bg-slate-800/88 px-5 py-5 shadow-[0_22px_60px_rgba(0,0,0,0.35)] backdrop-blur md:px-9">
                    <div className="grid gap-8 lg:grid-cols-[1fr_2.3fr_auto] lg:items-center">
                        <div className="flex items-center gap-5">

                            <div>
                                <p className="font-poppins text-xl font-extrabold uppercase">Top Played Games 5⭐</p>
                                <p className="mt-3 max-w-xs text-sm leading-5 text-white/55">
                                    These are the top 5 games that I have played and enjoyed the most. They are all highly rated and have received critical acclaim for their gameplay, story, and graphics.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                            {gameCards.map((game) => (
                                <div key={game.title} className="min-w-0">
                                    <div className="mb-2 flex items-center justify-center gap-0.5 text-yellow-300">
                                        {[0, 1, 2, 3, 4].map((star) => (
                                            <Star key={star} className={`size-3 ${star === 5 ? "fill-white/40 text-white/40" : "fill-yellow-300"}`} />
                                        ))}
                                    </div>
                                    <div className="relative mx-auto aspect-[0.82/1] max-w-[98px] overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg md:max-w-[112px]">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${game.className}`} />
                                        <Image
                                            src={game.image}
                                            alt={`${game.title} cover artwork`}
                                            fill
                                            sizes="112px"
                                            className="object-cover"
                                            style={{ objectPosition: game.imagePosition }}
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.78)),radial-gradient(circle_at_65%_24%,rgba(255,255,255,0.18),transparent_22%)]" />
                                        <span className="absolute -left-2 top-5 rounded-full bg-slate-900/80 px-2 py-1 text-xs font-extrabold text-cyan-200">
                                            {game.rating}
                                        </span>
                                    </div>
                                    <p className="mt-3 truncate text-center font-poppins text-sm font-extrabold text-white/80">{game.title}</p>
                                    <p className={`mt-1 text-center text-xs font-bold `}>{game.rank}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="https://www.youtube.com/@madamroger" target="_blank" aria-label="Explore more games" className="hidden size-10 place-items-center rounded-full border border-white/20 text-white/45 transition hover:text-white lg:grid">
                            <ArrowRight className="size-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameIntroSection;
