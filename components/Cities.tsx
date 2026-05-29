import { MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";

const cities = [
  // Metros
  { name: "Mumbai", tag: "Metro" },
  { name: "Delhi NCR", tag: "Metro" },
  { name: "Bengaluru", tag: "Metro" },
  { name: "Chennai", tag: "Metro" },
  { name: "Hyderabad", tag: "Metro" },
  { name: "Kolkata", tag: "Metro" },

  // Tier I
  { name: "Pune", tag: "Tier I" },
  { name: "Ahmedabad", tag: "Tier I" },
  { name: "Surat", tag: "Tier I" },
  { name: "Jaipur", tag: "Tier I" },
  { name: "Lucknow", tag: "Tier I" },
  { name: "Kanpur", tag: "Tier I" },
  { name: "Nagpur", tag: "Tier I" },
  { name: "Indore", tag: "Tier I" },
  { name: "Bhopal", tag: "Tier I" },
  { name: "Visakhapatnam", tag: "Tier I" },
  { name: "Vadodara", tag: "Tier I" },
  { name: "Coimbatore", tag: "Tier I" },
  { name: "Patna", tag: "Tier I" },
  { name: "Kochi", tag: "Tier I" },
  { name: "Chandigarh", tag: "Tier I" },

  // Tier II
  { name: "Thiruvananthapuram", tag: "Tier II" },
  { name: "Mysuru", tag: "Tier II" },
  { name: "Mangaluru", tag: "Tier II" },
  { name: "Madurai", tag: "Tier II" },
  { name: "Tiruchirappalli", tag: "Tier II" },
  { name: "Nashik", tag: "Tier II" },
  { name: "Aurangabad", tag: "Tier II" },
  { name: "Bhubaneswar", tag: "Tier II" },
  { name: "Raipur", tag: "Tier II" },
  { name: "Ranchi", tag: "Tier II" },
  { name: "Guwahati", tag: "Tier II" },
  { name: "Dehradun", tag: "Tier II" },
  { name: "Vijayawada", tag: "Tier II" },
  { name: "Goa", tag: "Tier II" },
  { name: "Gurugram", tag: "Tier II" },
  { name: "Noida", tag: "Tier II" },

  // Tier III
  { name: "Agra", tag: "Tier III" },
  { name: "Varanasi", tag: "Tier III" },
  { name: "Amritsar", tag: "Tier III" },
  { name: "Jodhpur", tag: "Tier III" },
  { name: "Udaipur", tag: "Tier III" },
  { name: "Jammu", tag: "Tier III" },
  { name: "Srinagar", tag: "Tier III" },
  { name: "Shillong", tag: "Tier III" },

  // Reach
  { name: "+ Smaller towns", tag: "Pan-India" },
  { name: "NRI coverage", tag: "Global" },
];

export function Cities() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Coverage"
          tone="mint"
          title={
            <>
              Inheritance support, <span className="mint-text">across India.</span>
            </>
          }
          description="From the major metros to ancestral properties in smaller towns, we coordinate across state-specific procedures, institutions and language."
        />

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {cities.map((c) => (
            <div
              key={c.name}
              className="group relative flex flex-col gap-1.5 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-3 transition-all duration-300 hover:border-mint/30 hover:bg-mint/[0.05] sm:px-4 sm:py-3.5"
            >
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/50">
                {c.tag}
              </span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-white/40 transition-colors group-hover:text-mint" />
                <span className="truncate text-[13px] font-medium tracking-tight text-white/85 sm:text-[13.5px]">
                  {c.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
