import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
*,*::before,*::after{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* outline: 1px solid red !important;  // 전체 프레임 생성 테스트용 */
}

html, body { 
  max-width: 100%;
  overflow-x: hidden; 
  -webkit-box-sizing: border-box; 
  -moz-box-sizing: border-box; 
  box-sizing: border-box; 
}

/* 스크롤 전체 */
::-webkit-scrollbar {
  width: 20px;
  background: rgba(var(--navyRgba), 0.3);
}

/* 스크롤 Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #0a1c3f;
  border-radius: 8px;
}

/* 스크롤 thumb */
::-webkit-scrollbar-thumb {
  background: var(--navy);
  border-radius: 8px;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

b{
    color: var(--navy);
    font-size: var(--fontmd);
}

// 자주쓸것 변수에 저장
:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontxl: 2.75em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 pxs
 
  // Colors
  --navy: #0a1c3f;
  --navyRgba: 10, 28, 63;
  --gray: #535353;
  --white: #ffffff;
  --yellow: #fcff47;
  --mint: #3ADDC1;
}

/* 스크롤시 효과 */
[data-scroll] {
    opacity: calc(var(--visible-y) * var(--visible-y));
    transform: scale(calc(0.5 + calc(var(--visible-y) * 0.5)));
 } 
`

