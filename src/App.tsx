import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { WorkflowSection } from './components/sections/WorkflowSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { PartnersSection } from './components/sections/PartnersSection';
import { BlogSection } from './components/sections/BlogSection';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WorkflowSection />
        <TestimonialsSection />
        <PartnersSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

