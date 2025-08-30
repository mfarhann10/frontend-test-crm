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
    <div className="w-[330px] rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-[330px] h-[322px] object-cover"
        />
        {popular && (
          <span className="absolute top-2 left-2 bg-[#106A64] text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h2 className="font-poppins font-medium text-[16px] text-[#106A64]">
          {title}
        </h2>

        {/* Facilities */}
        <p className="font-poppins font-normal text-[14px] text-[#0A0A0A]">
          {facilities}
        </p>

        {/* Features */}
        <ul className="list-disc pl-5 space-y-1">
          {features.map((feature, index) => (
            <li
              key={index}
              className="font-poppins font-normal text-[14px] text-[#0A0A0A]"
            >
              {feature}
            </li>
          ))}
        </ul>

        {/* Beds & Persons */}
        <div className="flex items-center gap-6 text-[#0A0A0A]">
          <p className="font-poppins text-sm">{beds}</p>
          <p className="font-poppins text-sm">{persons}</p>
        </div>

        {/* Price */}
        <p className="font-poppins font-medium text-[20px] text-[#106A64]">
          {price}
        </p>
      </div>
    </div>
  );
};
