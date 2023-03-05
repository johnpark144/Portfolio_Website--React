import React from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";

// 스타일
const BallAnimatedDiv = styled(motion.div)`
  background: linear-gradient(0deg, rgba(39,108,217,1) 0%, rgba(16,6,99,1) 50%, rgba(16,6,99,1) 100%);
  position: absolute;
  top: calc(50vh - 380px);
  left: calc(50vw - 40px);
  width: 100px;
  height: 100px;
  border-radius: 100%;

  @media screen and (max-width: 1024px) {
    width: 80px;
    height: 80px;
    left: calc(50vw - 20px);
  }

  @media screen and (max-width: 625px) {
    width: 50px;
    height: 50px;
    left: calc(50vw - 10px);
  }
`;

// 애니메이션
const ballVariants = {
    visible: {
        y: [-120, -120, 340, 50, 340, 250, 340, 320, 340],
        scale: 50,
        transition: {
            y: {
                duration: 2.5,
                ease: 'easeInOut'
            },
            scale: {
                duration: 0.3,
                delay: 2.7
            },
        }
    },
}

// 디폴트 함수
export default function BallEffect() {
  return (<div style={{ position:"relative", width:"100vw", height:"100vh", overflow:"hidden" }}>
    <BallAnimatedDiv variants={ballVariants} animate="visible" />
  </div>)
}
