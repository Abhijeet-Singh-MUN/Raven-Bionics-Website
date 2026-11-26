export const company = {
  name: "Raven Bionics",
  description:
    "A founder-led research venture investigating spatial intelligence, adaptive representations and coordinated autonomous systems.",
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
    label: "Independent research & development",
    title: "Spatial intelligence",
    emphasis: "for autonomous systems.",
    intro:
      "We investigate how intelligent systems perceive their environments, build useful spatial memory, direct attention and adapt decisions under real resource constraints.",
    primary: "Explore our research",
    secondary: "View experiments",
  },
  problem: {
    label: "The perception problem",
    title: "Intelligence begins with perception.",
    text: "A machine observes only part of its surroundings. What information matters, which details deserve memory, and when should it observe again?",
    caption:
      "One environment, three illustrative representations. These conceptual views are not sensor-derived reconstruction.",
  },
  focus: [
    [
      "Spatial understanding",
      "Studying how partial observations become useful spatial and semantic representations in experimental environments.",
    ],
    [
      "Adaptive memory and attention",
      "Investigating which information to retain, refine or revisit under limited sensing and computation.",
    ],
    [
      "Coordinated autonomy",
      "Exploring how multiple agents share environmental context and allocate sensing effort across changing tasks.",
    ],
  ],
  demo: {
    studySlug: "adaptive-3d-reconstruction",
    label: "Research in motion",
    title: "Inside the research system.",
    text: "Our experimental multi-agent simulation connects simulated range sensing, spatial memory, semantic relationships and task-directed attention. Instrumented studies examine system performance and computational trade-offs.",
  },
  evidence: {
    label: "Experimental evidence",
    title: "From the lab.",
    text: "Controlled experiments, research notes and measured engineering trade-offs from our evolving intelligent-systems platform.",
  },
  outlook: {
    label: "Research outlook",
    title: "Beyond the current experiments.",
    applications:
      "Research into adaptive representations and coordinated intelligence may inform robotics, infrastructure analysis, scientific simulation and other dynamic systems. These are potential applications, not announced products or field deployments.",
    future:
      "We intend to investigate learned multimodal perception, predictive spatial and temporal models, resource-aware decision-making and coordination across intelligent systems. These are future research directions, not established capabilities.",
  },
  about: {
    label: "The organization",
    title: "About Raven Bionics.",
    text: "Raven Bionics is a founder-led, independent research and development venture investigating how intelligent systems perceive, represent and respond to complex environments. Current experiments focus on spatial intelligence and coordinated autonomy, with wider interests in adaptive and predictive intelligence.",
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
