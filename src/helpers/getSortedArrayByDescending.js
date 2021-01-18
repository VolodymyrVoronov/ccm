export const getSortedArrayByDescending = (data, prop) => {
  const propItem = prop.trim();
  let sortedArray = [...data];
  return sortedArray.sort((a, b) => b[propItem] - a[propItem]);
};
