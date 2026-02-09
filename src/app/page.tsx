import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import SocialProof from "@/components/sections/SocialProof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { styles } from "@/lib/styles";

// Accent divider component for visual breaks
function AccentDivider() {
  return <div className={styles.accentDivider} />;
}

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ValueProp />
      <AccentDivider />
      <Services />
      <Work />
      <AccentDivider />
      {/* <SocialProof /> */}
      <CTA />
      <Footer />
    </main>
  );
}
