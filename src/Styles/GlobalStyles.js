import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
 ${reset};
 *{
     box-sizing: border-box;
 }
 body {
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.blackColor};
        -ms-overflow-style: none;
    }
    a {
        color:${(props) => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
body::-webkit-scrollbar {
display:none;
}
`;
