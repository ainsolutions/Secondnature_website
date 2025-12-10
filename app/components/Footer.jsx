import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const logo = '/assets/logos/poweredbylogo.png';
  return (
    <footer className="relative bg-[var(--color-primary)] text-[var(--color-bg)] py-10">

{/* <footer className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-[var(--color-text)] py-10"> */}
      {/* Overlay for elegant glass effect */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container relative z-10 mx-auto px-6 text-center md:text-left grid md:grid-cols-3 gap-8 items-center">
        {/* Brand Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-wide">Second Nature Oils</h3>
          <p className="text-sm text-[var(--color-bg)]/80">
            Certified organic oils from Ireland — sustainably crafted for purity & taste.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex justify-center space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-[var(--color-accent)] transition">
            About
          </a>
          <a href="#products" className="hover:text-[var(--color-accent)] transition">
            Products
          </a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-5">
          <a
            href="https://www.facebook.com/secondnatureoils"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-105"
          >
            <Facebook className="w-5 h-5 text-[var(--color-bg)]" />
          </a>
          <a
            href="https://www.instagram.com/secondnatureoil/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-105"
          >
            <Instagram className="w-5 h-5 text-[var(--color-bg)]" />
          </a>
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-[var(--color-bg)]" />
          </a> */}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-white/20"></div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-xs text-[var(--color-bg)]/80 mt-4">
        © {new Date().getFullYear()} Second Nature Oils
      </div>
      <div className="relative z-10 text-center text-xs text-[var(--color-bg)]/80 mt-4 justify-center flex">
        <span className="mr-2">Powered by</span><a href="https://www.observeri.com/"  target="_blank" className="flex"><img src={logo} alt="O" className="mt-[-4px] w-6"/><span className="text-xs self-center font-bold text-[var(--color-bg)] logo-glow">bserveri Technologies</span></a>
      </div>
    </footer>
  );
}
