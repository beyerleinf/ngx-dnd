export class DataTransferEffect {
  static COPY = new DataTransferEffect('copy');
  static LINK = new DataTransferEffect('link');
  static MOVE = new DataTransferEffect('move');
  static NONE = new DataTransferEffect('none');

  constructor(public name: string) {}
}
