import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";
import cloud3 from "../assets/images/cloud3.png";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/json/airplane.json";

// 스타일
const CloudAirplainContainer = styled.section`
  position: relative;
  width: 100%;
  height: 650px;
  overflow: visible;
`;

const Img1 = styled.img`
  position: absolute;
  top: 20px;
  left: calc(4% - 150px);
  width: calc(30vw + 190px);
`;

const Img2 = styled.img`
  position: absolute;
  top: 60px;
  left: calc(63% - 20px);
  width: calc(30vw + 190px);
`;

const Img3 = styled.img`
  position: absolute;
  top: 130px;
  left: calc(36% - 100px);
  width: calc(30vw + 190px);
`;

const Img4 = styled.img`
  position: absolute;
  top: 420px;
  left: calc(36% - 30px);
  width: calc(30vw + 190px);
  z-index: 10;
`;

const Img5 = styled.img`
  position: absolute;
  top: 350px;
  left: calc(63% - 100px);
  width: calc(30vw + 190px);
  z-index: 10;
`;

const Img6 = styled.img`
  position: absolute;
  top: 300px;
  left: calc(3% - 100px);
  width: calc(30vw + 190px);
  z-index: 10;
`;

const Airplain = styled(motion.span)`
  position: absolute;
  top: 200px;
  left: 0px;
  width: calc(20vw + 100px);
  overflow-y: hidden;
  z-index: 5;
`;

// 디폴트 함수
export default function CloudAirplain() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const ImgRef1 = useRef(null);
  const ImgRef2 = useRef(null);
  const ImgRef3 = useRef(null);
  const ImgRef4 = useRef(null);
  const ImgRef5 = useRef(null);
  const ImgRef6 = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top-=250 top",
          end: "bottom-=680 top",
          scrub: 5,
        },
      })
      .fromTo(
        ImgRef1.current,
        { x: "-10%", y: "50%" },
        { x: "10%", y: "-20%" },
        "key1"
      )
      .fromTo(
        ImgRef2.current,
        { x: "20%", y: "60%" },
        { x: "-20%", y: "-30%" },
        "key1"
      )
      .fromTo(
        ImgRef3.current,
        { x: 0, y: "70%" },
        { x: "10%", y: "-10%" },
        "key1"
      )
      .fromTo(
        ImgRef4.current,
        { x: "23%", y: "140%" },
        { x: "-20%", y: "-100%" },
        "key1"
      )
      .fromTo(
        ImgRef5.current,
        { x: "-10%", y: "200%" },
        { x: "-10%", y: "-110%" },
        "key1"
      )
      .fromTo(
        ImgRef6.current,
        { x: "10%", y: "160%" },
        { x: "10%", y: "-90%" },
        "key1"
      );

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <CloudAirplainContainer ref={containerRef}>
      {/* 구름 */}
      <Img1 ref={ImgRef1} src={cloud1} />
      <Img2 ref={ImgRef2} src={cloud2} />
      <Img3 ref={ImgRef3} src={cloud3} />
      <Img4 ref={ImgRef4} src={cloud1} />
      <Img5 ref={ImgRef5} src={cloud3} />
      <Img6 ref={ImgRef6} src={cloud2} />
      {/* 비행기 */}
      <Airplain
        initial={{ x: -450 }}
        animate={{ x: "102vw" }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        <Lottie loop animationData={lottieJson} play />
      </Airplain>
    </CloudAirplainContainer>
  );
}
