import { Quote } from "lucide-react";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import FadeInView from "./ui/FadeInView";

export default function Testimonials() {
  const hospitalityTestimonials = [
    {
      name: "Head Chef, 4-Star Hotel – Dublin",
      text: "Since introducing this cold-pressed organic rapeseed oil into our kitchen, guests have repeatedly commented on how ‘light and healthy’ our dishes taste. It has elevated both the flavour and quality of our menu.",
    },
    {
      name: "Restaurant Owner – Galway City",
      text: "We immediately noticed the improvement in taste and texture across our menu. The oil adds a subtle richness without overpowering other ingredients — a perfect fit for a fine-dining setting.",
    },
    {
      name: "Executive Chef, Boutique Hotel – Cork",
      text: "The golden colour and smooth flavour make this oil ideal for both frying and dressing. Our diners often ask what oil we use — that’s the best compliment we could receive.",
    },
    {
      name: "Café Manager – Killarney",
      text: "We wanted a cooking oil that aligned with our organic and sustainable values. This product exceeded expectations — it’s clean, versatile, and our customers genuinely taste the difference.",
    },
    {
      name: "Sous Chef, Modern Brasserie – Limerick",
      text: "The kitchen team loves working with this oil. It doesn’t smoke easily, adds a fresh aroma to our dishes, and customers consistently describe the food as lighter and healthier since we made the switch.",
    },
  ];

  const retailTestimonials = [
    {
      name: "Home Cook – Dublin Suburbs",
      text: "I’ve switched entirely to this rapeseed oil for daily cooking. Everything — from eggs to roast vegetables — tastes cleaner and more natural. You can feel the purity.",
    },
    {
      name: "Health Enthusiast – Cork",
      text: "I love that it’s 100% organic and cold-pressed. The light texture makes it perfect for both salads and frying. It feels healthy without sacrificing flavour.",
    },
    {
      name: "Nutrition Advisor – Galway",
      text: "I often recommend this oil to clients looking for a healthier alternative. It’s rich in Omega-3, easy to cook with, and has an excellent balance of flavour and nutrition.",
    },
    {
      name: "Retail Customer – Dublin City Centre",
      text: "The packaging caught my eye, but it’s the taste that kept me buying more. The oil is beautifully smooth and enhances every meal without greasiness.",
    },
    {
      name: "Home Baker – Wicklow",
      text: "This oil works brilliantly in baking and sautéing. I love that it’s pesticide-free and locally sourced — it’s become a kitchen essential in our home.",
    },
  ];

  return (
    <Section id="testimonials">
      <SectionHeading
        heading="Testimonials"
        desc="What Our Clients Say"
        bgImage="/public/assets/banner/Banner6.jpg"
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 mt-10">
        {/* Hospitality Column */}
        <div>
          <div className="relative w-full justify-between flex items-center gap-4 mb-8">
            {/* Heading Text */}
            <h3 className="text-2xl font-semibold text-[var(--color-accent)] relative">
              Hospitality Industry
              <span className="block w-16 h-[2px] bg-[--color-primary] mt-2 rounded-full"></span>
            </h3>
            {/* Decorative Image */}
            <div className="relative flex">
              <img
                src="/public/assets/products/05-Litre Rapseed Oil.png"
                alt="Rapeseed Oil Bottle"
                className="w-16 h-16 object-contain drop-shadow-lg animate-bounce-slow mr-[-25px] z-10"
              />
              <img
                src="/public/assets/products/05-Litre Rapseed Oil.png"
                alt="Rapeseed Oil Bottle"
                className="w-14 h-14 object-contain drop-shadow-lg animate-bounce-slow mr-[-30px]"
              />
              <img
                src="/public/assets/products/05-Litre Rapseed Oil.png"
                alt="Rapeseed Oil Bottle"
                className="w-16 h-16 object-contain drop-shadow-lg animate-bounce-slow"
              />
            </div>
          </div>
          <div className="space-y-6">
            {hospitalityTestimonials.map((t, i) => (
              <FadeInView key={i}>
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-[--color-primary] opacity-50" />
                  <p className="text-[--color-text] text-sm italic mb-4 leading-relaxed">
                    “{t.text}”
                  </p>
                  <p className="font-semibold text-[var(--color-accent)] text-sm text-right">
                    {t.name}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        {/* Retail Column */}
        <div>
          <div className="relative w-full justify-between flex items-center gap-4 mb-8">
            {/* Heading Text */}
            <h3 className="text-2xl font-semibold text-[var(--color-accent)] relative">
              Retail & Home Users
              <span className="block w-16 h-[2px] bg-[--color-primary] mt-2 rounded-full"></span>
            </h3>
            {/* Decorative Image */}
            <div className="relative flex">
              <img
                src="/public/assets/products/Full Rapeseed Oil Bottle.png"
                alt="Rapeseed Oil Bottle"
                className="w-16 h-16 object-contain drop-shadow-lg animate-bounce-slow mr-[-40px]"
              />
              <img
                src="/public/assets/products/Lemon Rapeseed Oil.png"
                alt="Rapeseed Oil Bottle"
                className="w-14 h-14 object-contain drop-shadow-lg animate-bounce-slow mr-[-40px]"
              />
              <img
                src="/public/assets/products/Basil Oil Bottle.png"
                alt="Rapeseed Oil Bottle"
                className="w-16 h-16 object-contain drop-shadow-lg animate-bounce-slow mr-[-40px]"
              />
              <img
                src="/public/assets/products/Olive Oil Bottle.png"
                alt="Rapeseed Oil Bottle"
                className="w-14 h-14 object-contain drop-shadow-lg animate-bounce-slow"
              />
            </div>
          </div>

          <div className="space-y-6">
            {retailTestimonials.map((t, i) => (
              <FadeInView key={i}>
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-[--color-primary] opacity-50" />
                  <p className="text-[--color-text] text-sm italic mb-4 leading-relaxed">
                    “{t.text}”
                  </p>
                  <p className="font-semibold text-[var(--color-accent)] text-sm text-right">
                    {t.name}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
