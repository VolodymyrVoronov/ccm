import React from "react";

import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import {
  onPrevButtonClickAC,
  onNextButtonClickAC,
  setFilteredCoinsDataToEmptyAC,
  setActiveIndexAC,
} from "./../../redux/actions/actions";

import { getCoinsData } from "./../../redux/reducers/app";

import { FcPrevious, FcNext } from "react-icons/fc";

import "./PrevNextButtons.scss";

const PrevNextButtons = React.memo((props) => {
  const dispatch = useDispatch();

  const {
    startNumber,
    isCoinsDataLoading,
    globalMarketInformation,
  } = useSelector(({ app }) => app);

  const onPrevBtnClickHandler = () => {
    dispatch(onPrevButtonClickAC());
    dispatch(getCoinsData(startNumber));
    dispatch(setFilteredCoinsDataToEmptyAC());
    dispatch(setActiveIndexAC(null));
  };

  const onNextBtnClickHandler = () => {
    dispatch(onNextButtonClickAC());
    dispatch(getCoinsData(startNumber));
    dispatch(setFilteredCoinsDataToEmptyAC());
    dispatch(setActiveIndexAC(null));
  };

  return (
    <div className="prev-next-block">
      <p className="prev-next-block__title">
        {props.text_title} {props.date}
      </p>
      <button
        className="prev-next-block__button prev-next-block__button--prev"
        onClick={() => onPrevBtnClickHandler()}
        disabled={startNumber === 0 || isCoinsDataLoading}
      >
        <FcPrevious />
        Prev
      </button>
      <button
        className="prev-next-block__button prev-next-block__button--next"
        onClick={() => onNextBtnClickHandler()}
        disabled={
          startNumber > globalMarketInformation.coins_count - 50 ||
          isCoinsDataLoading
        }
      >
        Next <FcNext />
      </button>
    </div>
  );
});

PrevNextButtons.propTypes = {
  startNumber: PropTypes.number.isRequired,
  isCoinsDataLoading: PropTypes.bool.isRequired,

  globalMarketInformation: PropTypes.arrayOf(
    PropTypes.shape({
      coins_count: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

PrevNextButtons.defaultProps = {
  startNumber: 0,
  isCoinsDataLoading: false,

  globalMarketInformation: [
    {
      coins_count: 0,
    },
  ],
};

export default PrevNextButtons;
