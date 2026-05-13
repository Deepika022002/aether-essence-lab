import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, OrbitControls, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function CoreOrb() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Sphere ref={ref} args={[1.2, 64, 64]}>
      <MeshDistortMaterial
        color="#9333ea"
        emissive="#7c3aed"
        emissiveIntensity={0.6}
        distort={0.45}
        speed={2}
        roughness={0.15}
        metalness={0.8}
      />
    </Sphere>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron args={[0.4, 0]} position={[2.2, 1, -1]}>
          <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.8} wireframe />
        </Icosahedron>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Torus args={[0.5, 0.1, 16, 64]} position={[-2.4, -0.6, 0]}>
          <meshStandardMaterial color="#f472b6" emissive="#ec4899" emissiveIntensity={0.6} metalness={0.9} roughness={0.2} />
        </Torus>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[0.25, 1]} position={[1.8, -1.5, 1]}>
          <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={1} />
        </Icosahedron>
      </Float>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.8}>
        <Torus args={[0.3, 0.08, 12, 48]} position={[-1.8, 1.6, -0.5]} rotation={[1, 0.5, 0]}>
          <meshStandardMaterial color="#7dd3fc" emissive="#0ea5e9" emissiveIntensity={0.7} wireframe />
        </Torus>
      </Float>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#a855f7" />
      <pointLight position={[-5, -5, 3]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[0, 5, -5]} intensity={1} color="#ec4899" />
      <CoreOrb />
      <FloatingShapes />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
