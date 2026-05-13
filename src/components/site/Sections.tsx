import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Suspense, useRef } from "react";
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  GraduationCap,
  Briefcase,
  Database,
  FileText,
  CheckCircle2,
  Code2,
  Users,
  Clock,
  Lightbulb,
  MessageSquare,
  Mic,
  Languages,
  ExternalLink,
  BookOpen,
  Presentation,
  Brain,
  ClipboardList,
  ArrowUp,
  Send,
} from "lucide-react";
import { HeroScene } from "./HeroScene";
import { ParticleField } from "./ParticleField";
import { Reveal } from "./Reveal";

/* ------------- shared helpers ------------- */

function GradientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--neon-purple)] opacity-30 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[var(--neon-blue)] opacity-25 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[var(--neon-magenta)] opacity-25 blur-[130px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
    </div>
  );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 200, damping: 15 });
  const ry = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 200, damping: 15 });

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------- HERO ------------- */

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      <GradientBlobs />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <ParticleField variant="purple" />

      <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <Sparkles size={12} className="text-[var(--neon-cyan)]" />
            <span className="text-muted-foreground">Aspiring Assistant Professor · Open to opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="block text-foreground">Gnanadeepika</span>
            <span className="block text-gradient">Ramkumar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="mt-5 text-lg text-muted-foreground md:text-xl"
          >
            Lecturer · Technical Trainer · Aspiring Assistant Professor.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-3 max-w-xl text-sm text-muted-foreground/80 md:text-base"
          >
            Passionate about education, technical mentoring, communication, and crafting interactive learning experiences that actually stick.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--glow-purple)" }}
            >
              <span className="relative z-10">View Projects</span>
              <ExternalLink size={14} className="relative z-10 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#resume"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Download size={14} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <Mail size={14} /> Contact Me
            </a>
          </motion.div>
        </div>

        {/* 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[420px] w-full max-w-[520px] md:h-[560px]"
        >
          <div className="absolute inset-0 rounded-full bg-[var(--neon-purple)] opacity-30 blur-3xl" />
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
        >
          <div className="h-1.5 w-1 rounded-full bg-[var(--neon-cyan)]" />
        </motion.div>
        <ArrowDown size={12} className="text-[var(--neon-cyan)]" />
      </motion.a>
    </section>
  );
}

/* ------------- ABOUT ------------- */

const timeline = [
  { icon: GraduationCap, title: "B.Tech, Leather Technology", org: "Alagappa College of Technology, Anna University · Chennai", desc: "Graduate degree with strong analytical and lab-based foundations." },
  { icon: Briefcase, title: "Trainee Analyst", org: "Test Yantra Software Solutions India Pvt Ltd", desc: "Hands-on training in data analysis, validation, documentation and quality processes." },
  { icon: BookOpen, title: "Aspiring Assistant Professor", org: "Education · Mentoring · Technical Training", desc: "Passionate about teaching, student engagement and analytical problem solving." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      <GradientBlobs />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">01 — About</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold md:text-5xl">
            A learner who loves <span className="text-gradient-static">turning learners</span> into doers.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            I blend a technical foundation with a genuine love for teaching. From data validation
            to classroom delivery, I focus on clarity, structure and engagement — the things that
            make learning actually stick.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="glass neon-border h-full rounded-3xl p-6">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: "var(--gradient-hero)", boxShadow: "var(--glow-purple)" }}
                  >
                    <item.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs text-[var(--neon-cyan)]">{item.org}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------- SKILLS ------------- */

const technicalSkills = [
  { icon: Database, label: "Data Analysis & Management", value: 88 },
  { icon: FileText, label: "Report Preparation & Docs", value: 92 },
  { icon: CheckCircle2, label: "Data Validation & QA", value: 85 },
  { icon: Code2, label: "Basic SQL", value: 75 },
];
const softSkills = [
  { icon: Users, label: "Team Collaboration" },
  { icon: Clock, label: "Time Management" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: MessageSquare, label: "Communication" },
  { icon: Mic, label: "Public Speaking" },
];
const langs = [
  { label: "English", level: 90 },
  { label: "Tamil", level: 100 },
  { label: "Hindi", level: 70 },
];

function Ring({ value }: { value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
      <circle cx="32" cy="32" r={r} fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" />
      <motion.circle
        cx="32" cy="32" r={r} fill="none"
        stroke="url(#ringGrad)" strokeWidth="6" strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-32">
      <ParticleField variant="cyan" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-magenta)]">02 — Skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Toolkit & <span className="text-gradient-static">capabilities</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Technical */}
          <Reveal>
            <div className="glass neon-border rounded-3xl p-6 md:p-8">
              <h3 className="mb-6 font-display text-xl font-semibold">Technical</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {technicalSkills.map((s) => (
                  <TiltCard key={s.label}>
                    <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-shadow hover:shadow-[var(--glow-purple)]">
                      <Ring value={s.value} />
                      <div>
                        <s.icon size={16} className="mb-1 text-[var(--neon-cyan)]" />
                        <p className="text-sm font-medium leading-tight">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.value}%</p>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Soft + Languages */}
          <div className="grid gap-6">
            <Reveal delay={0.1}>
              <div className="glass neon-border rounded-3xl p-6 md:p-8">
                <h3 className="mb-6 font-display text-xl font-semibold">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <motion.div
                      whileHover={{ y: -3, scale: 1.04 }}
                      key={s.label}
                      className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                    >
                      <s.icon size={14} className="text-[var(--neon-magenta)]" />
                      {s.label}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass neon-border rounded-3xl p-6 md:p-8">
                <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
                  <Languages size={18} className="text-[var(--neon-cyan)]" /> Languages
                </h3>
                <div className="space-y-4">
                  {langs.map((l) => (
                    <div key={l.label}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span>{l.label}</span>
                        <span className="text-muted-foreground">{l.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{ background: "var(--gradient-hero)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------- PROJECTS ------------- */

const projects = [
  { title: "Student Performance Analyzer", desc: "Concept system that ingests student scores, surfaces trends and flags learners needing support.", tags: ["Data Analysis", "Reporting", "SQL"] },
  { title: "Academic Documentation Hub", desc: "Structured documentation system for course material, assessments and lab manuals.", tags: ["Docs", "Templates", "QA"] },
  { title: "Technical Training Toolkit", desc: "Modular slide + lab kit for delivering hands-on technical sessions to undergrad students.", tags: ["Training", "Slides", "Labs"] },
  { title: "Lecture Presentation System", desc: "Reusable presentation framework focused on clarity, visual hierarchy and engagement.", tags: ["Presentation", "Design", "Comms"] },
  { title: "Data Validation Workflow", desc: "Lightweight validation + QA flow inspired by analyst experience at Test Yantra.", tags: ["Validation", "QA", "Process"] },
  { title: "Mentor Match Concept", desc: "UI concept matching students to mentors based on skills, goals and schedule overlap.", tags: ["UX", "Concept", "Matching"] },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      <GradientBlobs />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">03 — Projects</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Selected <span className="text-gradient-static">work & concepts</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <TiltCard className="group h-full">
                <div className="glass neon-border relative h-full overflow-hidden rounded-3xl p-6 transition-shadow duration-500 hover:shadow-[var(--glow-purple)]">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--neon-purple)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />
                  <div className="mb-5 flex items-start justify-between">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <div className="flex gap-2 opacity-60 transition-opacity group-hover:opacity-100">
                      <a href="#" className="glass flex h-8 w-8 items-center justify-center rounded-full"><Github size={13} /></a>
                      <a href="#" className="glass flex h-8 w-8 items-center justify-center rounded-full"><ExternalLink size={13} /></a>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------- HELP / SERVICES ------------- */

const services = [
  { icon: Presentation, title: "Technical Training", desc: "Hands-on sessions designed for clarity and retention." },
  { icon: Users, title: "Student Mentoring", desc: "1:1 and group mentoring focused on real progress." },
  { icon: Mic, title: "Communication & Presentation", desc: "Helping students speak with confidence and structure." },
  { icon: ClipboardList, title: "Data Documentation", desc: "Clean, structured documentation that scales." },
  { icon: Brain, title: "Analytical Reporting", desc: "Turning raw data into clear, actionable narratives." },
  { icon: BookOpen, title: "Academic Assistance", desc: "Support across coursework, projects and assessments." },
];

export function Help() {
  return (
    <section id="help" className="relative overflow-hidden px-6 py-32">
      <ParticleField variant="magenta" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-magenta)]">04 — What I help with</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            How I can <span className="text-gradient-static">support you</span>.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="glass neon-border group h-full rounded-3xl p-6"
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                  style={{ background: "var(--gradient-magenta)", boxShadow: "var(--glow-magenta)" }}
                >
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------- RESUME ------------- */

export function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden px-6 py-32">
      <GradientBlobs />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">05 — Resume</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Want the <span className="text-gradient-static">full story</span>?
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Grab a copy of my resume to explore my education, experience and the skills I bring to
            the classroom and the lab.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--glow-purple)" }}
          >
            <Download size={14} /> Download Resume
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <TiltCard>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass neon-border relative mx-auto aspect-[3/4] w-full max-w-sm rounded-3xl p-6"
            >
              <div className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-2xl" style={{ background: "var(--gradient-hero)" }} />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-xl font-bold">Gnanadeepika R</p>
                  <p className="text-xs text-muted-foreground">Lecturer · Trainer</p>
                </div>
                <FileText size={20} className="text-[var(--neon-cyan)]" />
              </div>
              <div className="mt-6 space-y-3">
                {["B.Tech · Leather Technology", "Anna University, Chennai", "Trainee Analyst · Test Yantra", "Data · Docs · Training"].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-3 rounded-full bg-white/8"
                  />
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-2 rounded-full bg-white/5" />
                ))}
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">PDF · 1 page</span>
                <span className="rounded-full bg-[var(--neon-cyan)]/10 px-2 py-0.5 text-[10px] text-[var(--neon-cyan)]">Updated 2025</span>
              </div>
            </motion.div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------- CONTACT ------------- */

export function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:deepikaramkumar2002@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <ParticleField variant="purple" />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-magenta)]">06 — Contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Let's <span className="text-gradient-static">connect</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Let's connect and create impactful learning experiences together.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="glass neon-border mt-10 rounded-3xl p-6 text-left md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField name="name" label="Name" placeholder="Your name" />
              <FormField name="email" type="email" label="Email" placeholder="you@email.com" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message" required rows={5}
                placeholder="What would you like to talk about?"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon-cyan)] focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_oklch(0.85_0.18_200/0.15)]"
              />
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[var(--glow-purple)] md:w-auto"
              style={{ background: "var(--gradient-hero)" }}
            >
              Send Message
              <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name} type={type} required placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-[var(--neon-cyan)] focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_oklch(0.85_0.18_200/0.15)]"
      />
    </div>
  );
}

