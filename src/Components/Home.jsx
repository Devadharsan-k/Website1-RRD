/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import spaceVideo from "../assets/pexels_videos_1851190 (2160p).mp4";

const Home = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="yes"
        className="relative w-full h-screen object-cover"
      >
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          type: "tween",
          duration: "1.5",
          delay: "2",
        }}
        className="fixed top-0 gap-5 flex flex-col items-center justify-center
        h-screen w-full"
      >
        <p className="text-5xl md:text-7xl font-semibold">Galaxy. Travel.</p>
        <p className="text-normal md:text-2xl">
          World's first civilian space travel
        </p>
        <div className="flex gap-5 ">
          <Link to="/training">
            <button className="px-6 py-1 bg-gray-600 border tracking-widest">
              TRAINING
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-1  border tracking-wider">
              GET STARTED
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
