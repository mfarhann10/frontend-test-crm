export const About = () => {
  return (
    <section id="about" className="new-container py-16">
      {/* Judul */}
      <h1
        className="
          font-poppins font-semibold 
          text-[40px] leading-[44px] tracking-[-0.023em] 
          text-[#0A0A0A] mb-12
        "
      >
        About Villa <span className="text-[#106A64]">Amandha</span>
      </h1>

      {/* Grid konten */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 justify-between">
        {/* Gambar */}
        <img
          src="image2.png"
          alt="Villa Amandha"
          className="w-[355px] h-[190px] lg:w-[368px] lg:h-[368px]"
        />

        {/* Teks */}
        <div className="space-y-6 ">
          <p className="font-poppins font-normal text-lg leading-relaxed text-[#0A0A0A]">
            Villa Amandha consist of two luxury villas and one traditional
            Javanese house surrounded by a tranquil rain forest setting,
            traditional Indonesian houses and a farm overlooking the area.
          </p>
          <div className="flex gap-8">
            {/* Room */}
            <div className="flex flex-col">
              <p className="font-poppins font-medium text-2xl">
                +6 <span className="text-[#106A64] font-semibold">/ Room</span>
              </p>
              <p className="font-poppins text-sm">Room Options</p>
            </div>

            {/* Facilities */}
            <div className="flex flex-col">
              <p className="font-poppins font-medium text-2xl">
                +2{" "}
                <span className="text-[#106A64] font-semibold">
                  / Facilities
                </span>
              </p>
              <p className="font-poppins text-sm">Facilities available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
