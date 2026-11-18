export const company = {
  name: "Raven Bionics",
  description:
    "A founder-led robotics and AI venture researching how autonomous machines perceive, represent and interact with the physical world.",
  founder: "",
  officialDetails: "",
  email: "",
  contactUrl:
    "https://github.com/Abhijeet-Singh-MUN/Raven-Bionics-Website/issues",
  contactLabel: "Open a public inquiry on GitHub",
};

export const navigation = [
  { label: "Research", to: "research/" },
  { label: "Technology", to: "#technology" },
  { label: "About", to: "#about" },
  { label: "Contact", to: "#contact" },
];

export const home = {
  hero: {
    label: "Independent robotics research",
    title: "Spatial intelligence",
    emphasis: "for autonomous systems.",
    intro:
      "We study how autonomous machines perceive the physical world, build spatial memory and decide where to look next.",
    primary: "Explore our research",
    secondary: "View experiments",
  },
  problem: {
    label: "The perception problem",
    title: "Intelligence begins with perception.",
    text: "A machine sees only fragments of its surroundings. Which observations should it keep, how much detail does it need, and when should it look again?",
    caption:
      "One terrain, three representations. An illustration of how a scene can be described at different levels of detail.",
  },
  focus: [
    [
      "Spatial perception",
      "Interpreting partial observations from simulated range and camera sensors.",
    ],
    [
      "Adaptive memory",
      "Allocating spatial detail around objects as new evidence arrives.",
    ],
    [
      "Coordinated attention",
      "Directing sensing effort across agents with a shared view of their environment.",
    ],
  ],
  demo: {
    studySlug: "adaptive-3d-reconstruction",
    label: "Research in motion",
    title: "Inside the research system.",
    text: "Our simulation prototypes connect sensing, spatial memory and task selection. Instrumentation lets us examine what the agents retain and the computational cost of updating it.",
  },
  evidence: {
    label: "Experimental evidence",
    title: "From the lab.",
    text: "Experiments and technical notes from our ongoing work in simulation.",
  },
  outlook: {
    label: "Research outlook",
    title: "Beyond the current experiments.",
    applications:
      "Inspection, infrastructure monitoring and autonomous exploration could all benefit from machines that retain useful spatial context. These are potential applications of the research.",
    future:
      "We plan to investigate learned perception, predictive spatial models and parameter tuning, and to examine how shared representations behave across robotic embodiments.",
  },
  about: {
    label: "The organization",
    title: "About Raven Bionics.",
    text: "Raven Bionics is a founder-led, independent research and development venture. We build experimental systems to understand how machines can maintain useful models of the physical world within a finite computing budget.",
  },
  contact: {
    title: "Research inquiries",
    text: "For engineering questions and research collaboration, reach us through the project repository.",
  },
};

export const media = {
  raven: {
    src: "media/raven/hero.webp",
    small: "media/raven/hero-small.webp",
    alt: "A black raven in profile, its eye and layered feathers catching the light.",
    eye: [73.31, 25.39],
    eyeDetail: "",
  },
  world: [
    {
      label: "Environment",
      src: "media/world/world.svg",
      alt: "Illustrated terrain with a field station, trees and rocky slopes.",
    },
    {
      label: "Structure",
      src: "media/world/structure.svg",
      alt: "Structural lines trace the terrain and station from the same viewpoint.",
    },
    {
      label: "Observations",
      src: "media/world/samples.svg",
      alt: "Sparse samples mark selected surfaces of the same illustrative landscape.",
    },
  ],
  demo: { video: "", poster: "", alt: "", caption: "" },
};
