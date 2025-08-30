import { Button } from "./ui/button";

export const Enjoy = () => {
  return (
    <section id="enjoy" className="py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Column */}
        <div className="flex flex-col space-y-4 md:w-auto">
          <h1 className="font-poppins font-semibold text-[32px] md:text-[40px] leading-[36px] md:leading-[44px] tracking-[-0.023em] text-[#0A0A0A]">
            Various <span className="text-[#106A64]">facilities </span>
            that you can enjoy
          </h1>
          <p className="font-poppins text-lg md:text-xl tracking-normal text-[#9E9E9E]">
            We bring you together with your dream holiday
          </p>
          <Button className="w-[150px] md:w-[191px] h-[48px] md:h-[52px]">
            Explore
          </Button>
        </div>

        {/* Images */}
        <div className="flex flex-row gap-4 mt-4 md:mt-0">
          <img
            src="enjoy.png"
            alt="Enjoy"
            className="w-[157px] h-[157px] md:w-[319px] md:h-[319px] object-cover "
          />
          <img
            src="enjoy2.png"
            alt="Enjoy"
            className="w-[157px] h-[157px] md:w-[319px] md:h-[319px] object-cover "
          />
        </div>
      </div>
    </section>
  );
};
