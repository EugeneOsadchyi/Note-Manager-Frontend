import Ancestry from './ancestry';

describe('Ancestry', () => {
  const objectArray = [
    { id: 1, parentId: null },
    { id: 2, parentId: null },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 3 },
    { id: 5, parentId: 4 },
    { id: 6, parentId: 1 },
  ];

  const ancestry = new Ancestry(objectArray);

  describe('.getChildren', () => {
    describe('when object has children', () => {
      const id = 1;

      it('returns an array of children objects', () => {
        expect(ancestry.getChildren(id)).toEqual([
          { id: 3, parentId: 1 },
          { id: 6, parentId: 1 },
        ]);
      });
    });

    describe('when object has no children', () => {
      const id = 2;

      it('returns an empty array', () => {
        expect(ancestry.getChildren(id)).toEqual([]);
      });
    });
  });

  describe('.getChildrenIds', () => {
    const id = 1;

    let getChildrenFake;

    beforeEach(() => { getChildrenFake = jest.spyOn(ancestry, 'getChildren'); });
    afterEach(() => getChildrenFake.mockRestore());

    describe('when object has children', () => {
      beforeEach(() => {
        getChildrenFake.mockImplementation(() => (
          [
            { id: 3, parentId: 1 },
            { id: 6, parentId: 1 },
          ]
        ));
      });

      it('returns an array of children objects', () => {
        expect(ancestry.getChildrenIds(id)).toEqual([3, 6]);
        expect(getChildrenFake).toHaveBeenCalledWith(id);
      });
    });

    describe('when object has no children', () => {
      beforeEach(() => {
        getChildrenFake.mockImplementation(() => ([]));
      });

      it('returns an empty array', () => {
        expect(ancestry.getChildren(id)).toEqual([]);
        expect(getChildrenFake).toHaveBeenCalledWith(id);
      });
    });
  });

  describe('.getAncestorIds', () => {
    describe('when it is a root element', () => {
      const id = 1;

      it('returns an empty array', () => {
        expect(ancestry.getAncestorIds(id)).toEqual([]);
      });
    });

    describe('when it is child element', () => {
      const id = 5;

      it('returns an empty array', () => {
        expect(ancestry.getAncestorIds(id)).toEqual([4, 3, 1]);
      });
    });
  });

  describe('.getSiblings', () => {
    describe('when element has no children', () => {
      const id = 2;

      it('returns an empty array', () => {
        expect(ancestry.getSiblings(id)).toEqual([]);
      });
    });

    describe('when element has children', () => {
      const id = 1;

      it('returns an array of it\'s siblings', () => {
        const expectedArray = [
          { id: 3, parentId: 1 },
          { id: 4, parentId: 3 },
          { id: 5, parentId: 4 },
          { id: 6, parentId: 1 },
        ];

        expect(ancestry.getSiblings(id)).toHaveLength(expectedArray.length);
        expect(ancestry.getSiblings(id)).toEqual(expect.arrayContaining(expectedArray));
      });
    });
  });

  describe('.getSiblingIds', () => {
    const id = 1;

    let getSiblingsFake;

    beforeEach(() => { getSiblingsFake = jest.spyOn(ancestry, 'getSiblings'); });
    afterEach(() => getSiblingsFake.mockRestore());

    describe('when object has children', () => {
      beforeEach(() => {
        getSiblingsFake.mockImplementation(() => (
          [
            { id: 3, parentId: 1 },
            { id: 6, parentId: 1 },
          ]
        ));
      });

      it('returns an array of children objects', () => {
        expect(ancestry.getSiblingIds(id)).toEqual([3, 6]);
        expect(getSiblingsFake).toHaveBeenCalledWith(id);
      });
    });

    describe('when object has no children', () => {
      beforeEach(() => {
        getSiblingsFake.mockImplementation(() => ([]));
      });

      it('returns an empty array', () => {
        expect(ancestry.getSiblingIds(id)).toEqual([]);
        expect(getSiblingsFake).toHaveBeenCalledWith(id);
      });
    });
  });
});
