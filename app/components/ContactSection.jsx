import { useState } from "react";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { Mail, Phone, MapPin, Send, CalculatorIcon } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: ""
  });



  // ✅ Checkout & Send Message to Node.js backend
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const data = { user: userInfo };
    try {
      // Update the API endpoint below to match your Node.js backend port
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // alert("✅ Message sent successfully!");
        setSent(true)
        setUserInfo({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send order. Please try again.");
      }
    } catch (err) {
      setSent(false);
      console.error("Error sending email:", err);
      alert("❌ Error sending order. Please check your connection or backend.");
    }
    setLoading(false);
  };

  return (
    <Section id="contact" className="relative py-20">
      <SectionHeading
        heading="Contact Us"
        desc="For wholesale, stockists, or general enquiries email sales@secondnatureoils.com"
        bgImage="/assets/banner/Banner4.jpg"
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — CONTACT INFO */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-4">
            Get in Touch
          </h2>
          <p className="text-[var(--color-text)] text-sm md:text-base leading-relaxed max-w-md">
            Whether you’re a retailer, distributor, or customer, we’d love to
            hear from you. Reach out for collaborations, partnerships, or any
            inquiries.
          </p>

          <ul className="space-y-3 text-[var(--color-text)] text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[var(--color-accent)]" />
              <span>+353 (0)1 563 6660</span>
            </li>
            <li className="flex items-center gap-3">
              <CalculatorIcon className="w-5 h-5 text-[var(--color-accent)]" />
              <span>+353 (0) 83 342 9060</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[var(--color-accent)]" />
              <span>sales@secondnatureoils.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              <span>Dublin, Ireland</span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <div className="backdrop-blur-md rounded-2xl p-8 shadow-lg relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--color-primary)_0%,var(--color-text)_90%,var(--color-text)_100%)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/20 via-transparent to-[--color-accent]/10 rounded-2xl pointer-events-none"></div>

          {!sent && !loading ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 relative z-10"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white border border-white/20 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:outline-none text-[--color-text] placeholder-[--color-text] transition"
                required
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
              <input
                placeholder="Your Email"
                type="email"
                className="w-full p-3 bg-white border border-white/20 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:outline-none text-[--color-text] placeholder-[--color-text] transition"
                required
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              <textarea
                type="text"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-white border border-white/20 rounded-lg focus:ring-2 focus:ring-[--color-primary] focus:outline-none text-[--color-text] placeholder-[--color-text] transition"
                required
                onChange={(e) =>
                  setUserInfo({ ...userInfo, message: e.target.value })
                }
              />
              <button
                type="submit"
                className="flex items-center gap-2 justify-center w-full bg-[VAR(--color-primary)] text-[var(--color-bg)] font-semibold py-3 rounded-full hover:opacity-90 transition-all shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center space-y-3 relative z-10">
              {loading ? <h4 className="font-semibold text-[var(--color-bg)] text-lg">
                Please wait — Your message is sending...
              </h4> : <h4 className="font-semibold text-[var(--color-bg)] text-lg">
                Thank You — Message is sent!
              </h4>}
              <p className="text-[var(--color-bg)] text-sm">
                Our team will review your query and contact you back shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-sm text-[var(--color-bg)] underline hover:opacity-80"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
