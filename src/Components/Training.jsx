import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../Components/HeroImage";
import spaceMan from "../assets/pexels-pixabay-41162.jpg";

const Training = () => {
  const props = {
    title: "TRAINING.",
    subTitle: "Pre-Flight & In-Flight Training",
  };

  return (
    <div>
      <HeroImage {...props} />
      <div className="grid md:grid-cols-2 bg-black p-24  md:p-32">
        <div className="flex flex-col gap-10 place-content-center">
          <p className="text-4xl md:text-6xl">Training.</p>
          <p className="text-xl">
            Through training is necessary when traveling in space. We offer all
            inclusive training for Pre-Flight & In-Flight Training
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 0.9,
                transition: { duration: 1 },
              }}
              className="mb-10 border px-16 py-2 max-w-fit  mx-auto w-full"
            >
              CONTACT
            </motion.button>
          </Link>
        </div>
        <div className="w-full">
          <img
            className="w-full h-[50vh] object-scale-down"
            src={spaceMan}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Training;
