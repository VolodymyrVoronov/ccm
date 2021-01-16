export const fixFigureToTwoAfterComma = (figure = 0) => {
  let figureToNumber = +figure;
  return figureToNumber.toFixed(2);
};
