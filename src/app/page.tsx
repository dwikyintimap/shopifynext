"use client";

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

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const categories = data.filter((item) =>
          item.tags.includes("top-categories")
        );
        console.log("Top Categories:", categories);
        setTopCategories(categories);
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
      <div className="rounded-2xl overflow-hidden mb-3 aspect-[3/4] bg-white">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium text-neutral-800">{title}</h3>
    </div>
  );
}
