import styled from "styled-components";

export const Section1 = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 100px;
`;

export const H1 = styled.h1`
  @font-face {
    font-family: GTWalsheimPro;
    src: url(/fonts/GTWalsheimPro-CondensedBlack/GTWalsheimPro-CondensedBlack.ttf); /* IE9 Compat Modes */
    src: url(/fonts/GTWalsheimPro-CondensedBlack/GTWalsheimPro-CondensedBlack.ttf?iefix)
        format("embedded-opentype") /* IE6-IE8 */,
      url(/fonts/GTWalsheimPro-CondensedBlack/GTWalsheimPro-CondensedBlack.woff)
        format("woff") /* Super Modern Browsers */,
      url(/fonts/GTWalsheimPro-CondensedBlack/GTWalsheimPro-CondensedBlack.woff2)
        format("woff2") /* Pretty Modern Browsers */,
      url(/fonts/GTWalsheimPro-CondensedBlack/GTWalsheimPro-CondensedBlack.ttf)
        format("truetype"); /* Safari, Android, iOS */
    font-weight: 900;
    font-style: normal;
  }

  display: flex;
  align-items: center;
  width: fit-content;
  height: inherit;
  font-family: GTWalsheimPro, "Segoe UI", sans-serif;
  font-size: 3em;
  color: gray;
  background: -webkit-linear-gradient(180deg, #0070fdff, #d50098ff, #fd2828);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
