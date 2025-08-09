import Banner from "./sections/Banner";
import Services from "./sections/Services";
import Header from "./Components/Header";


export default function App() {
  return (
    <div className="w-full relative">
      <Header />
      <main id="page">
        <Banner />
        <h2>why</h2>
        <Services />
      </main>
    </div>
  );
}
