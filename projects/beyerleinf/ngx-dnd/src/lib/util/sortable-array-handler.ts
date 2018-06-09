export class SortableArrayHandler {
  getItemAt(sortableData: any, index: number): any {
    return sortableData[index];
  }

  indexOf(sortableData: any, item: any): number {
    return sortableData.indexOf(item);
  }

  removeItemAt(sortableData: any, index: number) {
    sortableData.splice(index, 1);
  }

  insertItemAt(sortableData: any, item: any, index: number) {
    sortableData.splice(index, 0, item);
  }
}
