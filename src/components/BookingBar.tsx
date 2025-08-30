import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

export const BookingBar = () => {
  return (
    <div className="new-container absolute inset-x-0 mx-auto bottom-[20px] md:bottom-[-56px] h-auto md:h-[112px] bg-white rounded-md shadow-[ -4px_-8px_10px_rgba(0,0,0,0.05),4px_8px_15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center md:items-center px-6 py-4 gap-4 md:gap-0">
      {/* Room selector */}
      <div className="flex items-center gap-2 flex-1 border-b md:border-b-0 md:border-r pb-2 md:pb-0 pr-0 md:pr-6">
        <span className="font-poppins">Room</span>
        <span className="text-[#106A64]">▼</span>
      </div>

      {/* Check-in */}
      <div className="flex items-center gap-2 flex-1 border-b md:border-b-0 md:border-r px-0 md:px-6 pb-2 md:pb-0">
        <Calendar className="w-5 h-5 text-[#106A64]" />
        <span className="font-poppins">Check in</span>
      </div>

      {/* Check-out */}
      <div className="flex items-center gap-2 flex-1 border-b md:border-b-0 md:border-r px-0 md:px-6 pb-2 md:pb-0">
        <Calendar className="w-5 h-5 text-[#106A64]" />
        <span className="font-poppins">Check out</span>
      </div>

      {/* Button */}
      <div className="flex flex-1 justify-center pt-2 md:pt-0 pl-0 md:pl-6">
        <Button className="text-white px-6 py-2 rounded-md">
          Check availability
        </Button>
      </div>
    </div>
  );
};
