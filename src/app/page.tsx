import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ValueProp from "@/components/sections/ValueProp";
import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <ValueProp />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
