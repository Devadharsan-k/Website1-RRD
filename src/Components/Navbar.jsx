import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{
        type: "tween",
        duration: "1.5",
        delay: "0.8",
      }}
      className="w-full fixed top-0 left-0 py-4 px-7 md:px-10 md:flex items-center justify-between z-[10] bg-black md:bg-transparent"
    >
      <div className="flex text-3xl cursor-pointer items-center md:text-4xl md:font-semibold">
        <Link to="/"><p>GXL TRVL</p></Link>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-8 top-6 cursor-pointer md:hidden"
      >
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      <ul
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute left-0 w-full text-center transition-all duration-500 ease-in-out md:pl-0 md:flex md:items-center md:static md:w-auto ${
          isOpen
            ? "top-12 bg-black opacity-100 md:bg-transparent"
            : "top-[-500px]"
        }`}
      >
        <Link to="/">
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.5 }}
            className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer"
          >
            HOME
          </motion.li>
        </Link>
        <Link to="/pricing">
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.5 }}
            className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer"
          >
            PRICING
          </motion.li>
        </Link>
        <Link to="/training">
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.5 }}
            className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer"
          >
            TRAINING
          </motion.li>
        </Link>
        <Link to="/contact">
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.5 }}
            className="font-semibold my-7 md:my-0 md:ml-8 cursor-pointer"
          >
            CONTACT
          </motion.li>
        </Link>
      </ul>
    </motion.div>
  );
};

export default Navbar;
