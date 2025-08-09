import { useState, useEffect } from "react";
import Header from "./Components/Header";
import logo from './assets/Coding-bro (1).png';

export default function App() {
  const careers = ["Developer", "Designer", "Freelancer"];
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
          <div className="max-w-[1440px] h-screen w-full mx-auto relative px-10 flex justify-center items-center">
            
            {/* Left Column */}
            <div className="text-white w-full gap-4 justify-center flex flex-col">
              <p className="text-md uppercase font-montserrat">
                👋 Hi There? <span className="text-yellow-400">I’m Mark</span>
              </p>

              <h1 className="font-bold text-6xl uppercase">
                I’m A <span className="career text-yellow-400">{text}</span>
                <span className="blinking-cursor">|</span>
              </h1>

              <p className="text-md ">Your trusted partner in Crafting Dynamic user-friendly Websites. 
                Let us bring your vision to life with a website that works as hard as you do!
              </p>
              <button className="bg-customGreen w-1/4 py-3 px-6 rounded-md font-montserrat">
                Download CV
              </button>
            </div>

            {/* Right Column */}
            <div className="text-white w-full gap-4 flex flex-col items-center">
              <img src={logo} alt="Logo" />
            </div>

          </div>
        </section>
      </main>

      {/* Cursor Style */}
      <style>
        {`
          .blinking-cursor {
            font-weight: bold;
            font-size: 1em;
            color: white;
            animation: blink 0.7s infinite;
          }
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
