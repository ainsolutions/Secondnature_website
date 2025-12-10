import useInView from "../../../hooks/useInView";

export default function FadeInView({ children, delay = 0 }) {
  const [ref, isVisible] = useInView({ threshold: 0.8 });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible
          ? `opacity-100 translate-y-0 [animation-delay:${delay}ms]`
          : "opacity-0 translate-y-5"
        }
      `}
    >
      {children}
    </div>
  );
}
