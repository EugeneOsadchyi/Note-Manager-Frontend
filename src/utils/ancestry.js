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

  // static getParent(objectArray, id) {
  //   const currentObject = objectArray.find(directory => directory.id === id);
  //   return objectArray.find(directory => directory.id === currentObject.parentId);
  // }

  // static getAllParentIds(objectArray, id) {
  //   const objectIds = objectArray.reduce((acc, item) => {
  //     if (item.id === id) {
  //       acc.push(item.id);
  //       if (item.parentId) {
  //         acc.push(this.getAllParentIds(objectArray, item.parentId));
  //       }
  //     }
  //     return acc;
  //   }, []);

  //   objectIds.shift();

  //   return objectIds;
  // }

  // static getChildren(objectArray, id) {
  //   return objectArray.filter(item => item.parentId === id);
  // }

  // static getNestedChildrenIds(objectArray, id) {
  //   return objectArray.reduce((acc, item) => {
  //     if (item.parentId === id) {
  //       acc.push(item.id);
  //       acc.push(...this.getNestedChildrenIds(objectArray, item.id));
  //     }
  //     return acc;
  //   }, []);
  // }

  // static removeNode(objectArray, id) {
  //   const ids = [id, ...this.getNestedChildrenIds(objectArray, id)];
  //   return objectArray.filter(item => !ids.includes(item.id));
  // }
}
