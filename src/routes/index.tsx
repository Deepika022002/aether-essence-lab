import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/site/Cursor";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import {
  Hero, About, Skills, Projects, Help, Resume, Contact, LinkedInSection, Footer, BackToTop,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gnanadeepika R — Lecturer & Technical Trainer" },
      { name: "description", content: "Portfolio of Gnanadeepika R — Lecturer, Technical Trainer and aspiring Assistant Professor. Education, mentoring, communication and interactive learning." },
      { property: "og:title", content: "Gnanadeepika R — Lecturer & Technical Trainer" },
      { property: "og:description", content: "Portfolio of Gnanadeepika R — Lecturer, Technical Trainer and aspiring Assistant Professor." },
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
      <Resume />
      <Contact />
      <LinkedInSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
