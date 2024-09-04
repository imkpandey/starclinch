import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

// Assets
import pageBg from "@/assets/imgs/page-bg.png";
import crown from "@/assets/imgs/crown.png";
import raju from "@/assets/imgs/raju-bg.png";
import stickerOne from "@/assets/imgs/sticker-one.png";
import stickerTwo from "@/assets/imgs/sticker-two.png";
import stickerThree from "@/assets/imgs/sticker-three.png";
import stickerFour from "@/assets/imgs/sticker-four.png";
import frameOne from "@/assets/imgs/frame-one.png";
import frameTwo from "@/assets/imgs/frame-two.png";
import frameThree from "@/assets/imgs/frame-three.png";
import scooty from "@/assets/imgs/scooty.png";

const Dilemma = ({ homeRef }) => {
  const pageRef = useRef(null);
  const dilemmaRef = useRef(null);
  const ordinaryRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: dilemmaRef.current,
            start: "top top",
            end: "bottom bottom",
            markers: true,
          },
        })
        // .from(".main-heading, .main-subheading", {
        //   yPercent: 150,
        //   ease: "none",
        //   duration: 0.25,
        // })
        // .from(
        //   ".crown",
        //   {
        //     yPercent: -150,
        //     ease: "none",
        //     duration: 0.25,
        //   },
        //   "<"
        // )
        .from(
          ".raju-bg",
          {
            yPercent: 150,
            ease: "none",
            duration: 0.5,
          },
          "<"
        )
        .from(
          ".sticker-one, .sticker-two",
          {
            xPercent: -150,
            ease: "none",
            duration: 0.5,
          },
          "<"
        )
        .from(
          ".sticker-three, .sticker-four",
          {
            xPercent: 150,
            ease: "none",
            duration: 0.5,
          },
          "<"
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ordinaryRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(".scooty", {
          xPercent: 150,
          ease: "none",
          duration: 0.5,
        })
        .to(
          ".frame-two",
          {
            xPercent: -100,
            ease: "none",
            duration: 0.2,
          },
          "-=0.5"
        )
        .to(
          ".frame-three",
          {
            xPercent: -100,
            ease: "none",
            duration: 0.2,
          },
          "-=0.25"
        );
    }, pageRef);

    return () => ctx.revert();
  }, [homeRef]);

  return (
    <section
      ref={pageRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <section
        ref={dilemmaRef}
        className="dilemma-section relative w-full h-screen flex flex-col justify-center items-center pt-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={pageBg}
            alt="page-bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full opacity-80" />
        <div className="dilemma-heading-container relative w-fit h-fit p-10 flex flex-col justify-center items-center overflow-hidden leading-tight">
          <div className="crown absolute top-0 left-0 w-[100px] h-[100px]">
            <Image
              src={crown}
              alt="crown"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="main-heading gothic text-[clamp(3.5rem,7vw,7rem)] font-bold text-white tracking-wide uppercase">
            Raju&apos;s <span className="text-[#FF0087]">Birthday</span> Dilemma
          </h1>
          <p className="main-subheading text-[clamp(0.25rem,1.25vw,1.25rem)] font-light leading-snug text-white text-center">
            Raju&apos;s birthday was around the corner. And his friends - Farhan
            and <br /> Rancho wanted to do something special to lift up his
            spirits.
          </p>
        </div>
        <div className="dilemma-image-container relative w-full h-[70%] flex justify-center items-center">
          <div className="raju-bg absolute bottom-0 right-0 w-full h-full mix-blend-hard-light">
            <Image
              src={raju}
              alt="raju"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] overflow-hidden">
            <Image
              src={stickerOne}
              alt="sticker-one"
              className="sticker-one w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-[20%] right-[20%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] overflow-hidden">
            <Image
              src={stickerThree}
              alt="sticker-three"
              className="sticker-three w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-[-10%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[200px] overflow-hidden">
            <Image
              src={stickerTwo}
              alt="sticker-two"
              className="sticker-two w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-[0%] right-[10%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[200px] overflow-hidden">
            <Image
              src={stickerFour}
              alt="sticker-four"
              className="sticker-four w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section
        ref={ordinaryRef}
        className="relative w-full h-screen flex flex-col justify-center items-center py-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={pageBg}
            alt="page-bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full opacity-40" />
        <div className="ordinary-heading-container relative w-fit h-fit p-10 flex flex-col justify-center items-center overflow-hidden leading-tight">
          <h1 className="ord-heading gothic text-[clamp(3.5rem,7vw,7rem)] font-bold text-white tracking-wide uppercase">
            Beyond the ordinary
          </h1>
          <p className="ord-subheading text-[clamp(0.25rem,1.25vw,1.25rem)] font-light leading-snug text-white text-center">
            Parties, trips, gifts—everything felt too conventional. They needed
            an <br /> idea that would truly make Raju smile and feel special.
          </p>
        </div>
        <div className="ordinary-image-container relative w-[70%] h-[70%] flex justify-center items-center rounded-2xl overflow-hidden">
          <div className="frame-one absolute top-0 left-0 w-full h-full">
            <Image
              src={frameOne}
              alt="frame-one"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="frame-two absolute top-0 left-full w-full h-full z-[2]">
            <Image
              src={frameTwo}
              alt="frame-two"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="frame-three absolute top-0 left-[100%] w-full h-full z-[3]">
            <Image
              src={frameThree}
              alt="frame-three"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="scooty absolute bottom-0 left-0 w-[400px] h-[300px] z-[3]">
            <Image
              src={scooty}
              alt="scooty"
              layout="fill"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col justify-center items-center py-10 overflow-hidden"></section>
    </section>
  );
};

export default Dilemma;
