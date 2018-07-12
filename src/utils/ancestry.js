import arrayToDictionary from './arrayToDictionary';

export default class Ancestry {
  constructor(objectArray) {
    this.objectArray = objectArray;
  }

  getAncestorIds(id) {
    const objectDictionary = arrayToDictionary(this.objectArray, 'id');

    const currentObject = objectDictionary[id];
    const ancestors = [];

    let { parentId } = currentObject;

    while (parentId) {
      ancestors.push(parentId);
      const obj = objectDictionary[parentId];
      ({ parentId } = obj);
    }

    return ancestors;
  }

  getSiblingIds(id) {
    return this.getSiblings(id).map(item => item.id);
  }

  getSiblings(id) {
    const children = this.getChildren(id);

    const nestedChildren = children.reduce((acc, item) => {
      acc.push(...this.getSiblings(item.id));
      return acc;
    }, []);

    return [...children, ...nestedChildren];
  }

  getChildren(parentId) {
    return this.objectArray.filter(item => item.parentId === parentId);
  }

  getChildrenIds(parentId) {
    return this.getChildren(parentId).map(item => item.id);
  }
}
