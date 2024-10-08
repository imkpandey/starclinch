"use client";

import { Canvas, addEffect } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";

// Use lenis smooth scroll
const lenis = new Lenis({ syncTouch: true });
addEffect((t) => lenis.raf(t));

export default function Scene({ style, ...props }) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        minHeight: "100vh",
        pointerEvents: "none",
        zIndex: 99,
        ...style,
      }}
      eventSource={document.body}
      eventPrefix="client"
      {...props}
    >
      <View.Port />
      <Preload all />
    </Canvas>
  );
}
