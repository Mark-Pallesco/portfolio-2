import Banner from "./sections/banner";
import Services from "./sections/services";
import Header from "./components/Header"; 

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
