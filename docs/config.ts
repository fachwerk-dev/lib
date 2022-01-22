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
    ],
  },
  {
    text: "Experimental",
    children: [
      { text: "f-pdf", link: "/components/f-pdf" },
      { text: "f-three", link: "/components/f-three" },
      { text: "f-canvas", link: "/components/f-canvas" },
    ],
  },
  {
    text: "Point utilities",
    children: [
      { text: "rectpoints", link: "/utils/point/rectpoints" },
      { text: "polarpoints", link: "/utils/point/polarpoints" },
    ],
  },
  {
    text: "Path utilities",
    children: [
      { text: "polygonpath", link: "/utils/path/polygonpath" },
      { text: "circlepath", link: "/utils/path/circlepath" },
    ],
  },
  {
    text: "Trig utilities",
    children: [
      { text: "deg2rad", link: "/utils/trig/deg2rad" },
      { text: "rad2deg", link: "/utils/trig/rad2deg" },
      { text: "pol2car", link: "/utils/trig/pol2car" },
      { text: "car2pol", link: "/utils/trig/car2pol" },
      { text: "PI and TAU", link: "/utils/trig/pi-tau" },
    ],
  },
  {
    text: "Array utilities",
    children: [{ text: "range", link: "/utils/array/range" }],
  },
  {
    text: "Color utilities",
    children: [{ text: "hsl", link: "/utils/color/hsl" }],
  },
];
