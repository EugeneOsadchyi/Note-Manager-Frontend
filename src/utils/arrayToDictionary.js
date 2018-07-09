export default (objectArray, property) => (objectArray.reduce((acc, obj) => {
  const key = obj[property];
  acc[key] = obj;
  return acc;
}, {}));
