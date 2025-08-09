import Header from "./components/Header";
import Banner from "./sections/Banner.jsx";
import Services from "./sections/Services.jsx";

export default function App() {
  return (
    <div className="w-full relative">
      <Header />
      <main id="page">
        <Banner />
        <Services />
      </main>
    </div>
  );
}
