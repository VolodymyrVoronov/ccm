import React from "react";

import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";

import {
  getFilteredCoinsDataAC,
  setActiveIndexAC,
} from "./../../redux/actions/actions";

import { constFilterItems } from "../../helpers/const";

import { FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";

import "./CoinsFilter.scss";

const CoinsFilter = () => {
  const dispatch = useDispatch();

  const { activeIndex } = useSelector(({ app }) => app);

  const [onCoinsFilterClicked, setOnCoinsFilterClicked] = React.useState(false);

  const onConinsFilterClickHandler = (activeFilter, filter) => {
    setOnCoinsFilterClicked(!onCoinsFilterClicked);
    dispatch(setActiveIndexAC(activeFilter));
    dispatch(getFilteredCoinsDataAC(filter, onCoinsFilterClicked));
  };

  return (
    <div className="coins-filter">
      <ul className="coins-filter__items">
        <li className="coins-filter__item">Symbol</li>
        {constFilterItems.map((filterItem, index) => (
          <li
            onClick={() =>
              onConinsFilterClickHandler(index, filterItem.filter_type)
            }
            className={`coins-filter__item ${
              activeIndex === index ? `coins-filter__item--active` : ``
            }`}
            key={index}
          >
            {filterItem.title}&nbsp;
            {onCoinsFilterClicked && activeIndex === index ? (
              <FcGenericSortingAsc />
            ) : (
              <FcGenericSortingDesc />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

CoinsFilter.propTypes = {
  activeIndex: PropTypes.number.isRequired,
};

CoinsFilter.defaultProps = {
  activeIndex: 0,
};

export default CoinsFilter;
