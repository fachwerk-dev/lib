type Link = {
  text: string;
  link?: string;
  children?: Link[];
};

export let sidebar: Link[] = [
  {
    text: "Get Started",
    children: [
      { text: "Vite", link: "/get-started/vite" },
      { text: "Vitepress", link: "/get-started/vitepress" },
      { text: "JS module ", link: "/get-started/esm" },
      { text: "JS global", link: "/get-started/global" },
      { text: "Node", link: "/get-started/node" },
    ],
  },
  {
    text: "Components",
    children: [
      { text: "f-slider", link: "/components/f-slider" },
      { text: "f-math", link: "/components/f-math" },
      { text: "f-svg", link: "/components/f-svg" },
    ],
  },
  {
    text: "Point utilities",
    children: [
      { text: "circlepoint", link: "/utils/trig/circlepoint" },
      { text: "pointcircle", link: "/utils/trig/pointcircle" },
    ],
  },
  {
    text: "Points utilities",
    children: [
      { text: "circlepoints", link: "/utils/point/circlepoints" },
      { text: "rectpoints", link: "/utils/point/rectpoints" },
    ],
  },
  {
    text: "Gridpoints utilities",
    children: [{ text: "rectgridpoints", link: "/utils/point/rectgridpoints" }],
  },
  {
    text: "Path utilities",
    children: [
      { text: "circlepath", link: "/utils/path/circlepath" },
      { text: "arcpath", link: "/utils/path/arcpath" },
      { text: "rectpath", link: "/utils/path/rectpath" },
      { text: "polygonpath", link: "/utils/path/polygonpath" },
    ],
  },
  {
    text: "Gridpath utilities",
    children: [{ text: "rectgridpath", link: "/utils/path/rectgridpath" }],
  },
  {
    text: "Transform utilities",
    children: [
      { text: "translate", link: "/utils/transform/translate" },
      { text: "rotate", link: "/utils/transform/rotate" },
      { text: "scale", link: "/utils/transform/scale" },
      { text: "Other transforms", link: "/utils/transform/other" },
    ],
  },
  {
    text: "Array utilities",
    children: [
      { text: "seq", link: "/utils/math/seq" },
      { text: "range", link: "/utils/array/range" },
    ],
  },
  {
    text: "Math utilities",
    children: [
      { text: "remap", link: "/utils/math/remap" },
      { text: "random", link: "/utils/math/random" },
    ],
  },
  {
    text: "Color utilities",
    children: [
      { text: "hsl", link: "/utils/color/hsl" },
      { text: "rgb", link: "/utils/color/rgb" },
    ],
  },
  {
    text: "Trig utilities",
    children: [
      { text: "PI and TAU", link: "/utils/trig/pi-tau" },
      { text: "deg2rad", link: "/utils/trig/deg2rad" },
      { text: "rad2deg", link: "/utils/trig/rad2deg" },
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
