import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="relative w-full h-[909px] py-16">
      {/* Background Image */}
      <img
        src="footer.png"
        alt="footer"
        className="absolute inset-0 w-full h-[520px] object-cover -z-10"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-left px-10 pl-[181px]">
        <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-white mb-4 w-[416px] h-[104px]">
          Make your comfort is our happiness
        </h2>
        <button className="cursor-pointer bg-[#F3F6F6] text-[#106A64] font-normal px-6 py-3 rounded-sm">
          Book now
        </button>
      </div>

      {/* Footer Links */}
      <div className="relative mt-[500px]">
        <div className="grid grid-cols-3 gap-6 md:gap-10 text-black place-items-center">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Facility</li>
              <li>Gallery</li>
            </ul>
          </div>

          {/* Room Category */}
          <div>
            <h3 className="font-semibold mb-4">Room Category</h3>
            <ul className="space-y-2">
              <li>4 Bedroom Villa</li>
              <li>2 Bedroom Villa</li>
              <li>Joglo House</li>
              <li>Bamboo Studio</li>
              <li>Bamboo House</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-black mt-1" />
                <span>
                  Jl. Bukit Pelangi, Gunung Geulis, <br />
                  Sukaraja, Kab. Bogor, Jawa Barat
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-black" />
                <span>+62 812345678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-black" />
                <span>example@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
