import { useLayoutEffect, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import { Model } from "../assets/3d/Desktop_computer";
import { Canvas } from "@react-three/fiber";
import { MdPhoneAndroid, MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

// 스타일
const Section = styled.section`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
  font-size: var(--fontlg);
  text-transform: capitalize;
  font-weight: 600;
  font-family: "Tourney", cursive;
  color: #ffffff;
  overflow: visible;
  opacity: 0;

  @media screen and (max-width: 1427px) {
    font-size: var(--fontmd);
    margin: 100px 0;
  }
  @media screen and (max-width: 1024px) {
    font-size: var(--fontsm);
  }
  @media screen and (max-width: 625px) {
    font-size: var(--fontssm);
  }

  & > h1 {
    width: 400px;
    height: 50px;
    background-color: var(--navy);
    border-radius: 20px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    overflow-y: hidden;
    box-shadow: 1px 1px 10px 1px black;
    z-index: 9999;

    @media screen and (max-width: 1427px) {
      width: 350px;
      height: 30px;
    }
    @media screen and (max-width: 768px) {
      width: 250px;
      height: 20px;
    }
  }
`;

const Contents = styled.div`
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  & > div:nth-child(2) {
    overflow-y: hidden;

    @media screen and (max-width: 768px) {
      margin-left: -200px;
      overflow: visible;
    }
  }
`;

const MyInfo = styled.div`
  width: 400px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--navy);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 1px 1px 10px 1px black;
  font-family: "Raleway", sans-serif;
  font-size: 23px;
  margin: 20px;
  z-index: 99;
  overflow-y: visible;

  @media screen and (max-width: 1024px) {
    width: 300px;
    padding: 20px;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 200px;
    height: 100px;
  }
  @media screen and (max-width: 480px) {
    position: relative;
    left: 18px;
    font-size: 12px;
    width: 170px;
    height: 70px;
  }
`;

const Form = styled.form`
  width: 600px;
  height: 600px;
  background-color: var(--navy);
  border-radius: 20px;
  padding: 30px;
  line-height: 50px;
  box-shadow: 1px 1px 10px 1px black;
  z-index: 999;

  @media screen and (max-width: 1427px) {
    width: 400px;
    height: 400px;
    padding: 20px;
  }
  @media screen and (max-width: 625px) {
    width: 350px;
  }

  & > div {
    display: flex;
    align-items: flex-start;
  }

  & > div > input {
    width: 50%;
    height: 20px;
    border-radius: 20px;
    margin: 10px;
    padding: 10px 15px;
    font-size: 20px;
    &:focus {
      outline: none;
    }

    @media screen and (max-width: 1427px) {
      font-size: 18px;
      height: 15px;
      width: 58%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 625px) {
      font-size: 14px;
    }
  }

  & > div > textarea {
    width: 50%;
    height: 300px;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 20px;
    resize: none;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 1427px) {
      height: 150px;
      width: 60%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 625px) {
      font-size: 14px;
    }
  }

  & > input {
    background-color: #000000;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    font-size: 20px;
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    letter-spacing: 5px;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 100px;
      height: 38px;
      font-size: 16px;
      letter-spacing: 3px;
    }
  }
`;

const Computer = styled.div`
  width: 450px;
  height: 450px;
  position: absolute;
  top: 300px;
  left: 57vw;
  overflow-y: visible;
  z-index: 99999;

  @media screen and (max-width: 1427px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 768px) {
    top: 10px;
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 625px) {
    left: 53vw;
    top: 80px;
    width: 200px;
    height: 200px;
  }
`;

// 디폴트 함수
export default function ContactMe({ windowWidth, windowHeight }) {
  const sectionRef = useRef(null);
  const contactMeRef = useRef(null);
  const formRef = useRef(null);
  const myInfoRef = useRef(null);
  const computerRef = useRef(null);
  const [timelineValue, setTimelineValue] = useState(0);

  // 윈도우창 크기에 따른 스크롤 시작 값
  useEffect(() => {
  let tlValue
  if (windowWidth > 1024) {
      tlValue =
      windowHeight > 1100
        ? 300
        : windowHeight > 800
        ? -100
        : windowHeight > 550
        ? -500
        : -900;
  } else if (windowWidth > 625) {
    tlValue = windowHeight > 675 ? -2000 : windowHeight > 550 ? -1800 : -2100;
  } else {
    tlValue = null;
  }
    setTimelineValue(tlValue)
  }, [windowWidth, windowHeight]);

  // 스크롤
  useLayoutEffect(() => {
    if(timelineValue !== null){
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top+=${timelineValue} top`,
          end: `top+=${timelineValue + 400} top`,
          invalidateOnRefresh: true,
        },
      })
      .fromTo(sectionRef.current, { y: "200px" }, { y: 0, opacity: 1 });
    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top+=${timelineValue + 800} top`,
          end: `top+=${timelineValue + 1900} top`,
          invalidateOnRefresh: true,
          scrub: 1,
        },
      })
      .fromTo(sectionRef.current, { y: 0 }, { y: "2800px" }, "key1")
      .fromTo(
        contactMeRef.current,
        { y: 0 },
        windowWidth > 768
          ? { y: "400px", rotateZ: 90 }
          : { y: "500px", rotateZ: 90 },
        "key1"
      )
      .fromTo(formRef.current, { x: 0 }, { x: "20vw" }, "key1")
      .fromTo(
        myInfoRef.current,
        { x: 0 },
        windowWidth > 768
          ? { x: "-300px", y: "300px", rotateZ: 90 }
          : { x: "100px", y: "400px", rotateZ: -90 },
        "key1"
      )
      .fromTo(
        computerRef.current,
        { x: 0 },
        windowWidth > 768
          ? { x: "-300px", y: "-300px" }
          : { x: "-300px", y: "300px" },
        "key1"
      );

    return () => {
      if (t1) t1.kill();
      if (t2) t2.kill();
    };
  } else{
    sectionRef.current.style.opacity = 1;
  }
  }, [timelineValue]);

  // 이메일 보내는 함수
  const sendEmail = (e) => {
    e.preventDefault();
    let elements = gsap.utils.selector(formRef);
    const arr = elements("div").filter((el) => el.children[1].value.length > 0); // 양식이 채워진 부분만 포함한 배열을 만듬

    // 하나라도 빠져있으면 메일을 보내지않음
    if (arr.length === 4) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        (result) => {
          alert("Your Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert(
            `Failed to send the massage, Because of following reason --> ${error}`
          );
        }
      );
    } else {
      alert("Please fill out forms without missing");
    }
  };

  return (
    <Section ref={sectionRef}>
      <h1 ref={contactMeRef}>Contact Me</h1>
      <Contents>
        {/* Email Form */}
        <Form ref={formRef} onSubmit={sendEmail}>
          <div>
            <label>Name : </label>
            <input type="text" name="name" placeholder="ex) Alex" />
          </div>
          <div>
            <label>Email : </label>
            <input
              type="email"
              name="email"
              placeholder="ex) abc123@gmail.com"
            />
          </div>
          <div>
            <label>Subject : </label>
            <input
              type="text"
              name="subject"
              placeholder="ex) What's up Yeonghwan!"
            />
          </div>
          <div>
            <label>Message : </label>
            <textarea name="message" placeholder="ex) I want to hire you" />
          </div>
          <motion.input
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            type="submit"
            value="Submit"
          />
        </Form>
        <div>
          {/* 연락처 및 깃허브*/}
          <MyInfo ref={myInfoRef}>
            <h3>
              <MdEmail /> vyckd354@gmail.com
            </h3>
            <h3>
              <MdPhoneAndroid /> +1 832-480-0344
            </h3>
            <h3>
              <SiGithub /> johnpark144
            </h3>
          </MyInfo>
          {/* 3D 컴퓨터 */}
          <Computer ref={computerRef}>
            <Canvas camera={{ fov: 13, position: [0, 1, 5] }}>
              <ambientLight intensity={0.3} />
              <Model sectionRef={sectionRef} timelineValue={timelineValue} />
            </Canvas>
          </Computer>
        </div>
      </Contents>
    </Section>
  );
}
