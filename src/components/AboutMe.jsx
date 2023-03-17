import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import certificate from "../assets/images/certificate.jpg";
import lottieJson from "../assets/json/rocket.json";
import Lottie from "react-lottie-player";
import ScrollOut from "scroll-out";

// 스타일
const AboutMeContainer = styled.section`
  position: relative;
  left: 13%;
  width: 85vw;
  height: 800px;

  display: flex;
  font-family: "Raleway", sans-serif;
  overflow: visible;

  @media screen and (max-width: 1024px) {
    height: 700px;
  }

  @media screen and (max-width: 625px) {
    height: 600px;
  }
`;

const AboutMeMessage = styled(motion.div)`
  border-radius: 100px;
  width: 80%;
  height: 90vh;
  min-height: 480px;
  max-height: 79%;
  background-color: var(--navy);
  padding: ${({ windowHeight }) =>
    windowHeight > 597 ? "10px 80px 10px 80px" : "6px 50px"};
  letter-spacing: ${({ windowHeight }) => (windowHeight > 597 ? "5px" : "3px")};
  line-height: ${({ windowHeight }) => (windowHeight > 597 ? "40px" : "32px")};
  box-shadow: 1px 1px 10px 1px black;
  overflow-y: hidden;
  font-size: ${({ windowHeight }) => (windowHeight > 597 ? "16px" : "14px")};

  @media screen and (max-width: 1427px) {
    line-height: ${({ windowHeight }) =>
      windowHeight > 597 ? "32px" : "30px"};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${({ windowHeight }) => (windowHeight > 597 ? "14px" : "12px")};
    padding: ${({ windowHeight }) =>
      windowHeight > 597 ? "6px 50px" : "2px 50px"};
    letter-spacing: 3px;
    line-height: ${({ windowHeight }) =>
      windowHeight > 597 ? "30px" : "25px"};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ windowHeight }) => (windowHeight > 597 ? "12px" : "10px")};
    line-height: 25px;
  }

  @media screen and (max-width: 625px) {
    position: relative;
    top: 80px;
    letter-spacing: 2px;
    line-height: 23px;
    padding: 20px 40px 5px 40px;
  }

  @media screen and (max-width: 480px) {
    letter-spacing: 0px;
    line-height: 21px;
  }
`;

const Title = styled.h1`
  color: white;
  margin-top: 50px;

  @media screen and (max-width: 625px) {
    margin-top: 30px;
  }
`;

const Message = styled.h1`
  color: var(--gray);
`;

const Rocket = styled(motion.span)`
  position: absolute;
  right: calc(8% - 150px);
  width: 300px;
  height: 400px;
  overflow-y: hidden;
  cursor: pointer;
  z-index: 9999;

  @media screen and (max-width: 1024px) {
    right: calc(8% - 100px);
    width: 200px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    top: -300px;
    right: calc(50% - 100px);
  }

  @media screen and (max-width: 625px) {
    top: -160px;
    right: 0;
    left: calc(55% - 138px);
    width: 200px;
    height: 300px;
  }
`;

const CertificateImg = styled(motion.img)`
  position: absolute;
  top: 280px;
  right: calc(10% - 50px);
  width: 300px;
  height: 220px;
  border-radius: 10px;

  @media screen and (max-width: 1579px) {
    top: ${({ windowHeight }) => (windowHeight > 597 ? "400px" : "320px")};
  }

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  @media screen and (max-width: 625px) {
    top: 350px;
    right: -60px;
    width: 220px;
  }

  @media screen and (max-width: 480px) {
    width: 130px;
    height: 120px;
  }
`;

const RocketClick = styled(motion.span)`
  color: white;
  font-size: var(--fontmd);
  margin-left: 118px;
  opacity: 0.1;

  @media screen and (max-width: 1024px) {
    margin-left: 77px;
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

// 디폴트 함수
export default function AboutMe({ windowHeight }) {
  const [shoot, setShoot] = useState(false);

  useEffect(() => {
    ScrollOut({
      cssProps: {
        visibleY: true,
      },
    });
  }, []);

  return (
    <AboutMeContainer>
      {/* 내 소개 */}
      <AboutMeMessage
        initial={{ visibility: "hidden" }} // opacity는 data-scroll이 써야되서 visibility로 감춤
        animate={{ visibility: "visible" }}
        windowHeight={windowHeight}
        data-scroll
      >
        <Title>- Introduce</Title>
        <Message>
          HI I am Yeonghwan Park (John Park), I am self-taught front-developer
          who are aiming for fullstack-developer
        </Message>
        <Title>- Education</Title>
        <Message>* Robotics - Yangyeong Digital High school</Message>
        <Message>* IT Media - Shingu College (1yr)</Message>
        <Message>* Meta Front end Developer Professional Certificate</Message>
        <CertificateImg src={certificate} windowHeight={windowHeight} />
        <Title>- Contact Details</Title>
        <Message>+1 832 480 0344</Message>
        <Message>vyckd354@gmail.com</Message>
      </AboutMeMessage>

      {/* 로켓 */}
      <Rocket
        animate={
          shoot
            ? {
                rotateZ: [0, 0, 0, -90, -90, -90],
                y: [0, -200, -200, -200],
                x: [0, 0, 120, -2000],
                transition: {
                  delay: 0.2,
                  duration: 2.5,
                },
              }
            : ""
        }
      >
        <RocketClick>{!shoot ? "Click" : ""}</RocketClick>
        <Lottie
          loop
          animationData={lottieJson}
          play
          onClick={() => {
            setShoot(!shoot);
          }}
        />
      </Rocket>
    </AboutMeContainer>
  );
}
