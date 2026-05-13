import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--neon-purple)] opacity-40 blur-[120px]" />
          </div>
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="h-16 w-16 rounded-full border-2 border-transparent"
              style={{
                borderTopColor: "var(--neon-purple)",
                borderRightColor: "var(--neon-cyan)",
                borderBottomColor: "var(--neon-magenta)",
              }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Initializing experience…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
