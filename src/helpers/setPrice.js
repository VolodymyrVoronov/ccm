export const setPrice = (price) => {
  if (price < 0.00001) {
    return `≈ 0.000001 $`;
  }

  if (price === `0?`) {
    return `unknown`
  }

  return `${price} $`;
};
