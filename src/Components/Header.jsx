import { useEffect, useState } from "react";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isFixed ? "fixed top-0 bg-slate-950 shadow-lg" : "absolute bg-slate-950"
      } w-full text-white z-50 transition-all duration-300`}
    >
      <div className="px-5 lg:px-10 py-5 max-w-[1440px] mx-auto relative">
        <header className="flex justify-between items-center">
          {/* Logo */}
          <h3 className="text-4xl text-white font-bold">
            <a href="/">MRKPALLE</a>
          </h3>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:block">
            <ul className="flex gap-4 font-montserrat">
              <li className="p-2 font-medium"><a href="#home">HOMES</a></li>
              <li className="p-2 font-medium"><a href="#about">SERVICES</a></li>
              <li className="p-2 font-medium"><a href="#services">EXPERIENCE</a></li>
              <li className="p-2 font-medium"><a href="#portfolio">PORTFOLIO</a></li>
              <li className="p-2 font-medium"><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>

          {/* Button */}
          <button className="bg-customGreen py-3 px-6 rounded-md font-montserrat">
            Download CV
          </button>
        </header>
      </div>
    </div>
  );
}

export default Header;
