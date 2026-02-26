import { NuxtUIOptions } from "@nuxt/ui/vite";
export default <NuxtUIOptions>{
  theme: {
    colors: ["primary", "zinc", "red", "yellow", "green", "success", "error"],
  },
  // colorMode: false,
  autoImport: {
    imports: [
      "vue",
      "vue-router",
      "pinia",
      {
        "@/store": ["useStore"],
        "@unhead/vue": ["useHead"],
      },
    ],
    dts: "auto-imports.d.ts",
    vueTemplate: true,
  },
  colors: {
    primary: "primary",
    neutral: "zinc",
    error: "red",
    warning: "yellow",
  },
};
