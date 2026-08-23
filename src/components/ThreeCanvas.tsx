'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    // Clear any existing children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Wave Geometry
    const particleCount = isDark ? 800 : 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Colors
    const colorGold = new THREE.Color(0xC9A227);
    const colorGoldLight = new THREE.Color(0xe8c96a);
    const colorNavy = isDark ? new THREE.Color(0x1e5799) : new THREE.Color(0x0A1628);
    const colorAccent = isDark ? new THREE.Color(0xffffff) : new THREE.Color(0x94a3b8);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const u = (i % 40) / 40;
      const v = Math.floor(i / 40) / 20;

      positions[i3] = (u - 0.5) * 150;
      positions[i3 + 1] = (v - 0.5) * 80;
      positions[i3 + 2] = (Math.sin(u * Math.PI * 4) + Math.cos(v * Math.PI * 4)) * 8;

      const r = Math.random();
      const c = r < 0.45 ? colorGold : r < 0.7 ? colorGoldLight : r < 0.88 ? colorNavy : colorAccent;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isDark ? 1.2 : 0.9,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.22,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3D Wireframe Shapes (visible in dark mode, subtle in light mode)
    const torusGeo = new THREE.TorusGeometry(14, 0.4, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xC9A227,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.12 : 0.04,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(45, -5, -15);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    const ringGeo = new THREE.RingGeometry(18, 18.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x1e5799 : 0x0A1628,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDark ? 0.15 : 0.05,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(-45, 12, -20);
    scene.add(ring);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.02;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.02;
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = pos[i3];
        const y = pos[i3 + 1];
        pos[i3 + 2] =
          Math.sin(x * 0.06 + elapsedTime * 0.6) * 5 +
          Math.cos(y * 0.06 + elapsedTime * 0.4) * 5;
      }
      geometry.attributes.position.needsUpdate = true;

      torus.rotation.z = elapsedTime * 0.08;
      torus.rotation.y = elapsedTime * 0.12;
      ring.rotation.x = elapsedTime * -0.06;
      ring.rotation.y = elapsedTime * 0.1;

      particles.rotation.y = targetX * 0.003;
      particles.rotation.x = targetY * 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
