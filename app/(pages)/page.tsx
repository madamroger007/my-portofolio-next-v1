import LayoutComponent from "@/components/layout/layout";
import { Metadata } from "next";
import BgHeroSection from "./_section/BgHeroSection";

export const metadata:Metadata ={
  title:"Home"
}

export default function Home() {
  return (
    <LayoutComponent>
      <section className="w-full pt-14 pb-52">
        <BgHeroSection />
      </section>
    </LayoutComponent>
  );
}
