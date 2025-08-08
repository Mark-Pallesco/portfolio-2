import Header from "./Components/Header";
import logo from './assets/home-banner (2).png';

export default function App() {




  return (
    <div className="bg-blue-950">
      <Header />

      <main className="w-full h-screen flex justify-center items-center  "id="info">
        <section className=" flex con mr-auto ml-auto relative">
          <div className="text-white w-full gap-4 flex flex-col items-center">
            <h3 className="font-sans text-2xl sm:text-xl">Lorem, ipsum.</h3>
            <h1 className="font-bold text-5xl md:text-4xl sm:text-3xl">{name}</h1>
            <h2 className="text-2xl sm:text-xl">Lorem, ipsum dolor.</h2>
            <button className="px-8 py-2 bg-transparent text-xl text-white rounded-3xl border border-white hover:bg-white hover:text-darkbg transition duration-300">
              Learn More
            </button>
          </div>

          <div className="text-white w-full gap-4 flex flex-col items-center">
            <img src={logo} alt="Logo" className="w-8/10" />
          </div>
        </section>
      </main>
    </div>
  );
}
