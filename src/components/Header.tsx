import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { BookingBar } from "./BookingBar";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Villa Categorys", href: "#categorys" },
    { name: "Review", href: "#review" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="relative w-full h-[1000px]">
      {" "}
      {/* tinggi bisa diatur */}
      {/* Background image */}
      <img
        src="/image.png"
        alt="Background"
        className="absolute inset-0 w-full h-[433px] lg:w-full lg:h-[968px] object-cover -z-10"
      />
      {/* Konten header */}
      <div className="absolute top-0 left-0 right-0 z-50 py-2">
        <div className="new-container flex items-center justify-between h-[74px]">
          {/* LEFT: menu button */}
          <div className="relative">
            <button
              className="cursor-pointer text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Dropdown */}
            {isMenuOpen && (
              <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg border w-44">
                <div className="py-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 font-poppins text-black hover:bg-gray-100 transition-smooth"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: contact + login */}
          <div className="flex items-end gap-4">
            <a href="contact" className="text-white font-poppins text-base">
              Contact
            </a>
            <Button>Login</Button>
          </div>
        </div>
      </div>
      <BookingBar />
    </header>
  );
};
