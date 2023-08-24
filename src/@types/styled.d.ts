import "styled-components";
import { defaultTheme } from "../styles/theme/defaultThemes";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface defaultTheme extends ThemeType {}
}
