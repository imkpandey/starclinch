"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Comp1.scss";
import Img1 from "@/assets/imgs/Comp1/imgg1.png";
import Img2 from "@/assets/imgs/Comp1/imgg2.png";
import Img3 from "@/assets/imgs/Comp1/imgg3.png";
import Img4 from "@/assets/imgs/Comp1/imgg4.png";
import Img5 from "@/assets/imgs/Comp1/imgg5.png";
import Img6 from "@/assets/imgs/Comp1/imgg6.png";

const Comp1 = () => {
  const wrapperRef1 = useRef(null);
  const wrapperRef2 = useRef(null);
  const expandDivRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef1.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            markers: true,
          },
        })
        .to(".images-container", {
          xPercent: -100,
          ease: "none",
        })
        .to(
          ".images-container1",
          {
            xPercent: 100,
            ease: "none",
          },
          "<"
        )
        .to(
          ".expand-div",
          {
            width: "100vw",
            ease: "none",
          },
          "<"
        );

      // gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".images-container1",
      //       start: "center center",
      //       end: "+=100%",
      //       scrub: true,
      //       pin: true,
      //       markers: true,
      //     },
      //   }).to(".images-container1", {
      //     xPercent: 100,
      //     ease: "none",
      //   }
      // );

      // gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".expand-div",
      //       start: "center center",
      //       end: "+=200%",
      //       scrub: true,
      //       pin: true,
      //       markers: true,
      //     },
      //   }).to(".expand-div", {
      //     width:"100%",
      //     transition:" width 0.5s ",
      //     ease: "none",
      //   }
      // );
    }, wrapperRef1);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef1} className="wrapper">
      <div className="images-container">
        <div className="image">
          <Image src={Img1} alt="Image 1" className="img-item" layout="fill" />
        </div>
        <div className="image">
          <Image src={Img2} alt="Image 2" className="img-item" layout="fill" />
        </div>
        <div className="image">
          <Image src={Img3} alt="Image 3" className="img-item" layout="fill" />
        </div>
        {/* <div className="center-div">
          
        </div> */}
      </div>
      <div ref={expandDivRef} className="expand-div"></div>
      <div className="images-container1">
        <div className="image">
          <Image src={Img4} alt="Image 4" layout="fill" objectFit="cover" />
        </div>
        <div className="image">
          <Image src={Img5} alt="Image 5" layout="fill" objectFit="cover" />
        </div>
        <div className="image">
          <Image src={Img6} alt="Image 6" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Comp1;
