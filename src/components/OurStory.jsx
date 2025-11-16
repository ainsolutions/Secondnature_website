import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import TextCard from "./ui/TextCard";
import { Award, Lightbulb, Network, Target } from "lucide-react";

const OurStory = () => {
    return (
        <Section id="story">
            <SectionHeading
                heading="Our Story"
                desc="Founded in 2008 on Irish farms, Second Nature Oils began by crafting small batches of cold-pressed, organic rapeseed oil for local customers and farmers’ markets. What started as a humble offering has since grown into a trusted name in premium, sustainably produced oils."
                bgImage="/src/assets/banner/Banner2.jpg"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto justify-center">
                {/* <TextCard text="Founded in 2008 on Irish farms, Second Nature Oils began by crafting small batches of cold-pressed, organic rapeseed oil for local customers and farmers’ markets. What started as a humble offering has since grown into a trusted name in premium, sustainably produced oils." /> */}
                <TextCard icon={Network} text="At the heart of Second Nature Oils lies a network of certified organic farms across Europe, dedicated to nurturing our growth and uncompromising quality." />
                <TextCard icon={Award} text="As awareness of sustainable, organic production grows, Second Nature Oils stands as the trusted choice for those who value purity, wellness, and respect for the environment." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto justify-center">
                <TextCard heading="Our Vision" text="To make Second Nature Oils a household name in Organic Oils Globally" icon={Lightbulb}/>
                <TextCard heading="Our Mission" text="We strive to provide our customer with an ethically produced, high quality and healthy alternative to the myriad of culinary oils." icon={Target} />            
            </div>
        </Section>
    );
};

export default OurStory;