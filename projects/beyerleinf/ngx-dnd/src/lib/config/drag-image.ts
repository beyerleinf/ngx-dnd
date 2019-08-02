import { isString } from '../util';

export class DragImage {
  constructor(
    public imageElement: any,
    public x_offset: number = 0,
    public y_offset: number = 0
  ) {
    if (isString(this.imageElement)) {
      const imgScr: string = this.imageElement;
      this.imageElement = new HTMLImageElement();
      this.imageElement.src = imgScr;
    }
  }
}
