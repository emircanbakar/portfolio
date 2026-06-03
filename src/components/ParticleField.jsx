import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1200;

/**
 * ParticleField — Procedural particle universe.
 * Renders instanced particles that react to scroll and mouse.
 * Single draw call for all particles via InstancedMesh.
 */
export default function ParticleField() {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Generate particle positions and properties once
  const particles = useMemo(() => {
    const positions = [];
    const scales = [];
    const speeds = [];
    const offsets = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 2
      );
      scales.push(0.3 + Math.random() * 0.7);
      speeds.push(0.1 + Math.random() * 0.4);
      offsets.push(Math.random() * Math.PI * 2);
    }

    return { positions, scales, speeds, offsets };
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Initialize instance matrices
  useEffect(() => {
    if (!meshRef.current) return;

    const dummy = new THREE.Object3D();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      dummy.position.set(
        particles.positions[idx],
        particles.positions[idx + 1],
        particles.positions[idx + 2]
      );
      const s = particles.scales[i] * 0.02;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [particles]);

  // Animate particles each frame
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    const dummy = new THREE.Object3D();
    const mouse = mouseRef.current;
    
    // Read scroll directly to avoid React state re-renders
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      const speed = particles.speeds[i];
      const offset = particles.offsets[i];

      // Base position with slow drift
      const x =
        particles.positions[idx] +
        Math.sin(time * speed * 0.3 + offset) * 0.5 +
        mouse.x * 0.3 * particles.scales[i];
      const y =
        particles.positions[idx + 1] +
        Math.cos(time * speed * 0.2 + offset) * 0.4 +
        mouse.y * 0.2 * particles.scales[i];
      const z =
        particles.positions[idx + 2] +
        Math.sin(time * speed * 0.15 + offset * 2) * 0.3 -
        scrollProgress * 8; // Camera push forward on scroll

      dummy.position.set(x, y, z);

      // Subtle scale pulsation
      const pulse = 0.8 + Math.sin(time * speed + offset) * 0.2;
      const s = particles.scales[i] * 0.02 * pulse;
      dummy.scale.set(s, s, s);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.4}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

/**
 * AmbientParticles — Additional tiny floating particles for depth.
 */
export function AmbientParticles() {
  const pointsRef = useRef();

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlePositions}
          count={600}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#888888"
        size={0.015}
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
