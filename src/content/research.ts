export type Study = {
  slug: string;
  resultsTable?: boolean;
  kind?: "study" | "article";
  originalUrl?: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  figure?: { src: string; alt: string; caption: string };
  sources: { label: string; url: string }[];
};

export type ResearchMetric = {
  label: string;
  before: string;
  after: string;
  unit: string;
};

// The browser measures use the common 180-second window. The final two rows
// describe a separate equal-input Node fixture with 35,938 object cells.
export const metrics: ResearchMetric[] = [
  {
    label: "Median application frame rate",
    before: "0.59",
    after: "11.51",
    unit: "FPS",
  },
  {
    label: "LiDAR ray throughput",
    before: "897",
    after: "5,080",
    unit: "rays/s",
  },
  {
    label: "Semantic observation throughput",
    before: "659",
    after: "3,812",
    unit: "observations/s",
  },
  {
    label: "Matched CPU processing time",
    before: "550.4",
    after: "6.7",
    unit: "ms",
  },
  {
    label: "Matched retained JS heap",
    before: "31.33",
    after: "44.83",
    unit: "MB",
  },
];

export const featuredFinding = {
  title: "The cost of retaining detail",
  text: "In a matched 35,938-cell fixture, the time to update 96 observations and request a graph summary fell from 550.4 to 6.7 ms. The final implementation retained about 43% more JavaScript heap.",
};

