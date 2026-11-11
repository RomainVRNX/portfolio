import { copyFileSync, cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = resolve(root, 'dist');
const images = join(root, 'images');
const unpublishedMedia = new Set([
  join(images, 'testhero.mp4'),
  join(images, 'travel_thumb.jpg'),
  join(images, 'DSC09957.jpg'),
  join(images, 'dr_ph3.jpg'),
  join(images, 'TREK/DSC07630.jpg'),
  join(images, 'DSC00814.jpg'),
  join(images, 'DSC00459.jpg'),
  join(images, 'BIRDS/DSC04297.jpg'),
  join(images, 'DJI_0314.jpg'),
  join(images, 'PUGLIA/DSC01214.jpg'),
  join(images, 'BIRDS/DSC08496.jpg'),
  join(images, 'PHOTO ROMAIN.jpg'),
  join(images, 'rca-army.jpg'),
  join(images, 'diving-ro.jpg'),
  join(images, 'padre.mp4'),
  join(images, 'caledo.mp4'),
]);

rmSync(output, { force: true, recursive: true });
mkdirSync(output);

const publicFiles = ['_headers', 'favicon.svg', 'robots.txt', 'sitemap.xml',
  'script.js', 'site-config.js', 'style.css'];
const pages = readdirSync(root).filter(name => name.endsWith('.html'));
for (const name of [...pages, ...publicFiles]) {
  copyFileSync(join(root, name), join(output, name));
}

cpSync(images, join(output, 'images'), {
  recursive: true,
  filter: source => !unpublishedMedia.has(source),
});
