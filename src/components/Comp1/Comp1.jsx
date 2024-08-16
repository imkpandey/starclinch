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
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const wrapperTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".images-container",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      wrapperTl.to(".images-container", {
        xPercent: -100,
        ease: "none",
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   // Vertical movement animation
  //   const verticalTimeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".wrapper",
  //       start: "center center", // Pin when the center of .wrapper aligns with the center of the viewport
  //       end: "top top+=50%",
  //       scrub: true,
  //       // pin:true,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //         console.log(progress, "progress y");
  //         // Add a condition to stop vertical movement once the animation reaches the desired point
  //         if (progress <= 0.9) {
  //           gsap.to(".images-container", {
  //             yPercent: -0 * (1 - progress), // Vertical movement up to a maximum of -50%
  //             ease: "none",
  //           });
  //         }
  //       },
  //     },
  //   });

  //   // Horizontal movement animation
  //   gsap.to(".images-container", {
  //     scrollTrigger: {
  //       trigger: ".wrapper",
  //       start: "top top+=50%", // Start the horizontal movement once the vertical movement has begun
  //       end: "bottom bottom", // Continue the horizontal movement until the bottom of the viewport
  //       scrub: true,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //         if (progress > 0.15) {
  //           gsap.to(".images-container", {
  //             xPercent: -100 * (progress - 0.15) * 2, // Adjust the factor for smooth horizontal movement
  //             ease: "none",
  //           });
  //         }
  //       },
  //     },
  //   });
  // }, []);

  return (
    <div ref={wrapperRef} className="wrapper">
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
        {/* <div className="image">
          <Image src={Img4} alt="Image 4" layout="fill" objectFit="cover" />
        </div>
        <div className="image">
          <Image src={Img5} alt="Image 5" layout="fill" objectFit="cover" />
        </div>
        <div className="image">
          <Image src={Img6} alt="Image 6" layout="fill" objectFit="cover" />
        </div> */}
      </div>
    </div>
  );
};

export default Comp1;
