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
import Dancer from "@/assets/imgs/Comp1/dancer.png";
import Karan from "@/assets/imgs/Comp1/karanTauba.png";
import Form from "@/assets/imgs/Comp1/starform.png";

const Comp1 = () => {
  const wrapperRef1 = useRef(null);
  const wrapperRef2 = useRef(null);
  const expandDivRef = useRef(null);
  const expandDivRef1 = useRef(null);
  const expandDivRef2 = useRef(null);
  const expandDivRef3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef1.current,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: true,
            markers: true,
          },
        })
        .to(".images-container", {
          xPercent: -135,
          ease: "none",
        })
        .to(
          ".images-container1",
          {
            xPercent: 135,
            ease: "none",
          },
          "<"
        )
        .to(
          ".expand-div",
          {
            width: "120vw",
            height: "250vh",
            ease: "none",
          },
          "<"
        )
        .to(
          ".expand-div-inner",
          {
            width: "120.8vw",
            height: "250.2vh",
            ease: "none",
            delay: 0.2,
          },
          "<"
        );

      // .to(
      //   ".expand-div-inner-absolute",
      //   {
      //     width: "100vw",
      //     height: "100%",
      //     ease: "none",
      //   },
      //   "<"
      // );
      // .to(
      //   ".expand-div-inner",
      //   {
      //     width: "99.8vw",
      //     height: "99.8vh",
      //     ease: "none",
      //   },
      //   "<"
      // );
    }, wrapperRef1);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef1} className="wrapper">
      <div className="images-container">
        <div className="image-div">
          <Image
            src={Img1}
            alt="Image 1"
            className="img-item-o"
            layout="fill"
          />
        </div>
        <div className="inner-container">
          <div className="image-div-inner">
            <Image
              src={Img2}
              alt="Image 2"
              className="img-item"
              layout="fill"
            />
          </div>
          <div className="image-div-inner">
            <Image
              src={Img3}
              alt="Image 3"
              className="img-item"
              layout="fill"
            />
          </div>
        </div>
        {/* <div className="center-div">
          
        </div> */}
      </div>
      <div ref={expandDivRef} className="expand-div">
        <div className="expand-div-two">
          <h1 className="expand-heading">
            India&apos;s most <br /> TRUSTED <br /> entertainment <br />{" "}
            platform
          </h1>
          <div ref={expandDivRef1} className="expand-div-inner">
            <div className="expand-div-inner-absolute">
              <Image src={Dancer} alt="Dancer" className="dance-img"></Image>
              <h1 className="dramatic-h1">THE DRAMATIC TURN</h1>
              <p className="dramatic-p">
                In a twist of fate, Karan hires Arjun for a major event through
                StarClinch. The collaboration is <br /> a huge success, with
                Arjun's engaging presence and Karan's flawless organization.
              </p>
              <div className="imggs-cont">
                <Image src={Karan} alt="Dancer" className="karan-img"></Image>
                <Image src={Form} alt="Dancer" className="form-img"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="images-container1">
        <div className="inner-container">
          <div className="image-div-inner">
            <Image
              src={Img6}
              alt="Image 2"
              className="img-item"
              layout="fill"
            />
          </div>
          <div className="image-div-inner">
            <Image
              src={Img4}
              alt="Image 3"
              className="img-item"
              layout="fill"
            />
          </div>
        </div>
        <div className="image-div">
          <Image
            src={Img5}
            alt="Image 1"
            className="img-item-o"
            layout="fill"
          />
        </div>

        {/* <div className="center-div">
          
        </div> */}
      </div>
    </div>
  );
};

export default Comp1;
