export const formatFigure = (figure = 0) => {
  if (isNaN(figure)) {
    return 0;
  } else {
    let figureToNumber = +figure;
    return figureToNumber
      .toFixed()
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
