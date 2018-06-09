export function createImage(src: string): HTMLImageElement {
  const img: HTMLImageElement = new HTMLImageElement();
  img.src = src;
  return img;
}
