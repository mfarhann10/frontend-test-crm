import { Bed, Users } from "lucide-react";
import clsx from "clsx";

type VillaCardProps = {
  img: string;
  title: string;
  facilities: string;
  features: string[];
  beds: string;
  persons: string;
  price: string;
  popular?: boolean;
};

export const VillaCard = ({
  img,
  title,
  facilities,
  features,
  beds,
  persons,
  price,
  popular = false,
}: VillaCardProps) => {
  const cardClasses = clsx(
    "w-[368px] h-[530px] rounded-lg shadow-lg overflow-hidden border flex flex-col items-center justify-center",
    {
      "bg-[#106A64] text-white border-transparent": popular,
      "bg-white text-black border-gray-200": !popular,
    }
  );

  const titleClasses = clsx(
    "font-poppins font-medium text-[16px]",
    popular ? "text-white" : "text-[#106A64]"
  );

  const textClasses = clsx(
    "font-poppins font-normal text-[12px] ",
    popular ? "text-white" : "text-[#0A0A0A]"
  );

  const priceClasses = clsx(
    "font-poppins font-medium text-[20px]",
    popular ? "text-white" : "text-[#106A64]"
  );

  const iconTextColor = popular ? "text-white" : "text-[#616161]";

  return (
    <div className={cardClasses}>
      {/* Image */}
      <div className="relative w-full flex justify-center pt-6">
        <img
          src={img}
          alt={title}
          className="w-[330px] h-[322px] object-cover mx-auto rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between pl-6">
        {/* Title */}
        <h2 className={titleClasses}>{title}</h2>

        <div className="flex gap-20">
          {/* Facilities */}
          <p className={clsx("w-[86px] h-[16px]", textClasses)}>{facilities}</p>

          {/* Features */}
          <span className={clsx("w-[161px] h-[32px", textClasses)}>
            {features.join(", ")}
          </span>
        </div>

        {/* Beds & Persons */}
        <div className={clsx("flex items-center gap-26", iconTextColor)}>
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4" />
            <span className="font-poppins text-sm">{beds}</span>
          </div>

          {/* Persons */}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="font-poppins text-sm">{persons}</span>
          </div>
        </div>

        {/* Price */}
        <p className={priceClasses}>{price}</p>
      </div>
    </div>
  );
};
