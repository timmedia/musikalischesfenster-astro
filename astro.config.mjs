import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // site: "https://musikalischesfenster.ch",
  site: "https://www1.musikalischesfenster.ch",
  // site: "https://timmedia.github.io",
  // base: "/musikalischesfenster-astro",
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
});
