"use client";

import Image from "next/image";
import Slider from "react-slick";

export default function PromoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      <div className="bg-pink-100 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-4 items-center px-6 py-8">
          <div>
            <h2 className="text-3xl font-bold text-pink-900">
              RM10 SHIPPING DISCOUNT
            </h2>
            <p className="mt-2 text-pink-800">For orders above RM200</p>
            <p className="mt-1 text-sm font-semibold text-pink-700">
              Voucher Code:{" "}
              <span className="bg-white px-2 py-1 rounded text-pink-800">
                SHIPPING10
              </span>
            </p>
            <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-full">
              Shop Now
            </button>
          </div>
          <div>
            <Image
              src="/images/banner1.jpg"
              alt="Promo"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </Slider>
  );
}