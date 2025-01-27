
// src/app/page.tsx
import Hero from "@/components/Home/Hero";
import Products from "@/components/Products";
import Slides from "@/components/Home/Slides";
import SubHero from "@/components/Home/Subhero";
import ImageGallery from "@/components/Home/ImageGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <Products />
      <Slides />
      <ImageGallery />
    </>
  );
}
