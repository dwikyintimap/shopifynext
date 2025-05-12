"use client";

import { BestSellerCard } from "@/components/bestsellercards";
import HappyCustomers from "@/components/customer";
import Footer from "@/components/footer";
import { getProducts } from "@/lib/shopify";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type Product = {
  id: string;
  title: string;
  tags: string;
  productType: string;
  images: {
    edges: {
      node: {
        url: string;
        altText: string | null;
      };
    }[];
  };
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [topCategories, setTopCategories] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const categories = data.filter((item) =>
          item.tags.includes("top-categories")
        );
        setTopCategories(categories);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const bestSellers = data.filter((item) =>
          item.tags.includes("best-seller")
        );
        setBestSellers(bestSellers);
      })
      .catch(console.error);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Top Promo Banner */}
      <div className="bg-orange-600 text-white text-center py-2 text-sm">
        Kitchen Appliances 8% Off. Voucher Code: <strong>KITCHEN8</strong>
        <button className="ml-4 px-4 py-1 bg-black text-white text-xs rounded">
          SHOP NOW
        </button>
      </div>

      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-5">
          {/* Left nav */}
          <nav className="flex items-center space-x-8 text-sm font-medium text-neutral-700">
            <a href="#" className="hover:underline flex items-center gap-1">
              Shop <span className="text-xs">▾</span>
            </a>
            <a href="#" className="hover:underline">
              Warranty Registration
            </a>
            <a href="#" className="hover:underline">
              Locate Us
            </a>
          </nav>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-orange-600 text-center">
            <div>Shopify</div>
            <div>Nextjs</div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-5 text-neutral-700">
            <Search size={18} className="cursor-pointer" />
            <User size={18} className="cursor-pointer" />
            <ShoppingCart />
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section>
        <Slider {...sliderSettings}>
          <div>
            <Image
              src="/images/banner1.jpg"
              alt="Banner 1"
              width={1200}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/banner2.jpg"
              alt="Banner 2"
              width={1200}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </Slider>
      </section>

      {/* Features with Icons */}
      <section className="bg-[#23201F] text-white py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          <FeatureCard
            icon="/images/Warranty.svg"
            title="Warranty Coverage"
            desc="For All Appliances\n*Terms & Conditions Apply"
          />
          <FeatureCard
            icon="/images/Truck.svg"
            title="RM10 Shipping Discount"
            desc="For Order Above RM200\nCode: SHIPPING10"
          />
          <FeatureCard
            icon="/images/Payment_security.svg"
            title="Secure Payment"
            desc="Multiple Payment Options"
          />
          <FeatureCard
            icon="/images/Exchange.svg"
            title="7 Days Exchange Policy"
            desc="For Manufacturing Defects"
          />
        </div>
      </section>

      <section className="bg-[#f9f1ef] py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-orange-600 mb-8">
            Top Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {topCategories.map(({ id, productType, images }) => (
              <CategoryCard
                key={id}
                title={productType}
                image={images.edges[0]?.node.url}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f1ef] py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-semibold text-orange-600">
              Our Best Sellers
            </h2>
            <button className="text-sm bg-white shadow px-4 py-1 rounded-full font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {bestSellers.slice(0, 4).map((item, idx) => (
              <BestSellerCard
                key={idx}
                title={item.title}
                image={item.images.edges[0]?.node.url}
                oldPrice="199.99"
                newPrice="109.99"
                discount="45%"
                rating={Math.floor(Math.random() * 5) + 1}
                colors={["#F9E7C5", "#F4F6FC"]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#282828] text-white py-20">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              VARIED CLEANING <br /> SOLUTIONS
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Explore a lineup of cutting-edge vacuums, each tailored to meet
              your specific needs – from powerful corded models to wet & dry
              cordless options. Our advanced technology and features are aimed
              at delivering a spotless living space.
            </p>
            <button className="bg-white text-black text-sm px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="md:w-2/3 w-full">
            <Image
              src="/images/sectionimagefull.jpg"
              alt="Cleaning Solutions"
              width={1200}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(({ id, title, images }) => (
            <div key={id} className="bg-white shadow rounded p-4">
              <Image
                src={images.edges[0]?.node.url}
                alt={title}
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
              <h3 className="mt-4 text-sm font-medium text-center">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <HappyCustomers />

      <Footer />
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start space-x-4 border-r last:border-none pr-4">
      <Image src={icon} alt={title} width={32} height={32} className="mt-1" />
      <div>
        <h4 className="font-semibold text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-300 whitespace-pre-line">{desc}</p>
      </div>
    </div>
  );
}

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="text-center">
      <div className="rounded-2xl overflow-hidden mb-4 bg-white w-full h-[280px] md:h-[320px]">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium text-[#5e504e] text-left">{title}</h3>
    </div>
  );
}
