import groupBy from './arrayToDictionary';

describe('#arrayToDictionary', () => {
  it('generates key-value (property-object) structure based on provided array of objects and desired property', () => {
    const initialArray = [{
      id: 1, text: 'Text 1',
    }, {
      id: 2, text: 'Text 2',
    }, {
      id: 3, text: 'Text 3',
    }];

    const property = 'id';

    const expectedObject = {
      1: { id: 1, text: 'Text 1' },
      2: { id: 2, text: 'Text 2' },
      3: { id: 3, text: 'Text 3' },
    };

    expect(groupBy(initialArray, property)).toEqual(expectedObject);
  });
});
