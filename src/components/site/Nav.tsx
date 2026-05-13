import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#help", label: "Services" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan), var(--neon-magenta))",
        }}
      />
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="fixed top-4 left-1/2 z-40 -translate-x-1/2"
      >
        <div className="glass flex items-center gap-1 rounded-full px-2 py-2 md:gap-2 md:px-4">
          <a href="#top" className="px-3 py-1.5 font-display text-sm font-bold tracking-tight text-gradient-static">
            G.R
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -10, pointerEvents: "none" }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-4 top-20 z-40 md:hidden"
      >
        <div className="glass flex flex-col rounded-2xl p-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
