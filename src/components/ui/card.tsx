import { Bed, Users } from "lucide-react";

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
  popular,
}: VillaCardProps) => {
  return (
    <div className="w-[368px] h-[530px] rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col items-center justify-center">
      {/* Image */}
      <div className="relative w-full flex justify-center pt-6">
        <img
          src={img}
          alt={title}
          className="w-[330px] h-[322px] object-cover mx-auto rounded-lg"
        />
        {popular && (
          <span className="absolute top-2 left-2 bg-[#106A64] text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between pl-6">
        {/* Title */}
        <h2 className="font-poppins font-medium text-[16px] text-[#106A64]">
          {title}
        </h2>

        <div className="flex gap-20">
          {/* Facilities */}
          <p className="font-poppins font-normal text-[12px] text-[#0A0A0A] w-[86px] h-[16px]">
            {facilities}
          </p>

          {/* Features */}
          <span className="font-poppins font-normal text-[12px] text-[#0A0A0A] w-[161px] h-[32px]">
            {features.join(", ")}
          </span>
        </div>

        {/* Beds & Persons */}
        <div className="flex items-center gap-26 text-[#616161]">
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
        <p className="font-poppins font-medium text-[20px] text-[#106A64]">
          {price}
        </p>
      </div>
    </div>
  );
};
