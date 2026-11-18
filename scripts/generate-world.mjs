// Regenerate all three conceptual illustrations with: node scripts/generate-world.mjs
// Every view uses the same camera, terrain, object placement and painter's order.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const output = fileURLToPath(
  new URL("../public/media/world/", import.meta.url),
);
mkdirSync(output, { recursive: true });

const cols = 31,
  rows = 19,
  waterLevel = 0.9;
const width = 1200,
  height = 650;
const views = ["world", "structure", "samples"];
const drawing = Object.fromEntries(views.map((view) => [view, []]));
const round = (n) => +n.toFixed(1);

function noise(x, y, k = 0) {
  const n = Math.sin(x * 113.7 + y * 311.3 + k * 47.1) * 43758.5453;
  return n - Math.floor(n);
}

function project([x, y, z]) {
  return [401 + 23.6 * x - 16.6 * y, 162 + 6.6 * x + 11.8 * y - 19 * z];
}

function path(points, close = true) {
  return (
    "M" +
    points.map((p) => p.map(round).join(" ")).join("L") +
    (close ? "Z" : "")
  );
}

function tone(rgb, factor) {
  return (
    "#" +
    rgb
      .map((n) =>
        Math.min(255, Math.max(0, Math.round(n * factor)))
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
  );
}

function sampleTriangle(points, count, seed) {
  let coords = "";
  for (let i = 0; i < count; i++) {
    let u = noise(i, seed, 7),
      v = noise(i, seed, 4);
    if (u + v > 1) {
      u = 1 - u;
      v = 1 - v;
    }
    const xy = [0, 1].map(
      (axis) =>
        points[0][axis] * (1 - u - v) +
        points[1][axis] * u +
        points[2][axis] * v,
    );
    coords += "M" + xy.map(round).join(" ") + "h.1";
  }
  return coords;
}

let seed = 1;
function surface(
  points,
  color,
  { line = "#82978b", density = 4, dot = "#b9cec0", detail = false } = {},
) {
  const projected = points.map(project);
  const d = path(projected);
  drawing.world.push(
    '<path d="' +
      d +
      '" fill="' +
      color +
      '" stroke="' +
      color +
      '" stroke-width=".55"/>',
  );
  drawing.structure.push(
    '<path d="' +
      d +
      '" fill="' +
      (detail ? "#232e2a" : "#1e2825") +
      '" stroke="' +
      line +
      '" stroke-width="' +
      (detail ? "1.0" : ".67") +
      '"/>',
  );
  let sampled = "";
  for (let i = 1; i < points.length - 1; i++)
    sampled += sampleTriangle(
      [projected[0], projected[i], projected[i + 1]],
      density,
      seed++,
    );
  // Opaque base gives the samples the same occlusion as the other renderings.
  drawing.samples.push(
    '<path d="' +
      d +
      '" fill="#182220"/><path d="' +
      sampled +
      '" stroke="' +
      dot +
      '" ' +
      'stroke-width="' +
      (detail ? "2.35" : "2") +
      '" stroke-linecap="round"/>',
  );
}

function line(points, world, structure, samples, thickness = 1) {
  const d = path(points.map(project), false);
  const colors = { world, structure, samples };
  for (const view of views) {
    if (colors[view])
      drawing[view].push(
        '<path d="' +
          d +
          '" fill="none" stroke="' +
          colors[view] +
          '" stroke-width="' +
          thickness +
          '"' +
          (view === "samples"
            ? ' stroke-dasharray="1 5" stroke-linecap="round"'
            : "") +
          "/>",
      );
  }
}

const river = (x) =>
  9.8 + 2 * Math.sin(x * 0.2 - 1) + 1.05 * Math.sin(x * 0.45 + 0.7);
const peak = (x, y, cx, cy, wx, wy, z) =>
  z * Math.exp(-(((x - cx) / wx) ** 2 + ((y - cy) / wy) ** 2));
function elevation(x, y) {
  const distance = Math.abs(y - river(x));
  const bank = Math.min(1, Math.max(0, (distance - 0.47) / 2.4));
  const mountain =
    peak(x, y, 5, 3.5, 4, 3.4, 5.4) +
    peak(x, y, 9, 2.5, 4.8, 3.2, 4.7) +
    peak(x, y, 16, 0, 5.5, 3.2, 4.0) +
    peak(x, y, 25, 4, 4.7, 3.8, 4.9) +
    peak(x, y, 4, 16, 5.6, 3.3, 3.2) +
    peak(x, y, 29, 16.8, 4.6, 4.9, 2.6);
  const variation =
    0.32 * Math.sin(x * 1.17 + y * 0.62) +
    0.21 * Math.cos(y * 1.2 - x * 0.77) +
    noise(x, y) * (0.42 + mountain * 0.115);
  const h = 0.3 + bank * (1.64 + mountain + variation);
  const station = Math.max(
    0,
    Math.min(1, (4 - Math.hypot((x - 18) * 0.8, y - 15)) / 1.5),
  );
  return h * (1 - station) + 2.08 * station;
}

function vertex(x, y) {
  return [x, y, elevation(x, y)];
}

// Clip each terrain triangle against the shared horizontal river surface.
function water(triangle) {
  const clipped = [];
  for (let i = 0; i < 3; i++) {
    const a = triangle[i],
      b = triangle[(i + 1) % 3];
    if (a[2] <= waterLevel) clipped.push([a[0], a[1], waterLevel]);
    if (a[2] < waterLevel !== b[2] < waterLevel) {
      const t = (waterLevel - a[2]) / (b[2] - a[2]);
      clipped.push([
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
        waterLevel,
      ]);
    }
  }
  if (clipped.length >= 3)
    surface(clipped, "#739390", {
      line: "#77958a",
      density: 2,
      dot: "#9bc7c1",
    });
}

function ground(triangle, x, y, k) {
  const [a, b, c] = triangle;
  const dx = k ? a[2] - b[2] : b[2] - a[2],
    dy = k ? b[2] - c[2] : c[2] - b[2];
  const h = (a[2] + b[2] + c[2]) / 3;
  const light =
    0.94 +
    Math.max(-0.35, Math.min(0.37, -dx * 0.15 - dy * 0.16)) +
    noise(x, y, k) * 0.09;
  const base =
    h > 5
      ? [137, 147, 139]
      : h > 3.8
        ? [111, 126, 114]
        : h > 1.4
          ? [92, 113, 97]
          : [126, 132, 111];
  surface(triangle, tone(base, light), {
    line: tone([118, 141, 127], 0.7 + light * 0.22),
    dot: tone([164, 190, 168], light),
    density: 4,
  });
  water(triangle);
}

function rockFace(a, b, index) {
  const down = -1.12;
  const ac = [a[0], a[1], down],
    bc = [b[0], b[1], down];
  surface([a, b, bc, ac], tone([67, 77, 74], 0.86 + noise(index, 12) * 0.22), {
    line: "#53655c",
    density: 3,
    dot: "#88978a",
  });
  for (let i = 1; i < 4; i++) {
    const ratio = i / 4;
    line(
      [
        [a[0], a[1], down + (a[2] - down) * ratio],
        [b[0], b[1], down + (b[2] - down) * ratio],
      ],
      "#59665c",
      null,
      null,
      0.6,
    );
  }
}

function pine(x, y, z, size) {
  const [px, py] = project([x, y, z]);
  const treeSeed = seed++,
    tall = size * 24,
    span = size * 6.8;
  // Form the crown from three irregular overlapping whorls. The shaded half
  // of each branch faces consistently away from the upper-left key light.
  const bark = path([
    [px + 0.65, py + 0.4],
    [px - 0.65, py + 0.4],
    [px - 0.5, py - tall * 0.48],
    [px + 0.5, py - tall * 0.48],
  ]);
  drawing.world.push('<path d="' + bark + '" fill="#4d4a3e"/>');
  for (let tier = 0; tier < 3; tier++) {
    const bottom = py - tall * (0.16 + tier * 0.19),
      radius = span * (1 - tier * 0.26);
    const top = [
      px + (noise(x, y, tier) - 0.5) * 1.7,
      py - tall * (0.68 + tier * 0.16),
    ];
    const left = [px - radius, bottom],
      right = [px + radius * 0.93, bottom - 0.5];
    const center = [px, bottom + size * 2];
    const fill = tone(
      [53, 81, 66],
      0.82 + noise(x, y, tier) * 0.27 + tier * 0.1,
    );
    const edge = tone([92, 120, 92], 1 + tier * 0.03);
    const d = path([
      top,
      right,
      [px + radius * 0.5, bottom + size],
      center,
      [px - radius * 0.45, bottom + size * 1.2],
      left,
    ]);
    drawing.world.push(
      '<path d="' +
        d +
        '" fill="' +
        fill +
        '"/><path d="' +
        path([top, center, [px - radius * 0.45, bottom + size * 1.2], left]) +
        '" fill="' +
        edge +
        '"/>',
    );
    if (tier === 0 || tier === 2)
      drawing.structure.push(
        '<path d="' +
          d +
          '" stroke="#779782" stroke-width=".8" fill="#23342b"/>',
      );
    const hits = sampleTriangle([top, left, right], 3, treeSeed + tier);
    drawing.samples.push(
      '<path d="' +
        hits +
        '" stroke="#c0d8ac" stroke-width="2.2" stroke-linecap="round"/>',
    );
  }
}

const jobs = [];
function later(depth, render) {
  jobs.push({ depth, render });
}
for (let x = 0; x < cols; x++)
  for (let y = 0; y < rows; y++) {
    const a = vertex(x, y),
      b = vertex(x + 1, y),
      c = vertex(x + 1, y + 1),
      d = vertex(x, y + 1);
    later(x + y, () => {
      // Both faces are drawn before the top so their edge meets the surface.
      if (x === cols - 1) rockFace(b, c, y);
      if (y === rows - 1) rockFace(c, d, x);
      ground([a, b, c], x, y, 0);
      ground([c, d, a], x, y, 1);
    });
    const xx = x + 0.18 + 0.62 * noise(x, y, 31),
      yy = y + 0.15 + 0.7 * noise(x, y, 22);
    const z = elevation(xx, yy),
      bank = Math.abs(yy - river(xx));
    const forest =
      noise(x, y, 6) * 0.58 +
      0.23 * Math.sin(xx * 0.74 + yy * 0.44) +
      0.19 * Math.sin(yy * 0.77 - xx * 0.4);
    if (z < 0.55 && noise(x, y, 82) > 0.7) {
      later(x + y + 0.96, () =>
        line(
          [
            [xx - 0.12, yy, waterLevel + 0.015],
            [xx + 0.2, yy + 0.04, waterLevel + 0.015],
          ],
          "#9bafa4",
          null,
          null,
          0.75,
        ),
      );
    }
    if (z > 2.6 && z < 4.8 && noise(x, y, 62) > 0.91) {
      later(x + y + 0.98, () => {
        const head = [xx - 0.06, yy, z + 0.3],
          left = [xx - 0.28, yy, z],
          near = [xx + 0.07, yy + 0.2, z],
          end = [xx + 0.24, yy - 0.1, z];
        surface([head, left, near], "#a5ada0", { detail: true, density: 1 });
        surface([head, near, end], "#768777", { detail: true, density: 1 });
      });
    }
    const nearStation =
      Math.hypot((xx - 18) * 0.82, yy - 14.6) < 4 ||
      (Math.abs(xx - 17.2) < 1.2 && yy > river(xx) - 2);
    if (z > 1.55 && z < 4.8 && bank > 1.35 && forest > 0.24 && !nearStation) {
      later(x + y + 0.99, () => pine(xx, yy, z, 0.64 + noise(x, y, 9) * 0.87));
    }
  }

// Compact field station with a pitched metal roof and a shaded window band.
function cabin(x, y, w, d, z, h) {
  const front = y + d,
    end = x + w,
    peakZ = z + h + 0.42,
    eave = z + h;
  const base = [
    [x, y, z],
    [end, y, z],
    [end, front, z],
    [x, front, z],
  ];
  const roof = base.map(([xx, yy]) => [xx, yy, eave]);
  const ridge1 = [x, y + d / 2, peakZ],
    ridge2 = [end, y + d / 2, peakZ];
  const extra = { detail: true, density: 7, line: "#b0b9a8", dot: "#ecdfb6" };
  surface([base[2], base[3], roof[3], roof[2]], "#929281", extra);
  surface([base[1], base[2], roof[2], ridge2, roof[1]], "#777d73", extra);
  for (let i = 0; i < 4; i++) {
    const left = x + w * (0.08 + i * 0.23),
      right = left + w * 0.14;
    surface(
      [
        [left, front, z + h * 0.31],
        [right, front, z + h * 0.31],
        [right, front, z + h * 0.71],
        [left, front, z + h * 0.71],
      ],
      "#344541",
      { detail: true, density: 2 },
    );
  }
  surface([roof[0], roof[1], ridge2, ridge1], "#d4d0ba", extra);
  surface([ridge1, ridge2, roof[2], roof[3]], "#b5b5a1", extra);
  for (let i = 1; i < 8; i++) {
    const xx = x + (w * i) / 8;
    line(
      [
        [xx, y + d / 2, peakZ],
        [xx, front, eave],
      ],
      "#979e90",
      null,
      null,
      0.65,
    );
  }
}
later(34.65, () => cabin(16.4, 14, 2.95, 1.28, 2.09, 1.02));
later(36.8, () => cabin(20.1, 14.15, 1.16, 0.92, 2.08, 0.71));
later(36.9, () => {
  const x = 20.9,
    y = 15.49,
    z = elevation(x, y);
  line(
    [
      [x, y, z],
      [x, y, z + 2.75],
    ],
    "#c1c7b4",
    "#ced2ba",
    "#e1dbb8",
    1.9,
  );
  line(
    [
      [x - 0.27, y, z + 2.47],
      [x + 0.27, y, z + 2.47],
    ],
    "#acb8a5",
    "#cad0b9",
    "#e1dbb8",
    1.45,
  );
});
const bx = 17,
  by = river(bx),
  bz = 1.82;
later(bx + by + 2.7, () => {
  const x = bx - 0.23,
    y = by - 1.75,
    w = 0.52,
    d = 3.5;
  surface(
    [
      [x, y, bz],
      [x + w, y, bz],
      [x + w, y + d, bz],
      [x, y + d, bz],
    ],
    "#b8ae91",
    { detail: true, density: 8, dot: "#e1d5ad" },
  );
  for (const xx of [x, x + w]) {
    line(
      [
        [xx, y, bz + 0.25],
        [xx, y + d, bz + 0.25],
      ],
      "#d9d4b5",
      "#c4c8ac",
      "#e1dbb8",
      1,
    );
    for (let j = 0; j <= 3; j++)
      line(
        [
          [xx, y + (j * d) / 3, bz],
          [xx, y + (j * d) / 3, bz + 0.25],
        ],
        "#848878",
        "#849887",
        "#c4ccad",
        1,
      );
  }
});
jobs.sort((a, b) => a.depth - b.depth).forEach((job) => job.render());

const names = {
  world: "Terrain and field station",
  structure: "Structural surface model",
  samples: "Illustrative spatial samples",
};
const surround =
  '<defs><radialGradient id="field"><stop stop-color="#283431"/><stop offset=".78" stop-color="#171f1e"/><stop offset="1" stop-color="#141b1b"/></radialGradient></defs><rect width="1200" height="650" fill="url(#field)"/>';
for (const view of views) {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
    width +
    " " +
    height +
    '"><title>' +
    names[view] +
    "</title><desc>Conceptual oblique landscape, generated from a common terrain and camera.</desc>" +
    surround +
    drawing[view].join("") +
    "</svg>";
  writeFileSync(output + view + ".svg", svg + "\n");
}
