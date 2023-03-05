import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../assets/3d/Low_poly_island";
import { BsArrowUpCircle } from "react-icons/bs";

// 스타일
const Container = styled.section`
  width: 100vw;
  height: 800px;
  z-index: 9999;
  position: relative;
  bottom: -100px;
  overflow-y: visible;

  @media screen and (max-width: 1427px) {
    bottom: -180px;
  }
  @media screen and (max-width: 1024px) {
    bottom: -250px;
  }
  @media screen and (max-width: 625px) {
    bottom: -300px;
  }
`;

const ArrowButton = styled(motion.button)`
  position: relative;
  top: -100px;
  left: calc(50% - 20px);
  background: transparent;
  border: none;
  color: #5eddbd;
  font-size: 100px;
  cursor: pointer;

  @media screen and (max-width: 1427px) {
    top: 0px;
  }
  @media screen and (max-width: 1024px) {
    top: 100px;
  }
  @media screen and (max-width: 625px) {
    top: 300px;
    font-size: 70px;
  }
`;

// 애니메이션
const buttonVariants = {
  visible: {
    y: [0, 20],
    opacity: [0.2, 1],
    transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
  },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
  },
};

// 디폴트 함수
export default function Image3d({ windowWidth }) {
  return (
    <>
      {/* 맨위로 보내는 화살표 */}
      <ArrowButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        variants={buttonVariants}
        animate="visible"
        whileHover="hover"
      >
        <BsArrowUpCircle />
      </ArrowButton>
      {/* 3D 해변 이미지 */}
      <Container>
        <Canvas
          camera={{
            fov: 39,
            position:
              windowWidth > 768
                ? [0, 0.7, 5]
                : windowWidth > 625
                ? [3, 0.7, 7]
                : [3, 0.7, 8.5],
          }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 1, 0]} />
          <Model />
          <OrbitControls
            minPolarAngle={Math.PI / 2.9}
            maxPolarAngle={Math.PI - Math.PI / 1.92}
            enableZoom={false}
          />
        </Canvas>
      </Container>
    </>
  );
}
