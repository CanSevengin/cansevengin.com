// Generates a lattice of points that fall on land, used by the hero globe.
import { geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import { readFileSync, writeFileSync } from 'node:fs';
const topo = JSON.parse(readFileSync('node_modules/world-atlas/land-110m.json', 'utf8'));
const land = feature(topo, topo.objects.land);
const out = [];
const step = 1.6;
for (let lat = -58; lat <= 78; lat += step) {
  const r = Math.cos((lat * Math.PI) / 180);
  const lonStep = step / Math.max(r, 0.2);
  for (let lon = -180; lon < 180; lon += lonStep) {
    if (geoContains(land, [lon, lat])) out.push([+lon.toFixed(1), +lat.toFixed(1)]);
  }
}
writeFileSync('src/data/land-dots.json', JSON.stringify(out));
console.log(out.length, 'points');
