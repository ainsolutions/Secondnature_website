"use client";

import { useState } from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OrderDetails({ label = "Order Now" }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-medium shadow hover:opacity-90 transition"
            >
                {label}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="h-screen fixed inset-0 bg-[var(--color-text)]/40 backdrop-blur-sm flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative bg-[var(--color-bg)] rounded-3xl shadow-xl w-[calc(100%-40px)] sm:w-[calc(100%-80px)] h-[calc(100%-40px)] sm:h-[calc(100%-80px)] p-4 sm:p-8 overflow-y-auto flex flex-col border border-[var(--color-secondary)]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition"
                            >
                                <X size={26} />
                            </button>
                            <div
                                id="products"
                                className="p-10"
                            >
                                <div className="max-w-6xl mx-auto px-6 text-center">
                                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--color-primary)]">
                                        Order via Call or Email
                                    </h2>
                                    <p className="text-[var(--color-text)] mb-12 max-w-2xl mx-auto">
                                        To place your order, please contact us directly using the details below.
                                        Our sales team will be happy to assist you.
                                    </p>

                                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Call Card */}
                                        <div
                                            className="
      group rounded-2xl border bg-white p-8 text-center
      shadow-sm transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg
    "
                                        >
                                            <Phone
                                                className="
        w-10 h-10 mx-auto mb-4
        text-[var(--color-accent)]
        transition-transform duration-300
        group-hover:scale-110
      "
                                            />

                                            <h3 className="text-lg font-semibold text-[var(--color-accent)] mb-3">
                                                Call Us
                                            </h3>

                                            <p className="text-[var(--color-text)]">+353 (0)1 563 6660</p>
                                            <p className="text-[var(--color-text)] mb-4">+353 (0) 83 342 9060</p>

                                            <a
                                                href="tel:+35315636660"
                                                className="
        inline-block mt-2 rounded-full px-6 py-2 text-sm font-medium
        bg-[var(--color-accent)] text-white
        transition-all duration-300
        hover:opacity-90 hover:scale-105
      "
                                            >
                                                Call Now
                                            </a>
                                        </div>

                                        {/* Email Card */}
                                        <div
                                            className="
      group rounded-2xl border bg-white p-8 text-center
      shadow-sm transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg
    "
                                        >
                                            <Mail
                                                className="
        w-10 h-10 mx-auto mb-4
        text-[var(--color-accent)]
        transition-transform duration-300
        group-hover:scale-110
      "
                                            />

                                            <h3 className="text-lg font-semibold text-[var(--color-accent)] mb-3">
                                                Email Us
                                            </h3>

                                            <a
                                                href="mailto:sales@secondnatureoils.com"
                                                className="text-[var(--color-text)] block mb-4 hover:text-green-700 transition"
                                            >
                                                sales@secondnatureoils.com
                                            </a>

                                            <a
                                                href="mailto:sales@secondnatureoils.com"
                                                className="
        inline-block mt-2 rounded-full px-6 py-2 text-sm font-medium
        bg-[var(--color-accent)] text-white
        transition-all duration-300
        hover:opacity-90 hover:scale-105
      "
                                            >
                                                Send Email
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>)}
            </AnimatePresence>
        </>
    );
}
