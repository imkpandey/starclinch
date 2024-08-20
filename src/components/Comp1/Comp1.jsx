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
import OB from "@/assets/imgs/Comp1/orangeBall.png";
import PB from "@/assets/imgs/Comp1/pinkBall.png";

const Comp1 = () => {
  const wrapperRef1 = useRef(null);
  const wrapperRef2 = useRef(null);
  const expandDivRef = useRef(null);
  const expandDivRef1 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef1.current,
            start: "center center",
            end: "+=300%",
            scrub: true,
            pin: true,
            markers: true,
          },
        })
        .to(".images-container", {
          xPercent: -110,
          ease: "none",
        })
        .to(
          ".images-container1",
          {
            xPercent: 110,
            ease: "none",
          },
          "<"
        )
        .to(
          ".expand-div",
          {
            width: "100vw",
            height: "100vh",
            ease: "none",
          },
          "<"
        )
        .to(
          ".expand-div-inner",
          {
            width: "99.8vw",
            height: "99.8vh",
            ease: "none",
          },
          "<"
        );

   
    }, wrapperRef1);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef1} className="wrapper">
      <div className="images-container">
        <div className="image-div">
          <Image src={Img1} alt="Image 1" className="img-item-o" layout="fill" />
        </div>
        <div className="inner-container">
        <div className="image-div-inner">
          <Image src={Img2} alt="Image 2" className="img-item" layout="fill" />
        </div>
        <div className="image-div-inner">
          <Image src={Img3} alt="Image 3" className="img-item" layout="fill" />
        </div>
        </div>
        {/* <div className="center-div">
          
        </div> */}
      </div>
      <div ref={expandDivRef} className="expand-div">
      <div ref={expandDivRef1} className="expand-div-inner">
      
      </div>
      </div>
      <div className="images-container1">
        <div className="inner-container">
        <div className="image-div-inner">
          <Image src={Img6} alt="Image 2" className="img-item" layout="fill" />
        </div>
        <div className="image-div-inner">
          <Image src={Img4} alt="Image 3" className="img-item" layout="fill" />
        </div>
        </div>
        <div className="image-div">
          <Image src={Img5} alt="Image 1" className="img-item-o" layout="fill" />
        </div>
      
        {/* <div className="center-div">
          
        </div> */}
      </div>
    </div>
  );
};

export default Comp1;
