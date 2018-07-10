import Tree from './tree';

describe('Tree', () => {
  const initial = [
    { id: 1, parentId: null },
    { id: 2, parentId: null },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 3 },
    { id: 5, parentId: 4 },
    { id: 6, parentId: 1 },
  ];

  it('.getParent', () => {
    const expected = { id: 1, parentId: null };
    expect(Tree.getParent(initial, 3)).toEqual(expected);
  });

  it('.getChildren', () => {
    const expected = [
      { id: 3, parentId: 1 },
      { id: 6, parentId: 1 },
    ];
    expect(Tree.getChildren(initial, 1)).toEqual(expected);
  });

  it('.getNestedChildrenIds', () => {
    const expected = [3, 4, 5, 6];
    expect(Tree.getNestedChildrenIds(initial, 1)).toEqual(expected);
  });

  it('.removeNode', () => {
    const expected = [
      { id: 2, parentId: null },
    ];
    expect(Tree.removeNode(initial, 1)).toEqual(expected);
  });
});
