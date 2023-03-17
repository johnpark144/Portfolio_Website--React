import React, { useState } from "react";
import myPathDatas from "../assets/json/mypath.json";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import styled, { css } from "styled-components";
import { TbArrowBigDownLines } from "react-icons/tb";

// 스타일
const GradientText = css`
  background: linear-gradient(
    -45deg,
    rgba(0, 141, 99, 1) 0%,
    rgba(0, 144, 164, 1) 26%,
    rgba(0, 141, 220, 1) 51%,
    rgba(107, 102, 237, 1) 75%,
    rgba(204, 53, 187, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MyPathSection = styled(motion.section)`
  position: relative;
  left: 5%;
  width: 90%;
  height: ${({ windowHeight }) => (windowHeight >= 600 ? "100vh" : "750px")};
  margin: 200px 0;
  border-radius: 100px;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--navy);
  box-shadow: 1px 1px 10px 1px black;
  padding-left: 10px;

  @media screen and (max-width: 1024px) {
    height: 900px;
  }

  & > div {
    width: 95%;
    padding: 20px;
    overflow-y: hidden;
    ${({ overPathNumber }) => (overPathNumber ? GradientText : "")}
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1427px) {
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      padding: 10px 4px 10px 4px;
    }
  }

  & > div > h1 {
    font-size: ${({ windowHeight }) => (windowHeight >= 850 ? "30px" : "20px")};
    margin-bottom: 20px;

    @media screen and (max-width: 1427px) {
      margin-bottom: 5px;
    }
  }
`;

const MyPathContainer = styled(motion.div)`
  height: 100%;
  font-size: ${({ windowHeight }) =>
    windowHeight > 1400 ? "18px" : windowHeight > 700 ? "15px" : "14px"};
  display: flex;
  align-items: center;

  @media screen and (max-width: 1427px) {
    font-size: ${({ windowHeight }) => windowHeight > 1400 ? "17px" : "13px"};
    letter-spacing: -1px;
  }
  @media screen and (max-width: 394px) {
    line-height: 14px;
  }
`;

const Emphasized = css`
  border: 1px solid #759600c1;
  border-radius: 10px;
  padding: 10px;

  @media screen and (max-width: 1427px) {
    padding: 3px;
  }
`;

const MyPathSingle = styled(motion.div)`
  font-style: italic;
  font-weight: ${({ data }) => (isNaN(data.slice(0, 1)) ? "100" : "800")};
  margin: 4px;

  @media screen and (max-width: 1427px) {
    margin: 1px;
  }

  & > p:nth-child(1) {
    ${({ data }) => (!isNaN(data.slice(0, 1)) ? Emphasized : "")}
  }
`;

// 디폴트함수
export default function MyPath({ windowWidth, windowHeight }) {
  // 데이터 분할
  const myPathDatas1 = myPathDatas.slice(0, Math.ceil(myPathDatas.length / 2));
  const myPathDatas2 = myPathDatas.slice(
    Math.ceil(myPathDatas.length / 2),
    myPathDatas.length
  );

  // 스크롤 관련
  const { scrollY } = useScroll();
  const [currentPath, setCurrentPath] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCurrentPath(latest);
  });

  // 글씨켜지는 포인트 반응형으로 조정
  const overPathNumber =
    (windowWidth > 768 && currentPath > (windowHeight * 3200) / 1000 + 3900) ||
    (windowWidth > 627 && currentPath > (windowHeight * 1200) / 1000 + 6200) ||
    currentPath > (windowHeight * 1200) / 1000 + 6400
      ? true
      : false;

  return (
    <MyPathSection
      initial={{ opacity: 0, y: 200 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.5 },
      }}
      overPathNumber={overPathNumber}
      windowHeight={windowHeight}
      viewport={{ once: true }}
      id="mypath"
    >
      <div>
        <h1>My Path</h1>
        <MyPathContainer windowHeight={windowHeight}>
          <div>
            {/* 왼쪽 */}
            {myPathDatas1.map((data, idx) => (
              <MyPathSingle
                key={data}
                data={data}
                initial={{ visibility: "hidden" }}
                animate={
                  overPathNumber
                    ? {
                        visibility: "visible",
                        transition: {
                          delay: (Number(idx) + 3) / 20,
                        },
                      }
                    : {}
                }
              >
                <p>{data}</p>
                <p>
                  <TbArrowBigDownLines color="#808080" />
                </p>
              </MyPathSingle>
            ))}
          </div>
          <div>
            {/* 오른쪽 */}
            {myPathDatas2.map((data, idx) => (
              <MyPathSingle
                key={data}
                data={data}
                initial={{ visibility: "hidden" }}
                animate={
                  overPathNumber
                    ? {
                        visibility: "visible",
                        transition: {
                          delay: (Number(idx) + 18) / 20,
                        },
                      }
                    : {}
                }
              >
                <p>{data}</p>
                <p>
                  {myPathDatas2.length - 1 === idx ? (
                    ""
                  ) : (
                    <TbArrowBigDownLines color="#808080" />
                  )}
                </p>
              </MyPathSingle>
            ))}
          </div>
        </MyPathContainer>
      </div>
    </MyPathSection>
  );
}
