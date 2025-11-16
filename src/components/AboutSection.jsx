import React from "react";
import {
  FaTractor,
  FaSeedling,
  FaWater,
  FaTree,
  FaHandshake,
} from "react-icons/fa";
import { MdCheckCircle, MdMilitaryTech } from "react-icons/md";
import ParallaxImage from "./ui/ParallaxImage";
import Section from "./ui/Section";
import TextCard from "./ui/TextCard";
import SectionHeading from "./ui/SectionHeading";
import { Globe, Leaf, Sprout } from "lucide-react";

const services = [
  {
    icon: <FaSeedling />,
    title: "Organic Farming",
    desc: "We use eco-friendly methods to grow crops without synthetic chemicals.",
  },
  {
    icon: <FaWater />,
    title: "Water Management",
    desc: "Smart irrigation techniques that conserve water and improve soil quality.",
  },
  {
    icon: <FaTractor />,
    title: "Modern Equipment",
    desc: "Advanced machinery for planting, harvesting, and processing crops efficiently.",
  },
  {
    icon: <FaTree />,
    title: "Agro Forestry",
    desc: "Sustainable integration of trees and crops for long-term ecological balance.",
  },
  {
    icon: <FaHandshake />,
    title: "Customer Support",
    desc: "We provide full support from consultation to delivery.",
  },
  {
    icon: <FaSeedling />,
    title: "Fertilizer Supply",
    desc: "Natural and organic fertilizers that enrich the soil and enhance yield.",
  },
];



const awards = [
  "Bord Bia",
  "Euro Toque",
  "JFC",
  "Blas na hEireaan",
  "Irish Quality Food",
  "Bridgestone",
  "Great Taste"
];

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionHeading
        heading="About Us"
        desc="We’re committed to bringing nature’s essence into your life through authentic, organic oils crafted with passion and care."
        bgImage="/assets/banner/Banner1.png"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto justify-center">
        <TextCard icon={Leaf} text="Second Nature Oils is a proudly family-owned enterprise dedicated to exemplary social and environmental stewardship, championing sustainable practices to safeguard the planet and uplift our communities." />
        <TextCard icon={Sprout} text="Originating from modest roots on an Organic farms, our brand has flourished, gaining widespread recognition among leading retailers, hotels, and restaurants across Ireland." />
        <TextCard
          icon={Globe}
          className="col-span-full justify-self-center md:w-1/2"
          text="Expanding far beyond our local beginnings, Second Nature Oils now reaches markets in the UK, Japan, Singapore, and The Middle East. Certified by the Organic Trust Ireland, Our oils are cultivated and produced without chemical fungicides, insecticides, herbicides, or synthetic fertilisers — Guaranteeing not only purity, but also unwavering protection for crucial honeybee populations and the environment."
        />
      </div>

    </Section>
  );
};

export default AboutSection;
