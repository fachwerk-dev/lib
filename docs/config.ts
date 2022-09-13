type Link = {
  text: string;
  link?: string;
  children?: Link[];
};

export let sidebar: Link[] = [
  {
    text: "Get Started",
    children: [
      { text: "Vue", link: "/get-started/vite" },
      { text: "Vitepress", link: "/get-started/vitepress" },
      { text: "Petite Vue", link: "/get-started/petite-vue" },
      { text: "Vanilla JS", link: "/get-started/vanilla" },
      { text: "Node", link: "/get-started/node" },
      { text: "Deno", link: "/get-started/deno" },
    ],
  },
  {
    text: "Points functions",
    children: [
      { text: "circlepoints", link: "/utils/point/circlepoints" },
      { text: "rectpoints", link: "/utils/point/rectpoints" },
    ],
  },
  {
    text: "Gridpoints functions",
    children: [{ text: "rectgridpoints", link: "/utils/point/rectgridpoints" }],
  },
  {
    text: "Path functions",
    children: [
      { text: "circlepath", link: "/utils/path/circlepath" },
      { text: "arcpath", link: "/utils/path/arcpath" },
      { text: "rectpath", link: "/utils/path/rectpath" },
      { text: "polygonpath", link: "/utils/path/polygonpath" },
    ],
  },
  {
    text: "Gridpath functions",
    children: [{ text: "rectgridpath", link: "/utils/path/rectgridpath" }],
  },
  {
    text: "Transform functions",
    children: [
      { text: "translate", link: "/utils/transform/translate" },
      { text: "rotate", link: "/utils/transform/rotate" },
      { text: "scale", link: "/utils/transform/scale" },
      { text: "Other transforms", link: "/utils/transform/other" },
    ],
  },
  {
    text: "Array functions",
    children: [
      { text: "seq", link: "/utils/math/seq" },
      { text: "range", link: "/utils/array/range" },
    ],
  },
  {
    text: "Math functions",
    children: [
      { text: "remap", link: "/utils/math/remap" },
      { text: "random", link: "/utils/math/random" },
    ],
  },
  {
    text: "Color functions",
    children: [
      { text: "hsl", link: "/utils/color/hsl" },
      { text: "rgb", link: "/utils/color/rgb" },
    ],
  },
  {
    text: "Trig functions",
    children: [
      { text: "deg2rad", link: "/utils/trig/deg2rad" },
      { text: "rad2deg", link: "/utils/trig/rad2deg" },
      { text: "PI and TAU", link: "/utils/trig/pi-tau" },
      { text: "pol2car", link: "/utils/trig/pol2car" },
      { text: "car2pol", link: "/utils/trig/car2pol" },
    ],
  },
  {
    text: "Vue components",
    children: [
      { text: "f-slider", link: "/components/f-slider" },
      { text: "f-math", link: "/components/f-math" },
      { text: "f-svg", link: "/components/f-svg" },
    ],
  },
  {
    text: "Experimental",
    children: [
      { text: "f-mouse", link: "/components/f-mouse" },
      { text: "f-pdf", link: "/components/f-pdf" },
      { text: "f-three", link: "/components/f-three" },
      { text: "f-canvas", link: "/components/f-canvas" },
    ],
  },
  {
    text: "Development",
    children: [{ text: "TODO", link: "/todo" }],
  },
];
