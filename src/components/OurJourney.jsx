import { motion } from "framer-motion";
import {
  Factory,
  Store,
  UtensilsCrossed,
  Truck,
  Globe2,
  Building2,
  Award,
} from "lucide-react";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

const timelineData = [
  { year: 2008, title: "Founded", desc: "Introduced in local farmer’s markets", icon: Factory },
  { year: 2009, title: "Retail Growth", desc: "Local Retailers and Convenience Stores", icon: Store },
  { year: 2010, title: "Recognition", desc: "Gained popularity among Craft Butchers", icon: UtensilsCrossed },
  { year: 2014, title: "Expansion", desc: "National Distributors", icon: Truck },
  { year: 2018, title: "Global Reach", desc: "Exported Globally", icon: Globe2 },
  { year: 2020, title: "Further expansion", desc: "Impressed clients in Hospitality Industry", icon: Building2 },
  { year: 2023, title: "Success", desc: "Continued Success...", icon: Award },
];

export default function OurJourney() {
  return (
    <Section>
      <SectionHeading
        heading="Our Journey"
        desc="2008 onwards..."
        bgImage="/assets/banner/Banner5.jpg"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Decorative curvy SVG path (desktop only) */}
        <svg
          className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-40 pointer-events-none"
          height="180"
          viewBox="0 0 1200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 0 100 C 200 50, 400 150, 600 100 S 1000 150, 1200 100"
            stroke="url(#goldGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#6B8E23" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>

        {/* Desktop horizontal layout */}
        <div className="hidden md:flex justify-between items-center relative">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isAbove = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: isAbove ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center text-center ${
                  isAbove ? "mb-20" : "mt-20"
                } w-[120px] md:w-[150px]`}
              >
                {isAbove && (
                  <div className="mb-3">
                    <p className="text-xs text-[--color-text]">{item.year}</p>
                    <h3 className="text-sm md:text-base font-semibold text-[--color-primary]">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[--color-text]">{item.desc}</p>
                  </div>
                )}

                <div className="relative flex flex-col items-center">
                  <div className="p-3 bg-gradient-to-br from-[--color-primary] to-[--color-accent] rounded-full shadow-lg border-2 border-[--color-primary]">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {!isAbove && (
                  <div className="mt-3">
                    <p className="text-xs text-[--color-text]">{item.year}</p>
                    <h3 className="text-sm md:text-base font-semibold text-[--color-primary]">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[--color-text]">{item.desc}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile stacked layout */}
        <div className="flex flex-col md:hidden mt-10 space-y-6">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 border-l-2 border-[--color-primary]/30 pl-4"
              >
                <div className="p-2 bg-gradient-to-br from-[--color-primary] to-[--color-accent] rounded-full shadow-md border border-[--color-primary] mt-1">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[--color-text]">{item.year}</p>
                  <h3 className="text-base font-semibold text-[--color-primary]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[--color-text]/80">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
