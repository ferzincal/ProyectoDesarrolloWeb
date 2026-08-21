import { SiteLayout } from '@/components/site-layout';
import { Hero } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ImpactSection } from '@/components/sections/impact';
import { ServicesSection } from '@/components/sections/services';
import { MissionSection } from '@/components/sections/mission';
import { CampusSection } from '@/components/sections/campus';
import { StoriesSection } from '@/components/sections/stories';
import { HowToHelpSection } from '@/components/sections/how-to-help';
import { DonationSection } from '@/components/sections/donation';
import { TransparencySection } from '@/components/sections/transparency';
import { VisitSection } from '@/components/sections/visit';

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <AboutSection />
      <ImpactSection />
      <ServicesSection />
      <MissionSection />
      <CampusSection />
      <StoriesSection />
      <HowToHelpSection />
      <DonationSection />
      <TransparencySection />
      <VisitSection />
    </SiteLayout>
  );
}
