export type Study = {
  slug: string;
  resultsTable?: boolean;
  title: string;
  category: string;
  date: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  figure: { src: string; alt: string; caption: string };
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
    title: "Adaptive 3D Reconstruction & Spatial Attention",
    category: "Experiment 05",
    date: "18 November 2026",
    summary:
      "How can a machine decide where to look again? Our simulation links range observations, object memory and heuristic attention to study that decision.",
    figure: {
      src: "/media/research/spatial-memory.webp",
      alt: "Two views of the same box. Seeded points cover its near face on the left. The simulator’s object memory represents this face as individual occupied or mixed voxels on the right.",
      caption:
        "A controlled simulator fixture. The left view shows 2,048 initial returns on one face of a box. The right shows 1,728 surface or mixed leaf cells after repeated observations. Both views use the same projection.",
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
        heading: "Reading the figure",
        paragraphs: [
          "To inspect the representation in isolation, we replayed a deterministic object fixture against the simulator’s spatial memory implementation. It generates returns on a single face of a 36-unit cube, then revisits one point. The final tree contains 35,938 allocated cells, including internal nodes and unobserved siblings. Only the 1,728 surface or mixed leaves are drawn.",
          "The wireframe marks the known fixture dimensions. The visible gaps between observed regions show why allocation counts alone cannot tell us how much of an object has been observed.",
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
    category: "Performance study",
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
];
