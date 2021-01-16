export const getStyleColor = (figure) => {
  if (figure === null) {
    return ` coins-table__item--hidden`;
  }

  if (figure.includes(`-`)) {
    return ` coins-table__item--red`;
  }

  if (!figure.includes(`-`) && figure > 0.009) {
    return ` coins-table__item--green`;
  }
};
