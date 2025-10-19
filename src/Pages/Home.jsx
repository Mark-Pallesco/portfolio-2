import Banner from "../sections/Banner";
import Services from "../sections/Services";
import Header from "../Components/Header";
import Experience from "../sections/Experience";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="w-full relative">
      <Header />
      <main id="page">
        <Banner />
        <Services />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
