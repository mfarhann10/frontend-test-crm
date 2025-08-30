import { Button } from "./ui/button";

export const Enjoy = () => {
  return (
    <section id="enjoy" className="py-16">
      <div className="flex flex-row gap-x-8">
        {/* Text Column */}
        <div className="flex flex-col space-y-4">
          <h1 className="font-poppins font-semibold text-[40px] leading-[44px] tracking-[-0.023em] text-[#0A0A0A] w-[412px]">
            Various <span className="text-[#106A64]">facilities </span>
            that you can enjoy
          </h1>
          <p className="w-[348px] font-poppins text-xl tracking-normal text-[#9E9E9E]">
            We bring you together with your dream holiday
          </p>
          <Button className="w-[191px] h-[52px]">Explore</Button>
        </div>

        {/* Images */}
        <div className="flex flex-row gap-x-4">
          <img src="enjoy.png" alt="Enjoy" className="w-[319px] h-[319px] object-cover " />
          <img src="enjoy2.png" alt="Enjoy" className="w-[319px] h-[319px] object-cover " />
        </div>
      </div>
    </section>
  );
};
    