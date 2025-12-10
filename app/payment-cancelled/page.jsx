import Link from "next/link";

export default function PaymentCancelled() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-red-600">Payment Cancelled ❌</h1>
      <p className="mt-3 mb-6 text-gray-600">You can try again anytime.</p>
      <Link
        href="/"
        className="p-4 items-center gap-2 justify-center bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold rounded-full hover:opacity-90 transition-all shadow-lg"
      >
        Go back to Second Nature Oils
      </Link>
    </div>
  );
}
