import React, { useState, useEffect, useRef } from "react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export const PlansTableControls: React.FC<Props> = ({ onPrev, onNext }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="border border-[#D6E3EC] text-[#4F669D] font-bold text-sm px-4 py-2 rounded-md flex items-center gap-2"
        >
          Year 2025 <span className="text-xs">▼</span>
        </button>
        {dropdownOpen && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-[#D6E3EC] rounded-md shadow-sm text-sm text-[#A6B1B9]">
            <li className="px-4 py-2 text-[#202F55] font-bold cursor-default">
              2025
            </li>
            <li className="px-4 py-2 cursor-not-allowed">2024</li>
            <li className="px-4 py-2 cursor-not-allowed">2023</li>
          </ul>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          className="w-10 h-10 rounded-lg border border-[#DDDEDF] text-[#202F55] hover:bg-gray-100"
        >
          {"<"}
        </button>
        <button
          onClick={onNext}
          className="w-10 h-10 rounded-lg border border-[#DDDEDF] text-[#202F55] hover:bg-gray-100"
        >
          {">"}
        </button>
        <button className="bg-[#202F55] text-white text-sm font-bold  px-4 py-2 rounded-md hover:bg-[#1b284a]">
          + Add plan
        </button>
      </div>
    </div>
  );
};
