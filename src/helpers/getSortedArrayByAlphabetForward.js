export const getSortedArrayByAlphabetForward = (data, prop) => {
  const propitem = prop.trim();
  let sortedArray = [...data];
  return sortedArray.sort((a, b) => {
    let nameA = a[propitem].toLowerCase(),
      nameB = b[propitem].toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};
