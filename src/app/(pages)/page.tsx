import LayoutComponent from "../../components/layout/layout";
import { Metadata } from "next";
import BgHeroSection from "./_section/BgHeroSection";
import AboutSection from "./_section/AboutSection";
import DeviceInfoSection from "./_section/DeviceInfoSection";
import GameIntroSection from "./_section/GameIntroSection";
import PlaylistGameSection from "./_section/PlaylistGameSection";
import ProjectSection from "./_section/ProjectSection";
import { IconHero } from "@/src/components/elemen/img/Icon";
import CardRoundedItem from "@/src/components/elemen/card/CardRoundeditem";
import ArrowButton from "@/src/components/elemen/button/ArrowButton";
import { getProject } from "@/src/utils/getApiRequest";

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {
    const getDataProject = await getProject();
  return (
    <LayoutComponent>
      <section className="grid w-full py-10">
        <BgHeroSection />
        <AboutSection />
        <section className='container pt-36 pb-52 flex flex-col justify-center items-center gap-10 px-6 transition-colors duration-300'>
          <div className='-mt-48 flex items-center flex-col'>
            <IconHero className='max-md:w-[150px] w-[300px] my-2' />
            <div className='md:-mt-40 -mt-52 text-center'>
              <h1 className=' font-poppins font-bold text-2xl uppercase text-black dark:text-white'>Madamroger</h1>
            </div>
          </div>
          <CardRoundedItem />
          <ArrowButton href="#specification" />
        </section>
        <DeviceInfoSection />
        <GameIntroSection />
        <PlaylistGameSection />
        <ProjectSection projects={getDataProject } />

      </section>

    </LayoutComponent>
  );
}
