export const Gallery = () => {
    return(
        <section id="gallery" className="mx-auto py-16">
            <h1
                className="
                font-poppins font-semibold 
                text-[40px] leading-[44px] tracking-[-0.023em] 
                text-[#404040] mb-8 text-center
                "
                >
                Our <span className="text-[#106A64]">Gallery</span>
            </h1>
            <div className="flex flex-row gap-5"> 
                <img
                src="gallery1.png"
                alt="Galerry"
                className="w-[193px] h-[162px] md:w-[564px] md:h-[515px] object-cover rounded-sm"
                />

                <div className="flex flex-col gap-5">
                    <img
                        src="gallery2.png"
                        alt="Galerry2"
                        className="w-[126px] h-[77px] md:w-[564px] md:h-[248px] object-cover rounded-sm"
                    />

                    <img
                        src="gallery3.png"
                        alt="Galerry2"
                        className="w-[126px] h-[77px] md:w-[564px] md:h-[248px] object-cover rounded-sm"
                    />
                </div>
            </div>
        </section>
    )
}