import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Product Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../../src/css/font/Product Sans Bold Italic.ttf'), url( ../../src/css/font/Product Sans Bold Italic.ttf), url(../../src/css/font/Product Sans Bold.ttf),url(../../src/css/font/Product Sans Italic.ttf), url(../../src/css/font/Product Sans  Regular.ttf)
      
      }
      /* latin */
      @font-face {
        font-family: 'Product Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../src/css/font/Product Sans Bold Italic.ttf'), url( ../../src/css/font/Product Sans Bold Italic.ttf), url(../../src/css/font/Product Sans Bold.ttf),url(../../src/css/font/Product Sans Italic.ttf), url(../../src/css/font/Product Sans  Regular.ttf)
      }
      `}
  />
);

export default Fonts;
