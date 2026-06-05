import ArrowButton from "@/src/components/elemen/button/ArrowButton";
import CardRoundedItem from "@/src/components/elemen/card/CardRoundeditem";
import AboutCorousel from "@/src/components/elemen/corousel/AboutCorousel";
import { IconHero } from "@/src/components/elemen/img/Icon";
import Link from "next/link";

const AboutSection = () => {
    return (
            <div className="grid w-full grid-cols-1 items-center max-md:gap-20 gap-5 px-6 py-14 md:grid-cols-[0.9fr_1.4fr] md:px-10 lg:px-16 ">
                <div className="max-w-md">
                    <h2 className="section-title font-raleway text-4xl font-extrabold text-black dark:text-gray-100 md:text-5xl">About <span className="text-blue-600"> Me</span></h2>
                    <p className="section-description mt-5 text-justify font-raleway text-sm leading-tight text-black dark:text-gray-300 md:text-base">
                        I am a passionate app developer, marketer, and designer with a strong background in creating innovative solutions. With years of experience in the industry, I have honed my skills in various programming languages and design tools. I am dedicated to delivering high-quality work and continuously learning to stay ahead in the ever-evolving tech landscape.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <Link href="/about" className="inline-block rounded-full border-2 border-black dark:border-gray-300 px-10 py-2 font-raleway font-extrabold ">
                            More About
                        </Link>
                    </div>
                </div>

                <AboutCorousel />
            </div>

    )
}

export default AboutSection;
