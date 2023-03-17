import { motion } from "framer-motion";
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
  SiBootstrap,
  SiVite,
  SiMysql,
  SiTestinglibrary,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// 디폴트 함수
export default function PortfoliosTools({ tool, idx, selected }) {
  return (
    <motion.span
      initial={!selected && { opacity: 0.5 }}
      whileInView={
        selected
          ? { fontSize: "12px" }
          : {
              opacity: 1,
              margin: "2px",
              letterSpacing: "1px",
              fontSize: ["10px", "45px", "25px"],
            }
      } // 클릭된경우 기본 사이즈, 아닌경우 애니메이션
      transition={!selected && { delay: idx / 5, duration: 1 }}
      viewport={{ once: true }}
    >
      {tool === "Python" ? (
        <SiPython color="#1028ad" />
      ) : tool === "Django" ? (
        <SiDjango color="#0f7542" />
      ) : tool === "JavaScript" ? (
        <SiJavascript color="#faf61f" />
      ) : tool === "TypeScript" ? (
        <SiTypescript color="#0066ff" />
      ) : tool === "Jquery" ? (
        <SiJquery color="#2d39e6" />
      ) : tool === "React" ? (
        <SiReact color="#15bdff" />
      ) : tool === "Redux(toolkit)" ? (
        <SiRedux color="#6b065e" />
      ) : tool === "Reactquery" ? (
        <TbBrandReactNative color="#f31515" />
      ) : tool === "Next JS" ? (
        <SiNextdotjs color="#2c2c2c" />
      ) : tool === "Html" ? (
        <SiHtml5 color="#da1717" />
      ) : tool === "CSS" ? (
        <SiCss3 color="#2e2bec" />
      ) : tool === "Tailwind" ? (
        <SiTailwindcss color="#5cdfdf" />
      ) : tool === "Styled-components" ? (
        <SiStyledcomponents color="#b36583" />
      ) : tool === "FireBase" ? (
        <SiFirebase color="#eca011" />
      ) : tool === "Bootstrap" ? (
        <SiBootstrap color="#810f81" />
      ) : tool === "Vite" ? (
        <SiVite color="#c2a60b" />
      ) : tool === "MySql" ? (
        <SiMysql color="#0a0b6b" />
      ) : tool === "RTL" ? (
        <SiTestinglibrary color="#af0d0d" />
      ) : tool === "Jest" ? (
        <SiJest color="#772f19" />
      ) : tool === "Cypress" ? (
        <SiCypress color="#4a4a4e" />
      ) : selected ? (
        tool
      ) : (
        ""
      )}
      {selected ? ", " : ""}
    </motion.span>
  );
}
