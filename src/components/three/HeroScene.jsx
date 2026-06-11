import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 2500;
const particlesPosition = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const r = 10 * Math.cbrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(2 * Math.random() - 1);
  
  particlesPosition[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  particlesPosition[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  particlesPosition[i * 3 + 2] = r * Math.cos(phi);
}

function ParticleSwarm() {
  const points = useRef(null);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#E11D48"
        transparent={true}
        opacity={0.7}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RinneSharingan() {
  const group = useRef(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = state.clock.elapsedTime * 0.2; // Slow rotation
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3; // Gentle floating
    }
  });

  return (
    <group ref={group} scale={2.5}>
      {/* Iris base */}
      <mesh>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial color="#9f1239" transparent opacity={0.6} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Outer ring */}
      <mesh>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ff5722" transparent opacity={0.5} />
      </mesh>
      
      {/* Concentric Rinnegan rings */}
      {[0.5, 1.0, 1.5].map((r) => (
        <mesh key={r} position={[0, 0, 0.01]}>
          <torusGeometry args={[r, 0.015, 16, 100]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      ))}
      
      {/* 9 Tomoes of the Infinite Tsukuyomi */}
      {[0.5, 1.0, 1.5].map((r, ringIndex) => (
        <group key={`ring-${ringIndex}`}>
          {[0, 1, 2].map((i) => (
            <mesh key={`tomoe-${ringIndex}-${i}`} position={[
              Math.cos((i * 2 * Math.PI) / 3 + ringIndex * 0.5) * r,
              Math.sin((i * 2 * Math.PI) / 3 + ringIndex * 0.5) * r,
              0.02
            ]}>
              <sphereGeometry args={[0.08 + ringIndex * 0.02, 16, 16]} />
              <meshBasicMaterial color="#000000" />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Center pupil */}
      <mesh position={[0, 0, 0.02]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 60 }}>
      <fog attach="fog" args={['#0a0002', 5, 25]} />
      <ParticleSwarm />
      <RinneSharingan />
    </Canvas>
  );
}
