import { useState } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import PortfoliosChart from "./PortfoliosChart";
import PortfoliosTools from "./PortfoliosTools";
import portfolioDatas from "../assets/json/portfolio.json";
import { SlClose } from "react-icons/sl";
import { BsGithub, BsLink } from "react-icons/bs";

//  스타일
const PortfoliosContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Raleway", sans-serif;
  overflow: visible;

  & > h1 {
    font-size: var(--fontxl);
    height: 70px;
    margin: 30px;

    @media screen and (max-width: 1024px) {
      font-size: var(--fontlg);
    }

    @media screen and (max-width: 768px) {
      font-size: var(--fontmd);
      height: 50px;
      margin: 20px;
    }
  }
`;

const RowReverse = css`
  flex-direction: row-reverse;
`;

const Portfolio = styled(motion.div)`
  border: 1px black solid;
  width: 80%;
  height: 300px;
  margin: 5px;
  display: flex;
  background-color: rgba(var(--navyRgba), 0.4);
  padding: 20px 80px 20px 80px;
  box-shadow: 1px 1px 10px 1px black;
  line-height: 70px;
  overflow-y: hidden;
  z-index: 9999;

  ${({ layoutId }) => (Number(layoutId) % 2 === 0 ? RowReverse : "")}

  & > span:nth-child(1) {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }
  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 600px;
    padding: 10px 30px 10px 30px;
    overflow-y: ${({ selected }) => (selected ? "auto" : "none")};

    & > span:nth-child(1) {
      width: 100%;
      height: 55%;
    }
    & > span:nth-child(2) {
      width: 100%;
      height: 45%;
    }
  }

  @media screen and (max-width: 625px) {
    padding: 30px 10px;
    overflow-y: hidden;
  }
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: var(--fontxl);
  overflow: visible;
  height: 80px;
  line-height: 50px;

  @media screen and (max-width: 1427px) {
    font-size: var(--fontlg);
  }
  @media screen and (max-width: 1024px) {
    line-height: 30px;
    font-size: var(--fontmd);
  }
  @media screen and (max-width: 625px) {
    font-size: var(--fontsm);
  }

  & > p:nth-child(1) {
    overflow: visible;
  }
  & > p:nth-child(2) {
    font-size: 14px;
    color: #dddd86;
  }
`;

const Tools = styled(motion.h3)`
  text-align: center;
  font-size: var(--fontmd);
  position: relative;
  overflow: visible;
  height: 50px;

  @media screen and (max-width: 1427px) {
    font-size: var(--fontsm);
    line-height: 20px;
    margin-top: 10px;
    margin-bottom: -10px;
  }
  @media screen and (max-width: 1024px) {
    font-size: var(--fontxs);
  }
