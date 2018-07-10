export default class Tree {
  static getParent(objectArray, id) {
    const currentObject = objectArray.find(directory => directory.id === id);
    return objectArray.find(directory => directory.id === currentObject.parentId);
  }

  static getChildren(objectArray, id) {
    return objectArray.filter(directory => directory.parentId === id);
  }

  static getNestedChildrenIds(objectArray, id) {
    return objectArray.reduce((acc, item) => {
      if (item.parentId === id) {
        acc.push(item.id);
        acc.push(...this.getNestedChildrenIds(objectArray, item.id));
      }
      return acc;
    }, []);
  }

  static removeNode(objectArray, id) {
    const ids = [id, ...this.getNestedChildrenIds(objectArray, id)];
    return objectArray.filter(directory => !ids.includes(directory.id));
  }
}
