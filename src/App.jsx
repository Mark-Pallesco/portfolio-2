import Header from "./Components/Header";
import logo from './assets/mrk-logo-white.png';

export default function App() {




  return (
    <div className="bg-darkbg">
      <Header />

      <main
        className="w-full h-screen flex justify-center items-center bg-grid-gray-500 bg-grid-8"
        id="info"
      >
        <section className="text-white gap-4 flex flex-row-reverse items-center w-full z-10 px-10">
          <div className="text-white w-full gap-4 flex flex-col items-center">
            <h3 className="font-sans text-2xl sm:text-xl">Lorem, ipsum.</h3>
            <h1 className="font-bold text-5xl md:text-4xl sm:text-3xl">{name}</h1>
            <h2 className="text-2xl sm:text-xl">Lorem, ipsum dolor.</h2>
            <button className="px-8 py-2 bg-transparent text-xl text-white rounded-3xl border border-white hover:bg-white hover:text-darkbg transition duration-300">
              Learn More
            </button>
          </div>

          <div className="text-white w-full gap-4 flex flex-col items-center">
            <img src={logo} alt="Logo" />
          </div>
        </section>
      </main>

      {/* About Section */}
      <div id="about" className="w-full">
        <div className="text-white px-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem
            obcaecati corporis minus, facilis perferendis suscipit quibusdam
            sit? Autem, repudiandae?
          </p>
          <h2 className="text-2xl font-bold mt-4">{name}</h2>
        </div>
      </div>
    </div>
  );
}
