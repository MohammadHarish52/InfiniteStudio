import LandingPage from "./components/landing-page";
import ServicesSection from "./components/services-section";
import ProjectSection from "./components/project-section";
import Footer from "./components/footer";
import TeamSection from "./components/team-section";
export default function Home() {
  return (
    <>
      <LandingPage />
      <ServicesSection />
      <TeamSection />
      <ProjectSection />
      <Footer />
    </>
  );
}
