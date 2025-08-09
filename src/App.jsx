import Header from "./Components/Header";
import logo from './assets/Coding-bro (1).png';

export default function App() {
  return (
    <div className="w-full h-screen relative">
      <Header />
      <main className="w-full h-screen" id="info">
        <section id="banner" className="bg-slate-950 w-full flex justify-center items-center">
          {/* Content wrapper */}
          <div className="max-w-[1440px] h-screen w-full mx-auto relative px-10 flex justify-center items-center">
            
            {/* Left Column */}
            <div className="text-white w-full gap-4 justify-center flex flex-col">
              <p className="font-sans text-sm uppercase font-montserrat sm:text-xl">
                👋 Hi There? I’m Mark
              </p>
              <h1 className="font-bold text-5xl uppercase md:text-4xl sm:text-3xl">
                I’m A Developer
              </h1>
              <h2 className="text-2xl sm:text-xl">Lorem, ipsum dolor.</h2>
              <button className="bg-customGreen w-1/4 py-3 px-6 rounded-md font-montserrat">
                Download CV
              </button>
            </div>

            {/* Right Column */}
            <div className="text-white w-full gap-4 flex flex-col items-center">
              <img src={logo} alt="Logo" className="w-8/10" />
            </div>

          </div>
        </section>

        <section id="banner" className="bg-slate-950 w-full flex justify-center items-center">
          {/* Content wrapper */}
          <div className="max-w-[1440px] h-screen w-full mx-auto relative px-10 flex justify-center items-center">
            
            {/* Left Column */}
            <div className="text-white w-full gap-4 justify-center flex flex-col">
              <p className="font-sans text-sm uppercase font-montserrat sm:text-xl">
                👋 Hi There? I’m Mark
              </p>
              <h1 className="font-bold text-5xl uppercase md:text-4xl sm:text-3xl">
                I’m A Developer
              </h1>
              <h2 className="text-2xl sm:text-xl">Lorem, ipsum dolor.</h2>
              <button className="bg-customGreen w-1/4 py-3 px-6 rounded-md font-montserrat">
                Download CV
              </button>
            </div>

            {/* Right Column */}
            <div className="text-white w-full gap-4 flex flex-col items-center">
              <img src={logo} alt="Logo" className="w-8/10" />
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
