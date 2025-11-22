"use client";

import { useState } from "react";
import { X, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import products from '../data/products.json';

export default function OnlineShop({ label = "Shop Now", product = null }) {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(product);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);
    const [loading, setLoading] = useState(false);

    const [userInfo, setUserInfo] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
    });

    const addToCart = (product, qty) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + qty }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: qty }];
            }
        });
        setSelectedProduct(null);
    };

    const deliveryCharges = 10.00;
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity + deliveryCharges,
        0
    );

    // ✅ Checkout & Send Order to Node.js backend
    const handleCheckoutSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const data = { user: userInfo, cart, total: totalPrice.toFixed(2), deliveryCharges };
        try {
            // Update the API endpoint below to match your Node.js backend port
            const res = await fetch("http://localhost:5000/api/sendOrderEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                // alert("✅ Order sent successfully!");
                setShowThankyou(true)
                // setShowCheckout(false);
                setShowCart(false);
                setCart([]);
                // setOpen(false);
                setUserInfo({ name: "", contact: "", email: "", address: "" });
            } else {
                alert("❌ Failed to send order. Please try again.");
            }
        } catch (err) {
            console.error("Error sending email:", err);
            alert("❌ Error sending order. Please check your connection or backend.");
        }
        setLoading(false);
    };
    
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

                            {/* Product Grid */}
                            {!selectedProduct && (
                                <div className={`flex-1 ${showCheckout ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
                                    <div className="text-center mb-8 sm:mb-10">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">
                                            Select Your Product
                                        </h2>
                                        <div className="h-1 w-16 bg-[var(--color-primary)] mx-auto mt-3 rounded-full"></div>
                                        <p className="text-[var(--color-text)] mt-4 text-sm sm:text-base">
                                            Choose from our range of premium, cold-pressed oils.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                                        {products.map((p) => (
                                            <motion.div
                                                key={p.id}
                                                whileHover={{ scale: 1.03 }}
                                                onClick={() => {
                                                    setSelectedProduct(p);
                                                    setQuantity(1);
                                                    setShowCart(false);
                                                }}
                                                className={`${showCheckout ? 'cursor-not-allowed' : 'cursor-pointer'} bg-[var(--color-bg)] border border-[var(--color-secondary)] rounded-2xl 
                        p-4 flex flex-col items-center text-center hover:shadow-[0_0_10px_var(--color-secondary)] transition`}

                                            >
                                                <img
                                                    src={p.image[0]}
                                                    alt={p.name}
                                                    className="w-36 sm:w-40 h-36 sm:h-40 object-contain mb-3 rounded-xl"
                                                />
                                                <h3 className="font-semibold text-[var(--color-text)] text-base sm:text-sm mb-1">
                                                    {p.name}
                                                </h3>
                                                <p className="text-sm text-[var(--color-accent)] mb-2">
                                                    {p.sizes[0]}
                                                </p>
                                                <p className="text-[var(--color-primary)] font-semibold text-base sm:text-lg">
                                                    €{p.price}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Product Detail */}
                            {selectedProduct && (
                                <div className={`mt-6 sm:mt-8 ${showCheckout ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-4 sm:mb-6"
                                    >
                                        <ArrowLeft size={16} /> Back to Products
                                    </button>

                                    <div className="grid md:grid-cols-2 gap-6 sm:gap-10 relative">
                                        <div className="flex justify-center">
                                            <img
                                                src={selectedProduct.image[0]}
                                                alt={selectedProduct.name}
                                                className="w-80 max-w-80 rounded-2xl shadow-md object-contain border border-[var(--color-secondary)]"
                                            />
                                        </div>

                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-accent)] mb-2 sm:mb-3">
                                                {selectedProduct.name}
                                            </h2>
                                            <p className="text-[var(--color-text)] mb-4 sm:mb-6 text-sm sm:text-base">
                                                {selectedProduct.description}
                                            </p>
                                            <p className="text-[var(--color-primary)] font-medium text-base sm:text-lg mb-4 sm:mb-6">
                                                €{selectedProduct.price} — {selectedProduct.sizes[0]}
                                            </p>

                                            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                                <span className="font-medium text-[var(--color-text)] text-sm sm:text-base">
                                                    Quantity:
                                                </span>
                                                <button
                                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                                    className="h-8 w-8 bg-[var(--color-secondary)] rounded-full text-lg aspect-square"
                                                >
                                                    -
                                                </button>
                                                <span className="w-10 text-center text-[var(--color-text)]">
                                                    {quantity}
                                                </span>
                                                <button
                                                    onClick={() => setQuantity((q) => q + 1)}
                                                    className="h-8 w-8 bg-[var(--color-secondary)] rounded-full text-lg"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => addToCart(selectedProduct, quantity)}
                                                className="w-full sm:w-auto px-6 py-3 bg-[var(--color-primary)] text-[var(--color-bg)] rounded-full font-medium shadow hover:bg-[var(--color-accent)] transition flex items-center justify-center gap-2"
                                            >
                                                <ShoppingCart size={18} /> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Floating Cart Summary */}
                            {cart.length > 0 && !showCart && (
                                <motion.div
                                    className="fixed bottom-4 right-4 sm:bottom-10 sm:right-14 bg-[var(--color-primary)] text-[var(--color-bg)] py-3 px-6 rounded-full shadow-lg flex items-center gap-3 cursor-pointer hover:bg-[var(--color-accent)] transition text-sm sm:text-base mb-4"
                                    onClick={() => setShowCart(true)}
                                >
                                    <ShoppingCart size={20} />
                                    <span>
                                        {cart.length} item{cart.length > 1 ? "s" : ""} — €
                                        {totalPrice.toFixed(2)}
                                    </span>
                                </motion.div>
                            )}

                            {/* Cart Drawer */}
                            <AnimatePresence>
                                {showCart && !showCheckout && (
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                                        className="fixed bottom-0 sm:top-0 sm:right-0 h-[75%] sm:h-full w-full sm:w-[400px] bg-[var(--color-bg)] shadow-2xl p-6 overflow-y-auto z-[60] rounded-t-2xl sm:rounded-none border-l border-[var(--color-secondary)]"
                                    >
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-text)]">
                                                Your Cart
                                            </h3>
                                            <button
                                                onClick={() => setShowCart(false)}
                                                className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                                            >
                                                <X />
                                            </button>
                                        </div>

                                        {cart.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-3 mb-4 border-b border-[var(--color-secondary)] pb-3"
                                            >
                                                <img
                                                    src={item.image[0]}
                                                    alt={item.name}
                                                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-[var(--color-text)] text-sm font-medium">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-[var(--color-text)] text-sm">
                                                        {item.quantity} × €{item.price}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        setCart((prev) => prev.filter((p) => p.id !== item.id))
                                                    }
                                                    className="text-[var(--color-accent)] hover:text-[var(--color-primary)]"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        ))}

                                        <div className="border-[var(--color-secondary)]">
                                            <p className="text-sm font-semibold text-[var(--color-text)]">
                                                Standard Delivery: €{deliveryCharges.toFixed(2)}
                                            </p>
                                        </div>


                                        <div className="mt-4 border-t border-[var(--color-secondary)] pt-4 pb-20">
                                            <p className="text-lg font-semibold text-[var(--color-text)]">
                                                Total: €{totalPrice.toFixed(2)}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setShowCheckout(true)}
                                            className="fixed bottom-6 left-4 right-4 py-3 bg-[var(--color-primary)] text-[var(--color-bg)] rounded-full font-medium hover:bg-[var(--color-accent)] shadow-lg transition mb-4"
                                        >
                                            Proceed to Checkout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Checkout Drawer */}
                            <AnimatePresence>
                                {showCheckout && (
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                                        className="fixed bottom-0 sm:top-0 sm:right-0 h-[80%] sm:h-full w-full sm:w-[400px] bg-[var(--color-bg)] shadow-2xl p-6 overflow-y-auto z-[70] rounded-t-2xl sm:rounded-none border-l border-[var(--color-secondary)]"
                                    >
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-text)]">
                                                Checkout
                                            </h3>
                                            {!loading &&
                                                <button
                                                    onClick={() => setShowCheckout(false)}
                                                    className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                                                >
                                                    <X />
                                                </button>}
                                        </div>

                                        {!showThankyou && !loading &&
                                            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    required
                                                    value={userInfo.name}
                                                    onChange={(e) =>
                                                        setUserInfo({ ...userInfo, name: e.target.value })
                                                    }
                                                    className="w-full p-3 rounded-lg border border-[var(--color-secondary)] bg-transparent text-[var(--color-text)] focus:outline-none"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Contact Number"
                                                    required
                                                    value={userInfo.contact}
                                                    onChange={(e) =>
                                                        setUserInfo({
                                                            ...userInfo,
                                                            contact: e.target.value,
                                                        })
                                                    }
                                                    className="w-full p-3 rounded-lg border border-[var(--color-secondary)] bg-transparent text-[var(--color-text)] focus:outline-none"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Your Email"
                                                    required
                                                    value={userInfo.email}
                                                    onChange={(e) =>
                                                        setUserInfo({ ...userInfo, email: e.target.value })
                                                    }
                                                    className="w-full p-3 rounded-lg border border-[var(--color-secondary)] bg-transparent text-[var(--color-text)] focus:outline-none"
                                                />
                                                <textarea
                                                    placeholder="Address"
                                                    required
                                                    value={userInfo.address}
                                                    onChange={(e) =>
                                                        setUserInfo({ ...userInfo, address: e.target.value })
                                                    }
                                                    className="w-full p-3 rounded-lg border border-[var(--color-secondary)] bg-transparent text-[var(--color-text)] focus:outline-none"
                                                    rows="4"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full py-3 bg-[var(--color-primary)] text-[var(--color-bg)] rounded-full font-medium hover:bg-[var(--color-accent)] shadow-md transition"
                                                >
                                                    Confirm & Send Order
                                                </button>
                                            </form>}

                                        {loading &&
                                            <div className="text-center mt-20 bg-white rounded-2xl shadow-md p-8 max-w-xl mx-auto">
                                                <h2 className="text-2xl font-semibold text-[--color-accent] mb-4">
                                                    🎉 Almost There...!
                                                </h2>
                                                <p className="text-[--color-text] mb-6">
                                                    Please wait while we are processing to submit you order to our sales team.
                                                </p>
                                                <div className="text-left border-t pt-4">
                                                    <h3 className="font-semibold text-[--color-text] mb-2">Order Summary:</h3>
                                                    <ul className="space-y-1 mb-4 text-[--color-text]">
                                                        {cart.map((item) => (
                                                            <li key={item.id}>
                                                                - {item.name} × {item.quantity} — €{item.price * item.quantity}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <p className="text-[--color-text] text-sm">Standard Delivery: €{deliveryCharges.toFixed(2)}</p>
                                                    <p className="font-semibold text-[--color-text]">Total: €{totalPrice.toFixed(2)}</p>
                                                </div>
                                            </div>}

                                        {showThankyou && !loading &&
                                            <div className="text-center mt-20 bg-white rounded-2xl shadow-md p-8 max-w-xl mx-auto">
                                                <h2 className="text-2xl font-semibold text-[--color-accent] mb-4">
                                                    🎉 Thank You for Your Order!
                                                </h2>
                                                <p className="text-[--color-text] mb-6">
                                                    A confirmation email has been sent to your email address.
                                                </p>
                                                {/* <div className="text-left border-t pt-4">
                                                    <h3 className="font-semibold text-[--color-text] mb-2">Order Summary:</h3>
                                                    <ul className="space-y-1 mb-4 text-[--color-text]">
                                                        {cart.map((item) => (
                                                            <li key={item.id}>
                                                                - {item.name} × {item.quantity} — €{item.price * item.quantity}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <p className="font-semibold text-[--color-text]">Total: €{totalPrice.toFixed(2)}</p>
                                                </div> */}
                                            </div>
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
