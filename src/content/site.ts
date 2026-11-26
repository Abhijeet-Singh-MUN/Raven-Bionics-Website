export const company = {
  name: "Raven Bionics",
  description:
    "A founder-led research venture investigating spatial intelligence, adaptive representations and coordinated autonomous systems.",
  founder: "",
  officialDetails: "",
  email: "ravenbionics@gmail.com",
  contactUrl: "mailto:ravenbionics@gmail.com",
  contactLabel: "Email Raven Bionics",
};

export const navigation = [
  { label: "Home", to: "" },
  { label: "Research", to: "research/" },
  { label: "Technology", to: "#technology" },
  { label: "About", to: "#about" },
  { label: "Contact", to: "#contact" },
];

export const home = {
  hero: {
    label: "Independent research & development",
    title: "Spatial Intelligence",
    emphasis: "for Autonomous Systems",
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
    {
      status: "Current research",
      title: "Adaptive spatial memory",
      text: "Where does another observation add detail? Our simulator stores range returns in a sparse grid and refines voxel maps around individual objects. A 3D semantic scene graph relates the objects in memory.",
    },
    {
      status: "Current research",
      title: "Attention in multi-agent systems",
      text: "Simulated agents share observations of their surroundings. A heuristic directs additional sensing toward regions of interest, so we can examine what each revisit adds to the shared map.",
    },
    {
      status: "Under investigation",
      title: "Machine learning for selective sensing",
      text: "Could a learned policy choose better places to look? We plan to compare its choices with the current heuristic under the same sensing budget and measure how much new evidence each collects.",
    },
    {
      status: "Research horizon",
      title: "World models for Physical AI",
      text: "If one robot sees a change, how might the rest of its team anticipate it? We want to study collective intelligence by asking how agents could share predictions from learned world models.",
    },
  ],
  demo: {
    studySlug: "adaptive-3d-reconstruction",
    label: "Experimental platform",
    title: "Inside the research system.",
    text: "The simulator casts range rays and derives camera detections from scene metadata. It supplies object identities and poses. Agents use the resulting spatial memory to choose where to sense next. Telemetry records the returns and computational workload of those choices.",
  },
  evidence: {
    label: "Experimental evidence",
    title: "From the lab.",
    text: "Research studies and authored notes examining spatial memory, coordinated autonomous systems, experimental methodology and measurable computational trade-offs.",
  },
  outlook: {
    label: "Research outlook",
    title: "Beyond the current experiments.",
    applications:
      "An inspection robot has limited time to revisit a structure. Which surface needs another pass? Similar questions about allocating observations arise in industrial monitoring, scientific simulation and decision support.",
    future:
      "For predictive intelligence, we want to test whether combining different kinds of sensor data can help an agent anticipate its next observation. Further work in Agentic AI would ask how a language instruction could guide a team’s sensing priorities over a longer task.",
  },
  about: {
    label: "The organization",
    title: "About Raven Bionics.",
    text: "Raven Bionics is an independent, founder-led research and development venture studying spatial intelligence for autonomous systems. We use simulation to observe what agents remember, test how they direct attention and measure the computational cost of those decisions.",
  },
  contact: {
    title: "Research inquiries",
    text: "For technical questions, research conversations or collaboration, contact us by email.",
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
  demo: {
    video: "",
    poster: "media/research/simulator-spatial-memory-2026-11-15.png",
    width: 1891,
    height: 861,
    alt: "Raven Bionics simulator showing the terrain and sensing overlays on the left and the accumulated point cloud with object relationships on the right.",
    caption:
      "Simulator capture supplied by the founder, 15 November 2026. Scene and sensing overlays at left, full-memory point-cloud view at right. Visible profile ex-incremental-parts, code v6. On-screen performance readings describe this moment in the run.",
  },
};
