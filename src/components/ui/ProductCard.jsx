import FadeInView from "./FadeInView";
import OnlineShop from "../OnlineShop";

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Product Image */}
                <div className={`${product.id % 2 == 0 ? "order-2" : "order-1"} overflow-hidden justify-center flex`}>
                    <FadeInView>
                        {product.image.length == 1 ?

                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-cover"
                                width="300px"
                            /> :
                            <div className="grid grid-flow-col grid-rows-1">
                                {product.image.map((img) =>
                                    <img
                                        src={img}
                                        alt={product.name}
                                        className="object-cover"
                                        width="300px"
                                    />
                                )}
                            </div>
                        }
                    </FadeInView>
                </div>

                {/* Product Info */}

                <div className={`${product.id % 2 == 0 ? "order-1" : "order-2"} space-y-8`}>
                    {/* Product Name */}
                    <h1 className="text-4xl font-bold leading-tight text-[--color-primary]">
                        <FadeInView>
                            {product.name}
                        </FadeInView>
                    </h1>

                    {/* Product Description */}

                    <div className="text-sm leading-relaxed space-y-4">
                        <FadeInView>
                            {product.description.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </FadeInView>
                    </div>


                    {product.sizes && product.sizes.length > 0 && (
                        <div className="pt-4">
                            <p className="text-sm font-medium text-[--color-accent] uppercase tracking-wide mb-2">
                                Sizes Available
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size, sizeIndex) => (
                                    <span
                                        key={sizeIndex}
                                        className="bg-gray-200 text-[--color-text] px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <OnlineShop label="Show Now" product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;