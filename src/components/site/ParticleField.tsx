import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface Props {
  variant?: "purple" | "cyan" | "magenta";
}

export function ParticleField({ variant = "purple" }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  const colorMap = {
    purple: ["#b67dff", "#8b5cf6", "#7dd3fc"],
    cyan: ["#7dd3fc", "#67e8f9", "#a78bfa"],
    magenta: ["#f472b6", "#c084fc", "#7dd3fc"],
  };

  return (
    <Particles
      id={`tsparticles-${variant}`}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.6 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: colorMap[variant] },
          links: {
            color: colorMap[variant][0],
            distance: 140,
            enable: true,
            opacity: 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" },
            random: true,
          },
          number: { value: 60, density: { enable: true } },
          opacity: { value: { min: 0.2, max: 0.7 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
