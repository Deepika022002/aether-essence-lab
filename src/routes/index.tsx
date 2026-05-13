import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/site/Cursor";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import {
  Hero, About, Skills, Projects, Help, Credentials, Resume, Contact, LinkedInSection, Footer, BackToTop,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gnanadeepika R — Educator & Leather Technology Specialist" },
      { name: "description", content: "Portfolio of Gnanadeepika R — Academic Educator, Leather Technology Specialist and R&D enthusiast. Mentoring, innovation and interactive learning." },
      { property: "og:title", content: "Gnanadeepika R — Educator & Leather Technology Specialist" },
      { property: "og:description", content: "Portfolio of Gnanadeepika R — Academic Educator, Leather Technology Specialist and R&D enthusiast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative dark">
      <Loader />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Help />
      <Credentials />
      <Resume />
      <Contact />
      <LinkedInSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
