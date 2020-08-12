const BOX_BORDER = "1px solid #e6e6e6";
const WHITE_BUTTON_BORDER = "1px solid #707070";
const BORDER_RADIUS = "4px";

export default {
  //color
  bgColor: "#FAFAFA",
  whiteColor: "#FFFFFF",
  blackColor: "#262626",
  blueColor: "#2699FB",
  darkBlueColor: "#1D2475",
  blueGraColor: "#676AA1",
  grayColor: "#E2E2E2",
  lightGrayColor: "#F9F9F9",

  //shadow
  lightGrayShadow: "rgba(15, 15, 15, 0.1) 0px 0px 2px 1px;",

  //font
  font: "Jua Regular",

  //box
  popupBox: `${BOX_BORDER};
            background-color:#F9F9F9`,
  whiteBox: `border:${BOX_BORDER};
            border-radius:${BORDER_RADIUS};
            background-color:white;
           `,

  //button
  whiteButton: `background-color:#FFFFFF;
                border:${WHITE_BUTTON_BORDER};
                height: 25px;
                width:80px;  `,
  darkblueButton: `background-color:#1D2475;
                 height: 25px;
                 width:80px;`,
  xbutton: `height: 10px;
            width:10px;`,
};

// default colors, size 등등 위 두개는 예시.
