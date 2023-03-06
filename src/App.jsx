import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyle"; //  GlobalStyle 전체 적용
import { useEffect, useState } from "react";
import styled from "styled-components";
import BallEffect from "./components/BallEffect";
import MoonStarScroll from "./components/MoonStarScroll";
import MovingStar from "./components/MovingStar";
import YeonghwansPortfolio from "./components/YeonghwansPortfolio";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import CloudAirplain from "./components/CloudAirplain";
import Videos from "./components/Videos";
import Portfolios from "./components/Portfolios";
import MyPath from "./components/MyPath";
import Image3d from "./components/Image3d";
import ContactMe from "./components/ContactMe";

const PortfolioContainer = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  overflow: hidden;
  width: 100%;
`;

function App() {
  const [showBallEffect, setShowBallEffect] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  });

  useEffect(() => {
    setTimeout(() => {
      setShowBallEffect(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* 전체 css */}
      <GlobalStyle />
      {showBallEffect ? (
        // 공 효과
        <BallEffect />
      ) : (
        // 포트폴리오 시작
        <PortfolioContainer
          backgroundColor={
            showBallEffect
              ? "white"
              : "linear-gradient(0deg, rgba(227,254,255,1) 0%, rgba(32,241,254,1) 33%, rgba(39,108,217,1) 71%, rgba(16,6,99,1) 100%);"
          }
        >
          {/* 영환이 포트폴리오 */}
          <YeonghwansPortfolio />
          {/* 스크롤시 달, 별 SVG */}
          <MoonStarScroll windowHeight={windowHeight} />
          {/* 반짝이는 별 */}
          <MovingStar />
          {/* About me와 로켓 */}
          <AboutMe windowHeight={windowHeight} />
          {/* 스킬 */}
          <Skills />
          {/* 구름과 비행기 */}
          <CloudAirplain />
          {/* 비디오들 */}
          <Videos />
          {/* 포트폴리오들 */}
          <Portfolios windowHeight={windowHeight} />
          {/* My path*/}
          <MyPath windowWidth={windowWidth} windowHeight={windowHeight} />
          {/* 이메일 */}
          <ContactMe windowWidth={windowWidth} windowHeight={windowHeight} />
          {/* 3D */}
          <Image3d windowWidth={windowWidth} />
        </PortfolioContainer>
      )}
    </>
  );
}

export default App;
