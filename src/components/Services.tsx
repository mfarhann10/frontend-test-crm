import { VillaCard } from "./ui/card";

export const Services = () => {
  const services = [
    {
      img: "/villa.png",
      title: "4 Bedroom villa",
      facilities: "Main Facilities",
      features: ["Wifi provide", "TV & Karaoke", "Kitchen", "Swimming Pool"],
      beds: "4 bed",
      persons: "8 persons",
      price: "Rp 3.749.000 /night",
      popular: false,
    },
    {
      img: "/joglo.png",
      title: "Joglo house",
      facilities: "Main Facilities",
      features: ["Wifi provide", "TV & Karaoke", "Kitchen", "Swimming Pool"],
      beds: "4 bed",
      persons: "4 persons",
      price: "Rp 3.749.000 /night",
      popular: false,
    },
    {
      img: "/kudus.png",
      title: "Kudus house",
      facilities: "Main Facilities",
      features: ["Wifi provide", "TV & Karaoke", "Kitchen"],
      beds: "4 bed",
      persons: "4 persons",
      price: "Rp 3.999.000 /night",
      popular: false,
    },
  ];
  return (
    <section id="categorys" className="new-container mx-auto py-12">
      <h1
        className="
          font-poppins font-semibold 
          text-[40px] leading-[44px] tracking-[-0.023em] 
          text-[#404040] mb-12 text-center
        "
      >
        Our Choices of <span className="text-[#106A64]">Villa Studios</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[11rem] place-items-center">
        {services.map((item, idx) => (
          <VillaCard
            key={idx}
            img={item.img}
            title={item.title}
            facilities={item.facilities}
            features={item.features}
            beds={item.beds}
            persons={item.persons}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="cursor-pointer mt-7 bg-[#CFE1E04D] text-[#106A64] w-[174px] h-[54px]">
          Load More
        </button>
      </div>
    </section>
  );
};
