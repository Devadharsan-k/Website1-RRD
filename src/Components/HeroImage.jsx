/* eslint-disable react/prop-types */
import HeroImg from "../assets/pexels-pixabay-220201.jpg";

const HeroImage = ({ title, subTitle }) => {
  return (
    <div>
      <img
        className="relative w-full h-[30vh] object-cover"
        src={HeroImg}
        alt=""
      />
      <div className="absolute top-36 flex flex-col gap-2 items-center justify-center w-full">
        <p className="text-3xl md:text-5xl font-semibold">{title}</p>
        <p className="text-xl">{subTitle}</p>
      </div>
    </div>
  );
};

export default HeroImage;
