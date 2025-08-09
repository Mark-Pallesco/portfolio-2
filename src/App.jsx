import Banner from "./sections/banner";
import Services from "./sections/services";


export default function App() {
  return (
    <div className="w-full relative">
      <main id="page">
        <Banner />
        <h2>why</h2>
        <Services />
      </main>
    </div>
  );
}
