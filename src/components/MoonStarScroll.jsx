import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import styled from "styled-components";

// 스타일
const Svg = styled.svg`
  width: 100vw;
  height: 8000px;
  position: absolute;
  top: 0;
  left: 17px;
  overflow-x: hidden;

  @media screen and (max-width: 900px) {
    left: 35px;
  }
  @media screen and (max-width: 625px) {
    width: 800px;
  }
`;

// 디폴트 함수
export default function MoonStarScroll({ windowHeight }) {
  const { scrollY } = useScroll();
  const [currentPath, setCurrentPath] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // 현재 스크롤 위치 / (전체 스크롤 높이 - 윈도우창의 높이 )
    setCurrentPath(latest / (2700 - windowHeight));
  });

  return (
    <Svg
      height="20854"
      viewBox="0 0 4968 20854"
      fill="none"
      preserveAspectRatio="none"
      overflow="hidden"
    >
      <motion.path
        d="M151.929 0V2833.07C112.414 2868.9 43.4449 2966.47 83.6906 3070.07C133.998 3199.58 269.976 3182.08 305.839 3045.07C341.701 2908.07 191.278 3192.08 151.929 2865.07C120.45 2603.46 217.511 3077.41 269.976 3347.08L359.632 3401.58L319.785 3498.08L398.981 3429.08L479.672 3498.08L433.349 3401.58L526.99 3347.08L422.89 3360.08L398.981 3254.08L374.077 3360.08L272.965 3343.58L3 3730.59L97.1389 3784.59L52.809 3883.59L134.496 3810.59L211.201 3883.59L169.86 3784.59L263.501 3730.59L156.91 3743.09L134.496 3636.59L111.584 3743.09L4.99236 3729.09L3 4213.5L4982 5366.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: currentPath }}
        stroke="#fcff47"
        strokeWidth="5"
      />
    </Svg>
  );
}
