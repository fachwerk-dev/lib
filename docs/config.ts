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
      { text: "Slidev", link: "/get-started/slidev" },
      { text: "JS module ", link: "/get-started/esm" },
      { text: "JS global", link: "/get-started/global" },
      { text: "Node", link: "/get-started/node" },
      { text: "Deno", link: "/get-started/deno" },
    ],
  },
  {
    text: "Components",
    children: [
      { text: "f-slider", link: "/components/f-slider" },
      { text: "f-math", link: "/components/f-math" },
      { text: "f-pdf", link: "/components/f-pdf" },
    ],
  },
  {
    text: "Point utilities",
    children: [
      { text: "linepath", link: "/utils/path/linepath" },
      { text: "circlepath", link: "/utils/path/circlepath" },
    ],
  },
  {
    text: "Point utilities",
    children: [{ text: "rectpoints", link: "/utils/point/rectpoints" }],
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
