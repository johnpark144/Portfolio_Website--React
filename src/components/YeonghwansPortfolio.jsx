import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import yLetter from "../assets/images/Yletter.png";
import profile from "../assets/images/profile.jpg";

// 스타일
const LetterContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 7%;
  width: 100%;
  height: 400px;
  color: var(--mint);
  @media screen and (max-width: 768px) {
    height: 550px;
  }
  @media screen and (max-width: 625px) {
    & > svg {
      position: absolute;
      left: calc(20% - 50px);
    }
  }
`;

const Y_Letter = styled(motion.img)`
  position: absolute;

  @media screen and (max-width: 625px) {
    left: calc(20% - 50px);
  }
`;

const ProfileImg = styled(motion.img)`
  position: absolute;
  top: 10px;
  left: calc(70% - 120px);
  width: 300px;
  height: 300px;
  border-radius: 150px;
  z-index: 99;
  box-shadow: 0 0 10px #9ecaed;

  @media screen and (max-width: 900px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    left: 57%;
  }

  @media screen and (max-width: 625px) {
    top: 300px;
    left: calc(47% - 120px);
  }
`;

const Letter1 = styled(motion.h1)`
  position: absolute;
  font-family: "Dosis", sans-serif;
  top: 100px;
  left: 135px;
  font-size: 5rem;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 625px) {
    left: calc(55% - 70px);
  }
`;

const Letter2 = styled(motion.h1)`
  position: absolute;
  font-family: "Dosis", sans-serif;
  top: 180px;
  left: 135px;
  font-size: 5rem;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 625px) {
    top: 150px;
    left: calc(55% - 70px);
  }
`;

// 디폴트 함수
export default function YeonghwansPortfolio() {
  return (
    <LetterContainer>
      {/* Y 이미지 */}
      <Y_Letter
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        src={yLetter}
      />

      {/* Y Svg */}
      <svg width="153" height="202" viewBox="0 0 153 202" fill="none">
        <g filter="url(#filter0_i_20_3)">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5 }}
            d="M1 1H52.1109L73.6194 30.0503M1 1L65.7242 88.1109M1 1V30.0503L52.1109 103.155M103.709 1L81.1828 40.2658L73.6194 30.0503M103.709 1H152L94.7962 88.1109V186.475M103.709 1H91.036L73.6194 30.0503M94.7962 186.475H65.7242M94.7962 186.475L84.003 201H52.1109M65.7242 186.475V88.1109M65.7242 186.475L52.1109 201M65.7242 88.1109L52.1109 103.155M52.1109 103.155V201"
            stroke="#FCFF47"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_20_3"
            x="0.5"
            y="0.5"
            width="152.427"
            height="205"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_20_3"
            />
          </filter>
        </defs>
      </svg>
      {/* eonghwan's Portfolio */}
      <Letter1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 5 }}
      >
        eonghwan's
      </Letter1>
      <Letter2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 5 }}
      >
        Portfolio
      </Letter2>
      {/* 프로필 사진 */}
      <ProfileImg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 2 }}
        src={profile}
      />
    </LetterContainer>
  );
}
