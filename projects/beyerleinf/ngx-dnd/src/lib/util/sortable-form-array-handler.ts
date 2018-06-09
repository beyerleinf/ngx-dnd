export class SortableFormArrayHandler {
  getItemAt(sortableData: any, index: number): any {
    return sortableData.at(index);
  }

  indexOf(sortableData: any, item: any): number {
    return sortableData.controls.indexOf(item);
  }

  removeItemAt(sortableData: any, index: number) {
    sortableData.removeAt(index);
  }

  insertItemAt(sortableData: any, item: any, index: number) {
    sortableData.insert(index, item);
  }
}
