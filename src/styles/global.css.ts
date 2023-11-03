import {
  globalStyle,
  globalFontFace,
  style as resetStyles,
} from "@vanilla-extract/css";
import { vars } from "./theme.css";

/* RESET */

globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video",
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
  }
);

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  }
);

globalStyle(`body`, {
  lineHeight: 1,
});

globalStyle(`ol, ul`, {
  listStyle: "none",
});

globalStyle(`blockquote, q`, {
  quotes: "none",
});

globalStyle(`blockquote:before blockquote:after, q:before, q:after`, {
  content: "",
});

globalStyle(`table`, {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

globalStyle(`*`, {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  verticalAlign: "baseline",
});

globalFontFace("Inter", {
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "block",
  src: "~/shared/assets/fonts/inter-roman.latin.var.woff2",
});

globalFontFace("JetBrains Mono", {
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "block",
  src: "~/shared/assets/fonts/JetBrainsMono[wght].ttf",
});

export const base = resetStyles({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  fontFamily: vars.font.sans,
  verticalAlign: "baseline",
  height: "100vh",
  width: "100vw",
});
