import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import {
  SiPython,
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiFirebase,
  SiGit,
  SiGithub,
  SiTestinglibrary,
  SiJest,
  SiReactquery,
} from 'react-icons/si';

// 스타일
const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: var(--fontlg);
  text-transform: capitalize;
  font-weight: 600;
  font-family: 'Tourney', cursive;
  overflow: visible;

  & > div > p:nth-child(1) {
    position: relative;
    left: 100px;
    background-color: white;
    width: 10vw;
    text-align: center;
    border-radius: 12px;
  }

  @media screen and (max-width: 1373px) {
    font-size: var(--fontmd);

    & > div > p:nth-child(1) {
      width: 100px;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: var(--fontsm);
  }

  @media screen and (max-width: 415px) {
    font-size: var(--fontxs);
  }
`;

const TextContainer = styled.p`
  width: 80vw;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0909;
  color: white;
  border-radius: 20px;
  margin: 30px;
  padding: 5px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 75px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
    height: 60px;
    letter-spacing: -2px;
  }

  @media screen and (max-width: 480px) {
  }
`;

const TextContainer2 = styled.p`
  width: 80vw;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 20px;
  margin: 30px;
  padding: 5px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 75px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
    height: 60px;
    letter-spacing: -2px;
  }

  @media screen and (max-width: 480px) {
  }
`;

// 디폴트 함수
export default function Skills() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top-=500 top',
          end: 'bottom-=300 top',
          scrub: 1, // 부드럽게 스크러빙, 1초가 걸립니다.
        },
      })
      .fromTo(
        text1Ref.current,
        { x: '-10%', y: '40%' },
        { x: '10%', y: '-40%' },
        'key1'
      )
      .fromTo(
        text2Ref.current,
        { x: '30%', y: '80%' },
        { x: '-20%', y: '-85%' },
        'key1'
      )
      .fromTo(
        text3Ref.current,
        { x: 0, y: '-162%' },
        { x: '10%', y: '10%' },
        'key1'
      )
      .fromTo(
        text4Ref.current,
        { x: '10%', y: '400%' },
        { x: '-10%', y: '-400%' },
        'key1'
      );

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section ref={containerRef}>
      <div ref={text1Ref}>
        <p>Skills</p>
        <TextContainer>
          <span>
            JavaScript <SiJavascript color='#faf61f' />, TypeScript{' '}
            <SiTypescript color='#0066ff' />, Python{' '}
            <SiPython color='#1028ad' />, &nbsp;
          </span>
          <span>
            Django <SiDjango color='#0f7542' />, Jquery{' '}
            <SiJquery color='#2d39e6' />,
          </span>
        </TextContainer>
      </div>
      <TextContainer2 ref={text2Ref}>
        <span>
          React JS <SiReact color='#15bdff' />, Next JS{' '}
          <SiNextdotjs color='#2c2c2c' />, React Native{' '}
          <SiReact color='#15bdff' />
          ,&nbsp;
        </span>
        <span>
          Redux(TK) <SiRedux color='#6b065e' />, React Query{' '}
          <SiReactquery color='#f31515' />,
        </span>
      </TextContainer2>
      <TextContainer ref={text3Ref}>
        <span>
          Html <SiHtml5 color='#da1717' />, Css <SiCss3 color='#2e2bec' />
          ,&nbsp;
        </span>
        <span>
          Tailwind <SiTailwindcss color='#5cdfdf' />, Styled components{' '}
          <SiStyledcomponents color='#b36583' />,
        </span>
      </TextContainer>
      <TextContainer2 ref={text4Ref}>
        <span>
          RTL <SiTestinglibrary color='#af0d0d' />, Jest{' '}
          <SiJest color='#772f19' />
          ,&nbsp;
        </span>
        <span>
          Firebase <SiFirebase color='#eca011' />, Git <SiGit color='#f51c1c' />
          , Github <SiGithub color='#353535' />
        </span>
      </TextContainer2>
    </Section>
  );
}