/* ------------- LINKEDIN ------------- */

export function LinkedInSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="glass neon-border relative overflow-hidden rounded-3xl p-10 text-center md:p-14">
            <div className="absolute -inset-1 -z-10 opacity-50 blur-2xl" style={{ background: "var(--gradient-hero)" }} />
            <Linkedin size={36} className="mx-auto text-[var(--neon-blue)]" />
            <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Find me on <span className="text-gradient-static">LinkedIn</span>
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Open to collaborations, lecturer opportunities and meaningful conversations on education & technology.
            </p>
            <motion.a
              href="https://www.linkedin.com/"
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <span className="absolute inset-0 -z-10 rounded-full opacity-70 blur-xl" style={{ background: "var(--gradient-hero)" }} />
              <Linkedin size={15} /> Connect on LinkedIn
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------- FOOTER ------------- */

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Gnanadeepika Ramkumar — Crafted with care.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:deepikaramkumar2002@gmail.com" className="hover:text-foreground">Email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href="#top" className="hover:text-foreground">Top</a>
        </div>
      </div>
    </footer>
  );
}

/* ------------- BACK TO TOP ------------- */

export function BackToTop() {
  return (
    <motion.a
      href="#top"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "-200px" }}
      whileHover={{ scale: 1.1 }}
      className="glass fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-foreground"
      style={{ boxShadow: "var(--glow-purple)" }}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </motion.a>
  );
}
