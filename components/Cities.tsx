import { MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";

const cities = [
  { name: "Mumbai", tag: "Metro" },
  { name: "Delhi NCR", tag: "Metro" },
  { name: "Bengaluru", tag: "Metro" },
  { name: "Chennai", tag: "Metro" },
  { name: "Hyderabad", tag: "Metro" },
  { name: "Pune", tag: "Tier I" },
  { name: "Kolkata", tag: "Tier I" },
  { name: "Ahmedabad", tag: "Tier I" },
  { name: "Kochi", tag: "Tier I" },
  { name: "Chandigarh", tag: "Tier I" },
  { name: "Jaipur", tag: "Tier II" },
  { name: "Lucknow", tag: "Tier II" },
  { name: "Goa", tag: "Tier II" },
  { name: "+ Smaller towns", tag: "Tier II/III" },
];

export function Cities() {
  return (
    <section className="relative py-28 lg:py-36">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Coverage"
          tone="mint"
          title={
            <>
              Inheritance support, <span className="mint-text">across India.</span>
            </>
          }
          description="From the major metros to ancestral properties in smaller towns — we coordinate across state-specific procedures, institutions and language."
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {cities.map((c) => (
            <div
              key={c.name}
              className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-mint/30 hover:bg-mint/[0.05]"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-white/40 transition-colors group-hover:text-mint" />
                <span className="text-[13.5px] font-medium tracking-tight text-white/85">
                  {c.name}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
