import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "./HeroImage";

const Pricing = () => {
  const props = {
    title: "PRICING.",
    subTitle: "Choose your trip",
  };

  return (
    <div>
      <HeroImage {...props} />
      <div className="w-full bg-black">
        <div className="grid md:grid-cols-3 pt-40 place-items-center pb-12 gap-10">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.8 },
            }}
            className="w-[350px] md:w-80 rounded-lg flex flex-col border-2 "
          >
            <h2 className="font-bold text-3xl flex items-center justify-center p-12">
              - Basics -
            </h2>
            <h1 className="font-extrabold text-5xl flex items-center justify-center">
              1 BTC
            </h1>
            <p className=" flex items-center justify-center mt-8 font-semibold">
              - 3 Days -
            </p>
            <p className=" flex items-center justify-center mt-4 font-semibold">
              - Views -
            </p>
            <p className=" flex items-center justify-center mt-4 font-semibold">
              - Featured -
            </p>
            <p className=" flex items-center justify-center mt-4 mb-8 font-semibold">
              - Private Quarters -
            </p>
            <Link to="/contact">
              <button className="mb-10 border px-16 py-2 max-w-fit flex mx-auto w-full">
                Book
              </button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.8 },
            }}
            className="w-[350px] md:w-80 rounded-lg flex flex-col border-2 "
          >
            <h2 className="font-bold text-3xl flex items-center justify-center p-12">
              - Suite -
            </h2>
            <h1 className="font-extrabold text-5xl flex items-center justify-center">
              1 BTC
            </h1>
            <p className=" flex items-center justify-center mt-8 font-semibold">
              - 3 Days -
            </p>
            <p className=" flex items-center justify-center mt-4 font-semibold">
              - Views -
            </p>
            <p className=" flex items-center justify-center mt-4 font-semibold">
              - Featured -
            </p>
            <p className=" flex items-center justify-center mt-4 mb-8 font-semibold">
              - Private Quarters -
            </p>
            <Link to="/contact">
              <button className="mb-10 border px-16 py-2 max-w-fit flex mx-auto w-full">
                Book
              </button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.8 },
            }}
            className="w-[350px] md:w-80 rounded-lg flex flex-col border-2 "
          >
            <h2 className="font-bold text-3xl flex items-center justify-center p-12">
              - Exclusive -
            </h2>
            <h1 className="font-extrabold text-5xl flex items-center justify-center">
              1 BTC
            </h1>
            <p className=" flex items-center justify-center mt-8 font-semibold">
              - 3 Days -
            </p>
            <p className=" flex items-center justify-center mt-4 font-semibold">
              - Views -
            </p>
            <p className=" flex items-center justify-center mt-4 font-semibold">
              - Featured -
            </p>
            <p className=" flex items-center justify-center mt-4 mb-8 font-semibold">
              - Private Quarters -
            </p>
            <Link to="/contact">
              <button className="mb-10 border px-16 py-2 max-w-fit flex mx-auto w-full">
                Book
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
