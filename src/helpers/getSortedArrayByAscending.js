export const getSortedArrayByAscending = (data, prop) => {
  const propItem = prop.trim();
  let sortedArray = [...data];
  return sortedArray.sort((a, b) => a[propItem] - b[propItem]);
};
