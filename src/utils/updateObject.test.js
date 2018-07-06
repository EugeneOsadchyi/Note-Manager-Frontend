import deepFreeze from 'deep-freeze';
import updateObject from './updateObject';

describe('#updateObject', () => {
  it('modifies object immutably', () => {
    const objectBefore = {
      array: [1, 2, 3],
      object: {
        a: 1,
        b: 2,
      },
    };

    const objectAfter = {
      array: ['one', 'two', 'three'],
      object: {
        a: 1,
        b: 2,
      },
      anotherObject: {
        c: 3,
      },
    };

    const updatedProperties = {
      array: ['one', 'two', 'three'],
      anotherObject: { c: 3 },
    };

    deepFreeze(objectBefore);

    expect(updateObject(objectBefore, updatedProperties)).toEqual(objectAfter);
  });
});
