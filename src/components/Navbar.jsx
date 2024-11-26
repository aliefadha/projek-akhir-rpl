import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navLink = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Who We Are",
    },
    {
      id: 3,
      title: "Budaya",
    },
    {
      id: 4,
      title: "Nilai Luhur",
    },
    {
      id: 5,
      title: "Contact Us",
    },
    {
      id: 6,
      title: "Admin Login",
    },
  ];
  return (
    <div className="bg-black/50 backdrop-blur fixed top-0 left-0 h-16 w-full text-slate-200 flex items-center justify-between px-16 z-30">
      <LinkRoute
        to="/"
        className="font-raleway text-xl transition-all duration-200 cursor-pointer hover:tracking-wider hover:font-semibold"
      >
        Lentera Minang
      </LinkRoute>
      <div className="items-center hidden gap-4 md:flex">
        {navLink.map(({ id, title }) => (
          <p
            className="transition-all duration-200 cursor-pointer hover:tracking-wide hover:font-semibold"
            key={id}
          >
            <LinkScroll to={title} smooth duration={500}>
              {title}
            </LinkScroll>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