export const studies: Study[] = [
  {
    slug: "adaptive-3d-reconstruction",
    title: "How Spatial Memory Guides Selective Sensing",
    category: "Spatial intelligence",
    kind: "study",
    date: "18 November 2026",
    summary:
      "How simulated agents organize range observations into a shared spatial record and decide which areas deserve another look.",
    figure: {
      src: "/media/research/system-architecture.svg",
      alt: "Research architecture diagram linking simulated sensing, spatial representation, object relationships, attention and evaluation.",
      caption:
        "Explanatory architecture diagram, not a screenshot or reconstructed scene. The system uses simulated sensing and object metadata; controlled study measurements are described in the text.",
    },
    sections: [
      {
        heading: "Where should a system look next?",
        paragraphs: [
          "A range return provides evidence at a location. A second observation of the same surface can confirm a boundary, add detail or repeat what the system already knows. This raises a practical question for robots with limited sensing time: which regions merit another look?",
          "The prototype explores that question with simulated agents. Each agent can cast range rays and receive camera detections derived from scene metadata. The simulator supplies pose and object identity.",
        ],
      },
      {
        heading: "From a return to a spatial record",
        paragraphs: [
          "A sparse grid holds evidence in world coordinates. Sampled positions along a ray can receive free-space evidence, while its endpoint records a surface return. Object-centered voxel trees maintain local observations at multiple resolutions. A semantic graph associates evidence with simulated objects and their relationships.",
          "A heuristic attention policy can direct additional sensing toward areas of interest. Telemetry records the resulting observations and workload. This makes it possible to study the cost of additional sensing separately from the amount of new spatial evidence it produces.",
        ],
      },
      {
        heading: "From sensing to action",
        paragraphs: [
          "The architecture illustrates the information flow: simulated range rays and metadata-derived camera detections supply spatial evidence; a sparse grid, object-centered voxel structures and a scene graph organize it; attention logic chooses regions for further observation. Telemetry helps evaluate the costs and outcomes.",
          "A separate controlled replay against the actual memory implementation recorded 2,048 seed returns on a test surface and 1,728 surface or mixed leaf cells after repeated observations. These counts describe a specific fixture, not whole-environment reconstruction quality. The accompanying diagram is explanatory rather than an image of that run.",
        ],
      },
      {
        heading: "What remains open",
        paragraphs: [
          "This is an implementation study of evidence storage and sensing priorities. Geometric accuracy, pose estimation from raw sensors, learned image recognition and physical navigation performance require independent evaluation. Useful next comparisons include matched sensing budgets and known surface geometry.",
        ],
      },
    ],
    sources: [
      {
        label: "Spatial memory figure and implementation notes (text)",
        url: "/media/research/spatial-memory-notes.txt",
      },
    ],
  },
  {
    slug: "incremental-computation",
    resultsTable: true,
    title: "Incremental Computation for Spatial Memory",
    category: "Performance engineering",
    kind: "study",
    date: "9 November 2026",
    summary:
      "A comparison of seven historical implementations examines the time and memory cost of keeping a growing spatial record useful to 24 simulated agents.",
    figure: {
      src: "/media/research/application-throughput.svg",
      alt: "Median frame rates across the original Baseline and versions 1 through 6 were 0.59, 1.01, 1.07, 1.05, 1.64, 13.02 and 11.51 FPS. Range bars span four runs per version.",
      caption:
        "Application frame rate on one host. Each marker is the median of four instrumented runs over the first 180 wall-clock seconds. The vertical line spans the observed range.",
    },
    sections: [
      {
        heading: "The cost of revisiting evidence",
        paragraphs: [
          "As the spatial record grew, common queries repeatedly walked object trees, gathered candidate parts and prepared display geometry. The six successive revisions tested whether maintaining selected results as observations arrive could reduce the cost of each update.",
          "Changes included incremental candidate lists, cached bounds, maintained counters, hierarchical summaries, a broad-phase scene query and incremental point-cloud preparation.",
        ],
      },
      {
        heading: "Matched windows and matched inputs",
        paragraphs: [
          "The browser comparison used the original Baseline and six historical revisions in a 24-agent simulation. Each version ran on the same host with fixed canvas dimensions and sensor settings. Two scene seeds and two repetitions produced four records per version. The analysis used the first 180 wall-clock seconds of each record.",
          "The separate Node fixture replayed identical ordered observations against an object tree with 35,938 allocated cells. Each timed sample applied 96 observations and requested a graph summary. Matching evidence hashes and cell counts provided a check on the stored output.",
        ],
      },
      {
        heading: "Application results",
        paragraphs: [
          "Median application frame rate rose from 0.59 to 11.51 FPS between the original Baseline and v6. Over the same browser comparison, ray throughput increased from 897 to 5,080 rays per second, and semantic observation throughput from 659 to 3,812 observations per second.",
          "The largest adjacent frame-rate change occurred between v4 and v5. Version 5 recorded 13.02 FPS, and the v5 and v6 run-bootstrap intervals overlap. The browser results do not resolve a whole-application benefit from v6’s display changes.",
        ],
      },
      {
        heading: "Resource trade-offs",
        paragraphs: [
          "In the matched object fixture, median warm processing time fell from 550.4 to 6.7 milliseconds. Retained JavaScript heap after garbage collection rose from 31.33 to 44.83 MB, approximately 43% more. The retained-heap measure includes graph structures, caches and runtime effects. It excludes native and GPU allocations.",
        ],
      },
      {
        heading: "Limits of the comparison",
        paragraphs: [
          "These are workload-specific measurements from one host and one browser backend. Autonomous trajectories can diverge during browser runs, and the historical revisions include shared infrastructure changes. The study did not measure ground-truth reconstruction accuracy or physical robot performance. Longer traces still showed slowdown as spatial state accumulated.",
        ],
      },
    ],
    sources: [
      {
        label: "Measurement definitions and study provenance (text)",
        url: "/media/research/optimization-notes.txt",
      },
      {
        label: "Underpinning frame-rate observations (CSV)",
        url: "/media/research/frame-rates.csv",
      },
    ],
  },

  {
    slug: "measurable-collective-intelligence",
    kind: "article",
    category: "Research article",
    date: "7 May 2026",
    title: "Building Measurable Collective Intelligence",
    summary: "Why interpreting and measuring a swarm matters more than making a simulation look intelligent.",
    originalUrl: "https://www.linkedin.com/pulse/toward-measurable-collective-intelligence-engineering-abhijeet-singh-kgbkc",
    sections: [
      {
        heading: "From visual demonstration to experimental infrastructure",
        paragraphs: [
          "The original article documented a browser-based research platform with three to twenty-four simulated drones exploring synthetic terrain. It described a deliberate shift in emphasis: from visually convincing agent motion toward controlled observations of collective behavior.",
          "The central question was whether changes in control priorities produced measurable changes in coverage, attention to areas of interest, safety and resource use. That is more useful scientifically than concluding that coordination works because an animation appears orderly.",
        ],
      },
      {
        heading: "Interpretable control priorities",
        paragraphs: [
          "The system used four high-level policy coordinates—coverage, area-of-interest detail, risk and safety, and resource efficiency—mapped through a traceable grey-box chain into agent-level behavioral parameters. The resulting approach preserves identifiable decision pressures while leaving room for adaptive and learned components.",
          "The article also described mission presets, runtime calibration, communication constraints and structured telemetry. The purpose was to separate actual policy effects from environment-specific artifacts and visually persuasive but unmeasured claims.",
        ],
      },
      {
        heading: "What this established",
        paragraphs: [
          "This was a research-platform and experimental-design milestone, not a demonstration of real-world drone performance or emergent specialist intelligence. Stronger claims require held-out scenarios, repeatable comparisons and clearly defined measures of task success. The complete original article provides the contemporary development record.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "multi-agent-coordination",
    kind: "article",
    category: "Engineering note",
    date: "2026",
    title: "From One Simulated Agent to Twenty-Four",
    summary: "Scaling a LiDAR experiment into a coordinated swarm raised new questions about communications, shared objectives and measurable behavior.",
    originalUrl: "https://www.linkedin.com/posts/abhijeet-singh-9aa09b190_swarmintelligence-autonomoussystems-agenticai-activity-7458051412451799040-8y2D",
    sections: [
      {
        heading: "A new coordination problem",
        paragraphs: [
          "Extending a contained single-agent mapping experiment toward a multi-agent environment introduced range-limited communication, shared state and different operational pressures. Scouts, mapping agents, relays and revisits became useful ways of thinking about what a group needs to accomplish.",
          "The published update described a grey-box policy organized around coverage, detail, safety and efficiency. Those priorities were intended to make behavioral differences inspectable rather than merely impressive to watch.",
        ],
      },
      {
        heading: "The research question",
        paragraphs: [
          "Can decentralized sensing and communication constraints still produce useful, explainable collective outcomes? Answering requires telemetry, controlled conditions and meaningful comparisons. The original post records the design motivation, not an independent validation of emergent intelligence.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "semantic-spatial-representations",
    kind: "article",
    category: "Development update",
    date: "2026",
    title: "Organizing 3D Observations into Semantic Memory",
    summary: "A development update on scene graphs, simulated camera detections, range sensing and attention in a shared spatial research system.",
    originalUrl: "https://www.linkedin.com/posts/abhijeet-singh-9aa09b190_experiment-4-45-weve-achieved-the-activity-7471965737797136384-Xey5",
    sections: [
      {
        heading: "Adding relationships to geometry",
        paragraphs: [
          "An earlier development update described connecting range observations with object-level context in a 3D semantic scene graph. Simulated camera detections were introduced alongside LiDAR-style range rays so the system could represent objects, their relationships and selected observations in one research environment.",
          "The camera observations in this prototype were derived from simulator metadata, rather than from an independently evaluated vision model. That distinction matters for interpreting the current system and the next machine-learning experiments.",
        ],
      },
      {
        heading: "Perception as a measurable process",
        paragraphs: [
          "The update also introduced a perception and verification layer to inspect changes, diagnose behavior and record data for later analysis. The broader research direction concerns how useful internal representations can be built, revised and evaluated as environments change.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "adversarial-environments",
    kind: "article",
    category: "Research perspective",
    date: "2026",
    title: "Why Autonomous Systems Need Harder Tests",
    summary: "A case for varied, demanding environments that expose competing objectives before attempting to optimize a swarm.",
    originalUrl: "https://www.linkedin.com/posts/abhijeet-singh-9aa09b190_starting-to-get-close-to-current-research-activity-7458899264383991808-SFfh",
    sections: [
      {
        heading: "Testing beyond favorable conditions",
        paragraphs: [
          "An optimization method is only as informative as the situations used to evaluate it. The original research update argued that benign or repetitive environments may fail to activate the range of pressures a multi-agent controller is designed to balance.",
          "A stronger research environment should vary obstacles, objectives, resources, communication conditions and mission events to expose trade-offs between exploration, mapping quality, safety and efficiency. The published post is a motivation for richer evaluations, not evidence that the entire proposed adversarial suite has been implemented.",
        ],
      },
      {
        heading: "What would constitute good evidence?",
        paragraphs: [
          "Controlled scenario families, multiple random seeds, held-out tests and measures of both task performance and resource consumption would make optimization results more meaningful. A controller that excels only in one friendly simulation should not be presented as generally robust.",
        ],
      },
    ],
    sources: [],
  },
];
