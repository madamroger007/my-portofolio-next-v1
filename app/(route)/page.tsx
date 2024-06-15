import LayoutComponent from "@/components/layout/layout";
import BgHeroSection from "./_section/BgHeroSection";
import { Metadata } from "next";

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
