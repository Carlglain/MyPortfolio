import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Work from "@/components/sections/Work";
import Splash from "@/components/Splash";

export default function Home() {
  return (
    <>
      <Splash />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Work />
        <Contact />
      </main>
    </>
  );
}
