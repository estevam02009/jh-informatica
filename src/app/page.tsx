import Navbar from "@/components/Navbar";
import Slideshow from "@/components/Slideshow";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}