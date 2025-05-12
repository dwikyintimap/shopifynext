"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dwiky Ramadhan",
    role: "E-Commerce Executive",
    text: `very recomended n good product..i already have 3 product from russell taylors... pressure cooker, air fryer & breadmaker.... already used breadmaker for 2 years and it be my asset to make my homemade bun flor my homemade bisnes... tq russel taylors`,
    image: "/images/customers/customer1.jpg",
  },
  {
    id: 2,
    name: "Alina Roslan",
    role: "House wife",
    text: `kat rumah dah ada pressure cooker 6l, air fryer, hand mixer blender n waffle maker... buat apa spend lebih kalo produk russell taylors terbaik... next nak beli vacuum, frying pan lak...`,
    image: "/images/customers/customer2.jpg",
  },
  {
    id: 3,
    name: "Choy Soon",
    role: "E-Commerce Executive",
    text: `High Quality \ud83d\udd25\ud83d\udd25 Super Cheap Price\ud83d\udd25\ud83d\udd25 No. 1 Brand In Malaysia.`,
    image: "/images/customers/customer3.jpg",
  },
];

export default function HappyCustomers() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#fcf5f2] py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-orange-600 mb-10">
          Happy Customers
        </h2>
        <div className="relative flex gap-6 justify-center items-stretch flex-wrap">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl p-6 w-full max-w-sm shadow transition-opacity duration-300 ${
                i === index ? "opacity-100" : "opacity-50 hidden md:block"
              }`}
            >
              <div className="flex justify-center mb-4 text-orange-500">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <Star key={idx} size={20} fill="orange" stroke="orange" />
                  ))}
              </div>
              <p className="text-sm text-center text-gray-700 mb-6 whitespace-pre-line">
                {t.text}
              </p>
              <div className="flex flex-col items-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-md mb-2 object-cover"
                />
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
