import React from "react";

import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import { formatFigure } from "./../../helpers/formatFigure";
import { fixFigureToTwoAfterComma } from "../../helpers/fixFigureToTwoAfterComma";
import { getStyleColor } from "./../../helpers/getStyleColor";
import { setPrice } from "./../../helpers/setPrice";

import { FILTER_NUMBER } from "../../helpers/const";

import "./CoinsTable.scss";

const CoinsTable = () => {
  const { coinsData, filteredCoinsData, activeIndex } = useSelector(
    ({ app }) => app
  );

  const getData = (coinsData, filteredCoinsData) => {
    if (filteredCoinsData.length === 0) {
      return coinsData;
    }
    return filteredCoinsData;
  };

  return (
    <div className="coins-table">
      {getData(coinsData.data, filteredCoinsData).map((coin) => {
        const {
          id,
          name,
          symbol,
          price_usd,
          market_cap_usd,
          volume24,
          tsupply,
          percent_change_1h,
          percent_change_24h,
          percent_change_7d,
        } = coin;

        return (
          <ul key={id} className="coins-table__items">
            <li className="coins-table__item">{symbol}</li>
            <li
              className={`coins-table__item ${
                activeIndex === FILTER_NUMBER.BY_NAME
                  ? `coins-table__item--active-row`
                  : ``
              }`}
            >
              {name}
            </li>
            <li
              className={`coins-table__item ${
                activeIndex === FILTER_NUMBER.BY_PRICE
                  ? `coins-table__item--active-row`
                  : ``
              }`}
            >
              {setPrice(price_usd)}
            </li>
            <li
              className={`coins-table__item ${
                activeIndex === FILTER_NUMBER.BY_MARKET_CAP
                  ? `coins-table__item--active-row`
                  : ``
              }`}
            >
              {formatFigure(market_cap_usd)} $
            </li>
            <li
              className={`coins-table__item ${
                activeIndex === FILTER_NUMBER.BY_24H_VOLUME
                  ? `coins-table__item--active-row`
                  : ``
              }`}
            >
              {formatFigure(volume24)} $
            </li>
            <li
              className={`coins-table__item ${
                activeIndex === FILTER_NUMBER.BY_SUPPLY
                  ? `coins-table__item--active-row`
                  : ``
              } `}
            >
              {formatFigure(tsupply)} $
            </li>
            <li
              className={`coins-table__item ${getStyleColor(
                percent_change_1h
              )} ${
                activeIndex === FILTER_NUMBER.BY_1H
                  ? `coins-table__item--active-row`
                  : ``
              }`}
            >
              {fixFigureToTwoAfterComma(percent_change_1h)} %
            </li>
            <li
              className={`coins-table__item ${getStyleColor(
                percent_change_24h
              )} ${
                activeIndex === FILTER_NUMBER.BY_24H
                  ? `coins-table__item--active-row`
                  : ``
              }`}
            >
              {fixFigureToTwoAfterComma(percent_change_24h)} %
            </li>
            <li
              className={`coins-table__item ${getStyleColor(
                percent_change_7d
              )} ${
                activeIndex === FILTER_NUMBER.BY_7D
                  ? `coins-table__item--active-row`
                  : ``
              }`}
            >
              {fixFigureToTwoAfterComma(percent_change_7d)} %
            </li>
          </ul>
        );
      })}
    </div>
  );
};

CoinsTable.propTypes = {
  coinsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      price_usd: PropTypes.string.isRequired,
      market_cap_usd: PropTypes.string.isRequired,
      volume24: PropTypes.number.isRequired,
      tsupply: PropTypes.number.isRequired,
      percent_change_1h: PropTypes.string.isRequired,
      percent_change_24h: PropTypes.string.isRequired,
      percent_change_7d: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  filteredCoinsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      price_usd: PropTypes.string.isRequired,
      market_cap_usd: PropTypes.string.isRequired,
      volume24: PropTypes.number.isRequired,
      tsupply: PropTypes.number.isRequired,
      percent_change_1h: PropTypes.string.isRequired,
      percent_change_24h: PropTypes.string.isRequired,
      percent_change_7d: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  activeIndex: PropTypes.number.isRequired,
};

CoinsTable.defaultProps = {
  coinsData: [
    {
      id: ``,
      name: ``,
      symbol: ``,
      price_usd: ``,
      market_cap_usd: ``,
      volume24: 0,
      tsupply: 0,
      percent_change_1h: ``,
      percent_change_24h: ``,
      percent_change_7d: ``,
    },
  ],

  filteredCoinsData: [
    {
      id: ``,
      name: ``,
      symbol: ``,
      price_usd: ``,
      market_cap_usd: ``,
      volume24: 0,
      tsupply: 0,
      percent_change_1h: ``,
      percent_change_24h: ``,
      percent_change_7d: ``,
    },
  ],

  activeIndex: 0,
};

export default CoinsTable;
