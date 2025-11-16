const ParallaxImage = ({ image, width = "100%", height = "auto", children }) => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover flex items-center justify-center mb-16 bg-white py-20"
      style={{
        // backgroundImage: `url(${image})`,
        width,
        height,
      }}
    >
      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black/70"></div> */}

      {/* Content (text, button, etc.) */}
      <div className="relative z-10 text-center text-[--color-text] px-6">
        {children ? (
          children
        ) : (
          <h1 className="text-4xl font-bold"></h1>
        )}
      </div>
    </div>
  );
};

export default ParallaxImage;
