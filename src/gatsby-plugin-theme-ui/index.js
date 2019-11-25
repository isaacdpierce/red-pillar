// ! When adding more properties see the Theme Spec https://theme-ui.com/theme-spec/
const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Playfair Display, serif",
    monospace: "Source Code Pro, monospace",
  },
  fontSizes: [9, 12, 14, 16, 21, 24, 33, 48, 64, 96],
  fontWeights: {
    body: 100,
    heading: 300,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    red: {
      primary: "#461212",
    },
    background: "#fff",
    grey1: "#111113",
    primary: "#698691",
    secondary: "#42555c",
    muted: "hsl(0, 0%, 91%)",
    modes: {
      dark: {
        text: "#fff",
        background: "#111113",
        primary: "#a2c5e0",
      },
    },
  },
  breakpoints: ["40em", "56em", "64em"],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
