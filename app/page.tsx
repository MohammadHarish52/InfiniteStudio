import LandingPage from "./components/landing-page";
import ServicesSection from "./components/services-section";
import ProjectSection from "./components/project-section";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <LandingPage />
      <ServicesSection />
      <ProjectSection />
      <Footer />
    </>
  );
}
