import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepressthemehopedemo/",

  lang: "en-US",
  title: "Docs Demoooo",
  description: "A docs demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
