import PageHero from "@/components/sections/PageHero";
import PreferredCarriers from "@/components/sections/PreferredCarriers";
import CTABanner from "@/components/sections/CTABanner";

export default function Carriers() {
  return (
    <>
      <PageHero
        eyebrow="Global Network"
        title="OUR"
        highlight="CARRIERS"
        subtitle="We partner with the world's most reliable airlines and shipping lines to deliver capacity, coverage, and competitive rates — everywhere you need to go."
      />
      <PreferredCarriers />
      <CTABanner />
    </>
  );
}
