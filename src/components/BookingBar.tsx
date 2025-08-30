import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

export const BookingBar = () => {
  return (
    <div className="absolute left-1/2 bottom-[-56px] -translate-x-1/2 w-[1152px] h-[112px] bg-white rounded-md shadow-[ -4px_-8px_10px_rgba(0,0,0,0.05),4px_8px_15px_rgba(0,0,0,0.05)] flex items-center px-6">
      {/* Room selector */}
      <div className="flex items-center gap-2 w-1/4 border-r pr-6">
        <span className="font-poppins">Room</span>
        <span className="text-gray-500">▼</span>
      </div>

      {/* Check-in */}
      <div className="flex items-center gap-2 w-1/4 border-r px-6">
        <Calendar className="w-5 h-5 text-teal-700" />
        <span className="font-poppins">Check in</span>
      </div>

      {/* Check-out */}
      <div className="flex items-center gap-2 w-1/4 border-r px-6">
        <Calendar className="w-5 h-5 text-teal-700" />
        <span className="font-poppins">Check out</span>
      </div>

      {/* Button */}
      <div className="flex w-1/4 justify-center pl-6">
        <Button className="bg-[#106A64] text-white px-6 py-2 rounded-md">
          Check availability
        </Button>
      </div>
    </div>
  );
};
