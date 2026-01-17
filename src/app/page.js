import HeroSlider from "@/components/Hero/HeroSlider";
import Stats from "@/components/Stats/Stats";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features/Features";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <HeroSlider />
      <Stats />
      <Features />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}