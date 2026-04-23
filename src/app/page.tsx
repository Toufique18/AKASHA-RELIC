import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import System from "./components/System";
import Chronicles from "./components/Chronicles";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#06030e]">
      <Navbar />
      <Hero />
      <System />
      <Chronicles />
    </main>
  );
}
