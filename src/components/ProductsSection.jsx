import ProductCard from './ui/ProductCard';
import products from '../data/products.json';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';

const ProductsSection = () => {

  return (
    <Section id="products" className="space-y-4">
      <SectionHeading
        heading="Organic Products"
        desc="Explore the range of our organic products"
        bgImage="/public/assets/banner/Banner3.png"
      />
      {products.map((product, index) => (
        <ProductCard 
          key={index} 
          product={product} 
          index={index} 
        />
      ))}
    </Section>
  );
};

export default ProductsSection;