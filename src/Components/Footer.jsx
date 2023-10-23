const Footer = () => {
  return (
    <div className="bg-black w-full h-[60px] flex items-center justify-center text-black font-semibold border-t ">
      <p>
        &copy; &nbsp; &nbsp;
        <span className=" tracking-[10px]">
          DEVA &nbsp; {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Footer;
