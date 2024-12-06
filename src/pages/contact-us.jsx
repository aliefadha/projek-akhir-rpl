import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../components/Button";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("Masukan/Kritik");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    "Masukan/Kritik",
    "Saran Pengembangan",
    "Pertanyaan",
    "Pelaporan Masalah Teknis",
    "Apresiasi",
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center gap-4 bg-gray-200 p-6 w-full justify-center min-h-screen">
        <div className="relative w-80">
          <label htmlFor="select" className="block text-sm font-medium mb-2">
            Tipe Feedback
          </label>
          <div className="relative mb-4">
            <select
              id="select"
              className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none cursor-pointer"
              value={selectedOption}
              onChange={handleSelectChange}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setIsDropdownOpen(false)}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              {isDropdownOpen ? (
                <IoIosArrowUp className="text-gray-400 w-4 h-4" />
              ) : (
                <IoIosArrowDown className="text-gray-400 w-4 h-4" />
              )}
            </div>
          </div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Pesan Anda
          </label>
          <textarea
            name="message"
            id="message"
            rows="10"
            className="w-full px-4 py-2 rounded outline-none text-gray-800 bg-white border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:outline-none  placeholder:text-gray-900/50"
            placeholder="Tulis pesan anda di sini"
          ></textarea>
          <Button width="w-full">Kirim</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
