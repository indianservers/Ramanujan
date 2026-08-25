import { writeFileSync } from "node:fs";
import { allPublicRoutes } from "../app/data/archive";

const base = "https://ramanujan-discoveries.sai355897.chatgpt.site";
const routes = [...new Set(allPublicRoutes)].sort((a, b) => a.localeCompare(b));
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${base}${route === "/" ? "/" : route}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

writeFileSync("public/sitemap.xml", xml);
