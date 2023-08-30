import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import portfolioVideo1 from '../assets/videos/portfolioVideo1.mp4';
import portfolioVideo2 from '../assets/videos/portfolioVideo2.mp4';
import portfolioVideo3 from '../assets/videos/portfolioVideo3.mp4';
import portfolioVideo4 from '../assets/videos/portfolioVideo4.mp4';
import portfolioVideo5 from '../assets/videos/portfolioVideo5.mp4';
import portfolioVideo6 from '../assets/videos/portfolioVideo6.mp4';

// 스타일
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: visible;
  margin: 100px 0;

  @media screen and (max-width: 768px) {
    height: 1380px;
  }
`;

const ForYouBusy = styled.h1`
  position: absolute;
  top: 35px;
  font-family: 'Raleway', sans-serif;
  color: #e1e3fd;
  font-size: var(--fontxl);
  z-index: 2;

  @media screen and (max-width: 1427px) {
    font-size: var(--fontlg);
  }
  @media screen and (max-width: 1024px) {
    top: 5px;
    left: 40px;
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  @media screen and (max-width: 768px) {
    font-size: var(--fontmd);
  }
`;

const PortfolioVideo1 = styled.video`
  position: absolute;
  top: 0;
  left: 0%;
  width: 60%;
  height: auto;
  z-index: 2;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: calc(60% + 150px);
  }
  @media screen and (max-width: 768px) {
    top: -60px;
    width: 150%;
  }
  @media screen and (max-width: 562px) {
    top: calc(10% - 125px);
  }
`;

const PortfolioVideo2 = styled.video`
  position: absolute;
  top: 10%;
  left: 60%;
  width: 60%;
  height: auto;
  z-index: 2;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: calc(60% + 150px);
    left: 50%;
  }
  @media screen and (max-width: 768px) {
    top: 40%;
    width: 180%;
    left: -120px;
  }
`;

const PortfolioVideo3 = styled.video`
  position: absolute;
  top: 40%;
  left: 20%;
  width: 60%;
  height: auto;
  z-index: 2;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    left: 15%;
    width: calc(60% + 150px);
  }
  @media screen and (max-width: 768px) {
    top: 43%;
    width: 180%;
    left: 60px;
  }
`;

const PortfolioVideo4 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: fill;
  z-index: 3;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    left: -170px;
    width: 180%;
  }
`;

const PortfolioVideo5 = styled.video`
  position: absolute;
  top: 60%;
  left: 60%;
  width: 60%;
  height: auto;
  z-index: 2;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: calc(60% + 150px);
  }
  @media screen and (max-width: 768px) {
    top: 65%;
    width: 180%;
    left: 22px;
  }
`;

const PortfolioVideo6 = styled.video`
  position: absolute;
  top: 22%;
  left: 55%;
  width: calc(6% + 70px);
  height: auto;
  z-index: 1;
  border-radius: 20px;
  overflow-y: visible;

  @media screen and (max-width: 1024px) {
    width: calc(6% + 60px);
    left: 47%;
  }
  @media screen and (max-width: 768px) {
    top: 108%;
    width: 230px;
    left: 22px;
  }
  @media screen and (max-width: 562px) {
    top: calc(103% - 99px);
    left: calc(70% - 110px);
    width: 183px;
  }
`;

// 디폴트 함수
export default function Videos({ windowWidth }) {
  const sectionRef = useRef(null);
  const forYouBusyRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);

  useLayoutEffect(() => {
    const elem = sectionRef.current;
    const forYouBusyElem = forYouBusyRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
    const video3Elem = videoRef3.current;
    const video4Elem = videoRef4.current;
    const video5Elem = videoRef5.current;
    const video6Elem = videoRef6.current;

    // 섹션을 고정
    gsap.to(elem, {
      scrollTrigger: {
        trigger: elem,
        start: 'top top',
        end: `bottom+=300 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    // timeline을 지나는 동안 비디오 크기 및 위치조정
    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: elem,
          start: 'top top',
          end: `bottom+=300 bottom`,
          scrub: 1,
        },
      })
      .to(video1Elem, { scale: 0.4, x: '-15%', y: '-4%' }, 'key1')
      .to(video2Elem, { scale: 0.4, x: '-13%', y: '-35%' }, 'key1')
      .to(video3Elem, { scale: 0.5, x: '-25%', y: '-1%' }, 'key1')
      .to(
        video4Elem,
        windowWidth > 768 ? { scale: 0.25, y: '-5%' } : { scale: 0.3 },
        'key1'
      )
      .to(video5Elem, { scale: 0.4, x: '-30%', y: '-20%' }, 'key1')
      .to(video6Elem, { scale: 0.8, x: '10%', y: '-70%' }, 'key1')
      .to(forYouBusyElem, { x: '25%' }, 'key1');
  }, [windowWidth]);

  return (
    <Section ref={sectionRef}>
      {/* ForYouBusy  */}
      <ForYouBusy ref={forYouBusyRef}>
        <span>Summary Portfolio Videos</span>
        <span> For You Busy</span>
      </ForYouBusy>
      {/* 페북클론 영상 */}
      <PortfolioVideo1
        ref={videoRef1}
        src={portfolioVideo1}
        type='video/mp4'
        autoPlay
        muted
        loop
      />
      {/* MYabc 영상 */}
      <PortfolioVideo2
        ref={videoRef2}
        src={portfolioVideo2}
        type='video/mp4'
        autoPlay
        muted
        loop
      />
      {/* Stillsteal 영상 */}
      <PortfolioVideo3
        ref={videoRef3}
        src={portfolioVideo3}
        type='video/mp4'
        autoPlay
        muted
        loop
      />
      {/* MyTube 영상 */}
      <PortfolioVideo4
        ref={videoRef4}
        src={portfolioVideo4}
        type='video/mp4'
        autoPlay
        muted
        loop
      />
      {/* DoorToDoor 영상 */}
      <PortfolioVideo5
        ref={videoRef5}
        src={portfolioVideo5}
        type='video/mp4'
        autoPlay
        muted
        loop
      />
      {/* MYabc RN 영상 */}
      <PortfolioVideo6
        ref={videoRef6}
        src={portfolioVideo6}
        type='video/mp4'
        autoPlay
        muted
        loop
      />
    </Section>
  );
}
