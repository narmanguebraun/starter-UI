import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const button = style({
  border: "1px solid",
  fontSize: "1em",
  backgroundColor: vars.color.white,
  color: vars.color.black,
  fontFamily: vars.font.sans,
  borderRadius: vars.border.radius.small,
  paddingTop: vars.spacing.xsmall,
  paddingBottom: vars.spacing.xsmall,
  paddingLeft: vars.spacing.medium,
  paddingRight: vars.spacing.medium,
  cursor: "pointer",
  transition: "borderColor 0.25s",
});
