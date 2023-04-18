import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

const darkMode = "class";

export default defineConfig({
  presets: [
    presetUno({ dark: darkMode }),
    presetAttributify({ dark: darkMode }),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    // shortcuts to multiple utilities
    "icon": "w-5 h-5 md:w-10 md:h-10",
    "md:icon": "w-6 h-6 md:w-15 md:h-15",
  },
});