`;

const Contents = styled(motion.h3)`
  background-color: rgba(var(--navyRgba), 0.4);
  width: 88%;
  height: 400px;
  line-height: 40px;
  font-size: var(--fontmd);
  border-radius: 20px 0px 0px 20px;
  padding: 0 30px 0 30px;
  margin: 20px;
  position: relative;

  @media screen and (max-width: 1427px) {
    font-size: var(--fontsm);
    margin: 5px;
    line-height: 30px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 15px;
    font-size: 14px;
    height: 600px;
    line-height: 20px;
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`;

const ImgWebsite = styled(motion.span)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }
`;

const Img = styled(motion.img)`
  width: 500px;
  height: 350px;

  @media screen and (max-width: 1427px) {
    width: 350px;
    height: 250px;
  }
  @media screen and (max-width: 1024px) {
    width: 260px;
    height: 180px;
  }
  @media screen and (max-width: 625px) {
    width: 260px;
    height: 130px;
  }
`;

const WebsiteLink = styled(motion.div)`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  overflow: visible;

  @media screen and (max-width: 1024px) {
    width: 170px;
    height: 50px;
    font-size: 14px;
  }

  & > a {
    font-weight: 800;
    width: 100px;
    background-color: #c0c0c0;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    overflow: visible;
    text-decoration: none;
    color: black;
  }
`;

const Closebtn = styled(SlClose)`
  position: absolute;
  top: 10;
  right: 0;
  width: 100px;
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    right: 5px;
  }
`;

// 디폴트 함수
export default function Portfolios({ windowHeight }) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    // 전체 포트폴리오
    <PortfoliosContainer>
      <h1>My Portfolios</h1>
      {portfolioDatas.map((data) => {
        let selected = selectedId === data.id; // 클릭누르면 selected = true
        return (
          // 싱글 포트폴리오
          <Portfolio
            key={data.id}
            layoutId={data.id}
            onClick={() => {
              !selected && setSelectedId(data.id);
            }}
            initial={{ opacity: 0, x: Number(data.id) % 2 === 0 ? -200 : 200 }}
            whileInView={
              selected
                ? {
                    position: "relative",
                    top: 0,
                    zIndex: 99999,
                    backgroundColor: "#81aec9",
                    width: "85%",
                    height: "88vh",
                    opacity: 1,
                    x: 0,
                    lineHeight: "50px",
                    transition: { duration: 0.5 },
                  }
                : {
                    opacity: 1,
                    x: 0,
                    height: "41vh",
                    cursor: "pointer",
                  }
            }
            whileHover={
              selected || {
                rotateX: 10,
                rotateZ: -1,
                transition: { duration: 0.5 },
              }
            }
            viewport={{ once: true }}
            selected={selected}
          >
            <span style={selected ? { height: "50vw" } : {}}>
              {/* 타이틀 */}
              <Title
                whileInView={
                  !selected
                    ? {
                        scale: [1, 1.3, 1],
                        transition: { delay: 0.3, duration: 1 },
                      }
                    : {
                        fontSize: "31px",
                      }
                }
                viewport={{ once: true }}
              >
                <p>{data.title}</p>
                <p>LoginMust? : {data.loginMust}</p>
              </Title>
              {/* 사용한 기술 */}
              <Tools>
                <b>Tools</b> :
                {data.tools
                  .slice(0, selected ? data.tools.length : 7) // 미리보기: 7개만, 클릭한경우: 전체
                  .map((tool, idx) => (
                    <PortfoliosTools
                      key={tool}
                      tool={tool}
                      idx={idx}
                      selected={selected}
                    />
                  ))}{" "}
                etc...
              </Tools>
              {/* 클릭한경우 상세내용 */}
              {selected ? (
                <Contents>
                  <br />
                  {/* description  */}
                  <b>Description</b> :{data?.description} <br />
                  <br />
                  {/* Function */}
                  <b>Function</b> :
                  {data?.function?.map((func) => (
                    <>
                      <br />
                      {func}
                    </>
                  )) || " X"}{" "}
                  <br />
                  <br />
                  {/* Name Why  */}
                  <b>Name Why?</b> :{data?.nameWhy || " X"} <br /> <br />
                  {/* HardPart  */}
                  <b>Hard Part</b> :<br />
                  {data?.hardPart?.map((hardPart, idx) => (
                    <>
                      <span style={{ color: "#990a0a" }}> {idx + 1} -</span>{" "}
                      {hardPart}
                      <br />
                    </>
                  ))}{" "}
                  <br />
                  {/* Things To Fix  */}
                  <b>Things To Fix</b> :{data?.thingsToFix} <br />
                </Contents>
              ) : (
                ""
              )}
              {/* 차트 */}
              <PortfoliosChart
                ratio={data.ratio}
                selected={selected}
                idea_clone={data.idea_clone}
                windowHeight={windowHeight}
              />
            </span>
            {/* 이미지, 링크 */}
            <ImgWebsite
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.8 },
              }}
              viewport={{ once: true }}
            >
              {/* 이미지 */}
              <Img src={data.cover} />
              {selected ? (
                <WebsiteLink>
                  {/* 웹사이트 링크 */}
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    href={data.url}
                    style={
                      !data.url
                        ? { pointerEvents: "none", color: "#999999" }
                        : {}
                    }
                    target="_blank"
                  >
                    Website <BsLink />
                  </motion.a>
                  {/* 깃허브 */}
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    href={data.githubUrl}
                    target="_blank"
                  >
                    Github <BsGithub />
                  </motion.a>
                </WebsiteLink>
              ) : (
                ""
              )}
            </ImgWebsite>
            {/* 닫기 버튼 */}
            {selected ? (
              <Closebtn
                onClick={() => {
                  setSelectedId(null);
                }}
              />
            ) : (
              ""
            )}
          </Portfolio>
        );
      })}
    </PortfoliosContainer>
  );
}
