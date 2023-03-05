import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// 스타일
const Stars = styled(motion.div)`
  position: relative;
  width: 98%;
  height: 800px;
  z-index: 10;
`;

const Star = styled(motion.div)`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 20px;
  height: 20px;
  background-color: var(--yellow);
  box-shadow: 0 0 40px 10px var(--yellow);
  border-radius: 20px;

  @media screen and (max-width: 900px) {
    width: 15px;
    height: 15px;
  }
  @media screen and (max-width: 625px) {
    width: 10px;
    height: 10px;
  }
`;

// 애니메이션 Variants
const showVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

// 디폴트 함수
export default function MovingStar() {
  const mouseAnimateRef = useRef();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const onMouseMove = (e) => {
    const mouseX = e.clientX; // 마우스x좌표
    const mouseY = e.clientY; // 마우스y좌표

    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX = window.innerWidth - mouseAnimateRef.current.offsetWidth; // window 전체 width의 돔밖 width를 뺴서 현재 돔의 width를 구함
    const maxY = window.innerHeight - mouseAnimateRef.current.offsetHeight; // window 전체 Height의 돔밖 Height를 뺴서 현재 돔의 Height를 구함

    const panX = maxX * xDecimal;
    const panY = maxY * yDecimal;

    setMouseX(panX);
    setMouseY(panY);
  };
  return (
    <>
      <Stars
        initial="hidden"
        animate="visible"
        variants={showVariants}
        whileInView={{
          x: mouseX,
          y: mouseY,
        }}
        onMouseMove={(e) => onMouseMove(e)}
        ref={mouseAnimateRef}
      >
        <Star
          animate={{ opacity: [0.1, 1, 0.3, 1, 0.5, 1, 0.2, 1, 0.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          top="38px"
          left="40%"
        />
        <Star
          animate={{ opacity: [0.1, 0.5, 1, 0.5, 0.1, 0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          top="55px"
          left="79%"
        />
        <Star
          animate={{ opacity: [1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          top="77px"
          left="67%"
        />
        <Star
          animate={{ opacity: [0.5, 1, 0.5, 0.1, 0.5, 1, 0.5, 0.1] }}
          transition={{
            duration: 8.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="90px"
          left="52%"
        />
        <Star
          animate={{ opacity: [0.1, 0.3, 0.6, 1, 0.6, 0.3, 0.1] }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="100px"
          left="89%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          top="140px"
          left="65%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{
            duration: 9.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="260px"
          left="82%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="290px"
          left="64%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{
            duration: 7.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="320px"
          left="42%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          top="420px"
          left="13%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="420px"
          left="62%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          top="480px"
          left="32%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{
            duration: 7.7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="500px"
          left="91%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{
            duration: 7.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          top="520px"
          left="72%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{ duration: 11, repeat: Infinity, repeatType: "reverse" }}
          top="540px"
          left="52%"
        />
        <Star
          animate={{ opacity: [0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          top="570px"
          left="19%"
        />
      </Stars>
    </>
  );
}
