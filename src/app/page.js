"use client";
import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Canvas } from "@react-three/fiber";
import { Center, Float, Scroll, ScrollControls } from "@react-three/drei";
import SplitType from "split-type";
import Stars from "@/components/canvas/stars";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Image from "next/image";

const Logo = dynamic(() => import("@/components/canvas/logo"), {
  ssr: false,
});

const Common = dynamic(() => import("@/components/canvas/common"), {
  ssr: false,
});

const View = dynamic(
  () => import("@react-three/drei").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          style={{ width: 40, height: 40 }}
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);

export default function Home() {
  const homeRef = useRef();
  const modelRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const heading = new SplitType(".heading");
      const headingChars = heading.chars;

      gsap.set(".back-image", {
        opacity: 0.2,
      });

      gsap.from(headingChars, {
        yPercent: 200,
        stagger: 0.025,
        duration: 1,
        delay: 1,
        ease: "power4.inOut",
      });

      const tl = gsap.timeline();

      tl.to(".back-image", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      });

      // tl.to(".bg", {
      //   scrollTrigger: {
      //     trigger: ".hero-section",
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: true,
      //     // markers: true,
      //   },
      //   opacity: 0,
      //   duration: 1,
      //   ease: "power4.inOut",
      // });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={homeRef}
      className="text-white w-full min-h-screen flex flex-col items-center"
    >
      <section className="hero-section w-full h-screen flex justify-center">
        <div className="logo w-fit h-fit fixed top-10 left-10 z-10">
          <Image src="/logo.webp" alt="logo" width={200} height={200} />
        </div>
        <div className="w-fit h-fit p-6 overflow-hidden mt-[5rem] flex items-center justify-center">
          <h1 className="heading text-[clamp(4rem,17vw,17rem)] font-bold tracking-tighter text-center opacity-90">
            StarClinch
          </h1>
        </div>
        <div className="fixed top-0 left-0 w-full h-screen">
          <Image
            src="/bg.jpg"
            alt="bg"
            width={1024}
            height={1024}
            className="back-image w-full h-full object-cover"
          />
        </div>
        <div className="fixed top-0 left-0 w-full h-screen">
          <Canvas position={[0, 0, -1]}>
            <Stars />
          </Canvas>
          <div className="fixed top-0 left-0 w-full h-full z-[2]">
            <View orbit className="w-full h-full overflow-hidden">
              <Common controls />
              <Float floatIntensity={1.5} floatingRange={[-0.25, 0.25]}>
                <Logo scale={3} homeRef={homeRef} />
              </Float>
            </View>
          </div>
        </div>
      </section>
      <section className="content-section bg-black w-full h-screen"></section>
      <section className="bg-black w-full h-screen"></section>
    </main>
  );
}
