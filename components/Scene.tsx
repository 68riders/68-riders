"use client";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextureLoader } from "three";

function RotatingLogo() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, "/logo.png");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (meshRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        }
      });

      tl.to(meshRef.current.scale, { x: 1.8, y: 1.8, z: 1.8 }, 0)
        .to(meshRef.current.position, { y: 1.5 }, 0);
    }
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Back light glow */}
      <mesh position={[0, 0, -0.3]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial
          color="#ff0033"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Logo */}
      <mesh ref={meshRef}>
        <planeGeometry args={[3.5, 3.5]} />
        <meshBasicMaterial
          map={texture}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Back spot light */}
      <pointLight position={[0, 0, -2]} color="#ff0033" intensity={3} distance={8} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.3} />
        <spotLight position={[0, 0, -5]} angle={0.3} penumbra={1} color="#ff0033" intensity={5} />
        <RotatingLogo />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}