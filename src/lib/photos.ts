// Stock photos served from the Unsplash CDN (free Unsplash License, hotlinking is the recommended use).
export const PHOTOS = {
  istanbulDay: { id: 'photo-1589561454226-796a8aa89b05', alt: 'A ferry crossing the Bosphorus with the Eminönü skyline of Istanbul behind it', by: 'Engin Yapici' },
  istanbulNight: { id: 'photo-1696711551721-458511adcd86', alt: 'Istanbul at night with the lit Bosphorus Bridge', by: 'Joshua Kettle' },
  maidenTower: { id: 'photo-1636537511494-c3e558e0702b', alt: 'The Maiden Tower on the Bosphorus under an orange sunset sky', by: 'Ibrahim Uzun' },
  containersAerial: { id: 'photo-1494412519320-aa613dfb7738', alt: 'Aerial view of a colorful shipping container yard', by: 'CHUTTERSNAP' },
  ship: { id: 'photo-1605745341112-85968b19335b', alt: 'A container ship loaded with cargo at sea', by: 'Ian Taylor' },
  robotArm: { id: 'photo-1716191299980-a6e8827ba10b', alt: 'A blue industrial robot arm on a factory line', by: 'Homa Appliances' },
  laptopDark: { id: 'photo-1487017159836-4e23ece2e4cf', alt: 'A laptop on a dark wooden desk next to a white chair', by: 'Luca Bravo' },
  deskLight: { id: 'photo-1639413665566-2f75adf7b7ca', alt: 'A minimal white desk with a monitor and a plant', by: 'Teddy GR' },
  fair: { id: 'photo-1775314054195-85f31de0c944', alt: 'A busy trade fair hall with booths and visitors', by: 'Euronewsweek Media' },
  aiHands: { id: 'photo-1694903089438-bf28d4697d9a', alt: 'A robot hand and a human hand reaching toward the letters AI', by: 'Igor Omilaev' },
  laptopWarm: { id: 'photo-1625297671662-f073f2a91528', alt: 'A laptop on a warm wooden table', by: 'Justin Morgan' },
} as const;

export type PhotoKey = keyof typeof PHOTOS;

const WIDTHS = [480, 800, 1200, 1600, 2200];

export function photoUrl(id: string, w: number, h?: number, q = 72) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=${q}`;
}

/** srcset at a fixed aspect ratio (w/h). */
export function photoSrcset(id: string, ratio?: number, max = 2200) {
  return WIDTHS.filter((w) => w <= max)
    .map((w) => `${photoUrl(id, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`)
    .join(', ');
}
