import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import System from "./components/System";
import Chronicles from "./components/Chronicles";
import Avata from "./components/Avata";
import Manifesto from "./components/Manifesto";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#06030e]">
      <Navbar />
      <Hero />
      <System />
      <Chronicles />
      <Avata />
      <Manifesto />
      <Blog />
      <Subscribe />
      <Footer />
    </main>
  );
}
