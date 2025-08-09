import { useState, useEffect } from "react";
import Header from "./Components/Header";
import logo from './assets/Coding-bro (1).png';

export default function App() {
  const careers = ["Developer", "Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // Which word
  const [subIndex, setSubIndex] = useState(0); // Which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === careers.length) return; // safety check

    if (subIndex === careers[index].length + 1 && !deleting) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      // Move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % careers.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(careers[index].substring(0, subIndex));
    }, deleting ? 50 : 100); // faster delete

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, careers]);

  return (
    <div className="w-full h-screen relative">
      <Header />
      <main className="w-full h-screen" id="page">
        <section
          id="banner"
          className="bg-slate-950 w-full flex justify-center items-center"
        >
       <div className="max-w-[1440px] h-screen w-full mx-auto relative px-5 lg:px-10 flex flex-col md:flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8">
            {/* Right Column (Image) */}
            <div className="text-white w-full flex flex-col items-center order-1 lg:order-2">
              <img src={logo} alt="Logo" className="max-w-full h-auto" />
            </div>

            {/* Left Column (Text) */}
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

              <button className="bg-customGreen w-full sm:w-1/2 lg:w-1/4 py-3 px-6 rounded-md font-montserrat">
                Download CV
              </button>
            </div>

          </div>

        </section>
      </main>
    </div>
  );
}
