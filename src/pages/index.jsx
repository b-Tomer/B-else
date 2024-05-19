
import About from "@/Components/About";
import ContactSection from "@/Components/ContactSection";
import FeaturedProjects from "@/Components/FeaturedProjects";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import ServicesSection from "@/Components/ServicesSection ";
import Head from "next/head";

export default function Home() {



  return (
    <main dir="rtl" className=" mx-auto bg-main-yellow scroll-smooth">
      <Head>
        <title>B-else</title>

      </Head>

      <section className="relative font-ibm ">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ContactSection />
        <FeaturedProjects />
        <About />
      </section>




      <Footer />

    </main>
  );
}

