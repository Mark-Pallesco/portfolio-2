import { useState, useEffect } from "react";
import logo from '../assets/Coding-bro (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';

export default function Banner() {
  const careers = ["Developer", "Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === careers.length) return;

    if (subIndex === careers[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % careers.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(careers[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, careers]);

  return (
    <section id="banner" className="bg-slate-950 w-full flex justify-center items-center">
      <div className="max-w-[1440px] h-screen w-full mx-auto relative px-5 lg:px-10 flex flex-col lg:flex-row justify-center items-center gap-8">
        
        {/* Right Column - Image */}
        <div className="text-white w-full flex flex-col items-center order-1 lg:order-2">
          <img src={logo} alt="Logo" className="max-w-full h-auto" />
        </div>

        {/* Left Column - Text */}
        <div className="text-white w-full gap-4 justify-center flex flex-col order-2 lg:order-1">
          <p className="text-md uppercase font-montserrat">
            👋 Hi There? <span className="text-yellow-400">I’m Mark</span>
          </p>

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl uppercase">
            I’m A <span className="career text-yellow-400">{text}</span>
            <span className="blinking-cursor">|</span>
          </h1>

          <p className="text-md">
            Your trusted partner in crafting dynamic, user-friendly websites.
            <br />
            Let us bring your vision to life with a website that works as hard as you do!
          </p>

          {/* Get in Touch Button */}
          <a
            href="mailto:angelomark31@gmail.com"
            className="bg-customGreen w-full sm:w-1/2 lg:w-1/4 py-3 px-6 rounded-md font-montserrat text-center"
          >
            Get in Touch
          </a>

          {/* Icons */}
          <div className="icons text-white pt-4 lg:pt-40">
            I offer a full suite of WordPress development services <br /> tailored to meet your unique business needs
            <div className="flex gap-2 mt-3">
              <FontAwesomeIcon icon={faWordpress} className="px-2 py-3 bg-white rounded-md" style={{ color: '#21759B', fontSize: '2.2rem' }} />
              <FontAwesomeIcon icon={faJs} className="px-2 py-3 bg-white rounded-md" style={{ color: '#F7DF1E', fontSize: '2.2rem' }} />
              <FontAwesomeIcon icon={faReact} className="px-2 py-3 bg-white rounded-md" style={{ color: '#61DBFB', fontSize: '2.2rem' }} />
              <FontAwesomeIcon icon={faHtml5} className="px-2 py-3 bg-white rounded-md" style={{ color: '#E44D26', fontSize: '2.2rem' }} />
              <FontAwesomeIcon icon={faCss3Alt} className="px-2 py-3 bg-white rounded-md" style={{ color: '#264de4', fontSize: '2.2rem' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
