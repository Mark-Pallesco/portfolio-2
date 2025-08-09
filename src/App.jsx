import Banner from "./sections/banner";
import Services from "./sections/services";


export default function App() {
  return (
    <div className="w-full relative">
      <main id="page">
        <Banner />
        <Services />
      </main>
    </div>
  );
}
