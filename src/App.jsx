import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Partnerships from "./components/Partnerships";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Navigation */}
      <NavBar />

      {/* Home / Hero Section */}
      <main id="home" className="pt-16">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Partnerships />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
