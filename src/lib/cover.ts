// Deterministic generative cover art per post (seeded by slug). Accent + neutrals only.
const ACC = '#c8f031';
const INK = '#d6dce4';

function rng(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 800, H = 500;
const f = (n: number) => n.toFixed(1);

function dotWave(r: () => number) {
  const cols = 44, rows = 28, amp = 18 + r() * 30, freq = 0.12 + r() * 0.16, phase = r() * 6;
  let s = '';
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const x = 20 + i * ((W - 40) / (cols - 1));
    const base = 20 + j * ((H - 40) / (rows - 1));
    const y = base + Math.sin(i * freq + j * 0.22 + phase) * amp * (j / rows);
    const hot = Math.abs(Math.sin(i * freq + phase) * Math.cos(j * 0.3)) > 0.93;
    s += `<circle cx="${f(x)}" cy="${f(y)}" r="${hot ? 2.4 : 1.2}" fill="${hot ? ACC : INK}" opacity="${hot ? 1 : 0.18 + (j / rows) * 0.35}"/>`;
  }
  return s;
}

function rings(r: () => number) {
  const cx = W * (0.55 + r() * 0.3), cy = H * (0.3 + r() * 0.5);
  let s = '';
  for (let k = 1; k < 26; k++) {
    const rad = k * (18 + r() * 2);
    const hot = k % 7 === 3;
    s += `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(rad)}" fill="none" stroke="${hot ? ACC : INK}" stroke-width="${hot ? 1.6 : 0.8}" opacity="${hot ? 0.95 : 0.12 + 0.3 * (1 - k / 26)}" ${hot ? `stroke-dasharray="${f(4 + r() * 10)} ${f(6 + r() * 14)}"` : ''}/>`;
  }
  s += `<circle cx="${f(cx)}" cy="${f(cy)}" r="5" fill="${ACC}"/>`;
  return s;
}

function flow(r: () => number) {
  let s = '';
  const lines = 34, a = 30 + r() * 50, fr = 0.006 + r() * 0.008, ph = r() * 9;
  for (let k = 0; k < lines; k++) {
    const y0 = 20 + k * ((H - 40) / lines);
    let d = `M0 ${f(y0)}`;
    for (let x = 0; x <= W; x += 16) {
      const y = y0 + Math.sin(x * fr + ph + k * 0.18) * a * Math.sin((x / W) * Math.PI);
      d += ` L${x} ${f(y)}`;
    }
    const hot = k === Math.floor(lines * 0.62);
    s += `<path d="${d}" fill="none" stroke="${hot ? ACC : INK}" stroke-width="${hot ? 2 : 0.8}" opacity="${hot ? 1 : 0.1 + (k / lines) * 0.3}"/>`;
  }
  return s;
}

function graph(r: () => number) {
  const n = 22;
  const pts = Array.from({ length: n }, () => [60 + r() * (W - 120), 50 + r() * (H - 100)]);
  let s = '';
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]);
    if (d < 190) s += `<line x1="${f(pts[i][0])}" y1="${f(pts[i][1])}" x2="${f(pts[j][0])}" y2="${f(pts[j][1])}" stroke="${INK}" stroke-width="0.8" opacity="${f(0.35 * (1 - d / 190))}"/>`;
  }
  const hub = Math.floor(r() * n);
  for (let j = 0; j < n; j++) {
    if (j === hub) continue;
    const d = Math.hypot(pts[hub][0] - pts[j][0], pts[hub][1] - pts[j][1]);
    if (d < 260) s += `<line x1="${f(pts[hub][0])}" y1="${f(pts[hub][1])}" x2="${f(pts[j][0])}" y2="${f(pts[j][1])}" stroke="${ACC}" stroke-width="1.2" opacity="0.8"/>`;
  }
  pts.forEach((p, i) => {
    s += `<circle cx="${f(p[0])}" cy="${f(p[1])}" r="${i === hub ? 7 : 3}" fill="${i === hub ? ACC : '#0d0f12'}" stroke="${i === hub ? ACC : INK}" stroke-width="1" opacity="${i === hub ? 1 : 0.7}"/>`;
  });
  return s;
}

const KINDS = [dotWave, rings, flow, graph];

export function coverSvg(slug: string, kind?: number) {
  const r = rng(slug);
  const k = kind ?? Math.floor(r() * KINDS.length);
  const body = KINDS[k % KINDS.length](r);
  const gx = f(W * (0.2 + r() * 0.6)), gy = f(H * (0.2 + r() * 0.6));
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="g-${slug}" cx="${gx}" cy="${gy}" r="520" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a2008"/><stop offset="1" stop-color="#0b0c0e"/></radialGradient></defs><rect width="${W}" height="${H}" fill="url(#g-${slug})"/>${body}</svg>`;
}
