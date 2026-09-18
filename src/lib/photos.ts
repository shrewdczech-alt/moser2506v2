import type { ImageMetadata } from 'astro';

/**
 * Přístup k fotkám ve složce src/fotky/.
 *
 * Astro potřebuje obrázky znát už při buildu, aby z nich vyrobilo WebP
 * a varianty pro různé šířky. Načteme je tedy všechny najednou a pak
 * se na ně odkazujeme cestou relativní k src/fotky/.
 */
const all = import.meta.glob<{ default: ImageMetadata }>(
  '/src/fotky/**/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

const GALLERY_PREFIX = '/src/fotky/galerie/';

/** Vrátí fotku podle cesty, např. "sekce/loznice.jpg". */
export function getPhoto(file: string): ImageMetadata {
  const entry = all[`/src/fotky/${file}`];
  if (!entry) {
    // Radši spadnout při buildu než nasadit stránku s chybějícím obrázkem.
    throw new Error(
      `Fotka "src/fotky/${file}" neexistuje. Zkontrolujte název souboru v obsahovém souboru.`,
    );
  }
  return entry.default;
}

export interface GalleryPhoto {
  /** Název souboru včetně číselného prefixu, např. "02-obyvaci-pokoj.jpg". */
  name: string;
  image: ImageMetadata;
}

/**
 * Vrátí všechny fotky z src/fotky/galerie/ seřazené podle názvu souboru.
 * Pořadí v galerii tedy určuje číslo na začátku názvu - přidat fotku
 * znamená nahrát soubor do složky, nic víc.
 */
export function getGalleryPhotos(): GalleryPhoto[] {
  return Object.entries(all)
    .filter(([path]) => path.startsWith(GALLERY_PREFIX))
    .sort(([a], [b]) => a.localeCompare(b, 'cs'))
    .map(([path, mod]) => ({
      name: path.slice(GALLERY_PREFIX.length),
      image: mod.default,
    }));
}
