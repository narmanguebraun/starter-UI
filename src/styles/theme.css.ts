import { createGlobalTheme } from "@vanilla-extract/css";
import { borderRadius, borderStyle, borderWidth } from "./tokens/border";
import { font, fontWeight } from "./tokens/font";
import { color, gradient } from "./tokens/color";
import { shadow } from "./tokens/shadow";
import { spacing } from "./tokens/spacing";

export const vars = createGlobalTheme(":root", {
  font,
  fontWeight,
  color,
  gradient,
  shadow,
  spacing,
  border: {
    style: borderStyle,
    width: borderWidth,
    radius: borderRadius,
  },
});
