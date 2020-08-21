import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
 ${reset};
 
@font-face {
    font-family:'Jua';
    src: url(${require("./Font/Jua/Jua-Regular.ttf")});
  }
  @font-face {
    font-family:'NanumGothic';
    src: url(${require("./Font/Nanum_Gothic/NanumGothic-Regular.ttf")});
  } 
   @font-face {
    font-family:'NanumMyeonjo';
    src: url(${require("./Font/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf")});
  }
 *{
     box-sizing: border-box;
 }
 body {
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.blackColor};
    }
    a {
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
    a:hover{
        text-decoration:none;
    }

`;
