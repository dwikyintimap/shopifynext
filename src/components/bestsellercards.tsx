import Image from "next/image";

interface BestSellerCardProps {
  title: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  rating: number;
  colors?: string[];
}

export function BestSellerCard({
  title,
  image,
  oldPrice,
  newPrice,
  discount,
  rating,
  colors = [],
}: BestSellerCardProps) {
  return (
    <div className="text-center">
      {/* Discount badge */}
      <div className="relative mb-4">
        <span className="absolute top-0 left-0 bg-white text-xs rounded-full px-2 py-0.5 shadow">
          -{discount}
        </span>
        <div className="w-full h-[260px] flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={260}
            height={260}
            className="object-contain h-full"
          />
        </div>
      </div>

      {/* Title */}
      <p className="text-sm text-neutral-800 font-medium leading-tight mb-2">{title}</p>

      {/* Prices */}
      <div className="text-sm mb-1">
        <span className="line-through text-gray-400 mr-1">RM{oldPrice}</span>
        <span className="text-red-500 font-semibold">RM{newPrice}</span>
      </div>

      {/* Ratings */}
      <div className="text-xs text-orange-500 mb-2">
        {"★".repeat(rating)}{" "}
        <span className="text-neutral-600 ml-1 text-xs">({rating})</span>
      </div>

      {/* Color dots */}
      {colors.length > 0 && (
        <div className="flex justify-center gap-2 mt-2">
          {colors.map((c, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: c }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
