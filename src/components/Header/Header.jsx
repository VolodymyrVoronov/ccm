import React from "react";

import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import { getGlobalMarketInformation } from "../../redux/reducers/app";

import { MINUTE_IN_MS } from "./../../helpers/const";

import { formatFigure } from "./../../helpers/formatFigure";
import { fixFigureToTwoAfterComma } from "../../helpers/fixFigureToTwoAfterComma";

import * as HeaderIcon from "../../assets/header-icons/index";

import "./Header.scss";

const Header = React.memo(() => {
  const dispatch = useDispatch();

  const {
    globalMarketInformation,
    isGlobalMarketInfromationLoading,
  } = useSelector(({ app }) => app);

  React.useEffect(() => {
    dispatch(getGlobalMarketInformation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getGlobalMarketInformation());
    }, MINUTE_IN_MS);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    coins_count,
    active_markets,
    total_mcap,
    total_volume,
    btc_d,
  } = globalMarketInformation;

  return (
    <div className="header">
      <ul className="header__items">
        <li className="header__item item">
          <img
            className="item__icon"
            src={HeaderIcon.CryptocurrenciesIcon}
            alt="Cryptocurrencies"
          />
          <p className="item__title">Cryptocurrencies: </p>
          <p
            className={`item__figure ${
              isGlobalMarketInfromationLoading ? `item__figure--updating` : ` `
            }`}
          >
            {coins_count}
          </p>
        </li>
        <li className="header__item item">
          <img
            className="item__icon"
            src={HeaderIcon.MarketsIcon}
            alt="Markets"
          />
          <p className="item__title">Markets: </p>
          <p
            className={`item__figure ${
              isGlobalMarketInfromationLoading ? `item__figure--updating` : ` `
            }`}
          >
            {active_markets}
          </p>
        </li>
        <li className="header__item item">
          <img
            className="item__icon"
            src={HeaderIcon.MarketCapitalization}
            alt="Market Capitalization"
          />
          <p className="item__title">Market Capitalization: </p>
          <p
            className={`item__figure ${
              isGlobalMarketInfromationLoading ? `item__figure--updating` : ` `
            }`}
          >
            {formatFigure(total_mcap)} $
          </p>
        </li>
        <li className="header__item item">
          <img
            className="item__icon"
            src={HeaderIcon.VolumeIcon}
            alt="24h Volume"
          />
          <p className="item__title">24h Volume: </p>
          <p
            className={`item__figure ${
              isGlobalMarketInfromationLoading ? `item__figure--updating` : ` `
            }`}
          >
            {formatFigure(total_volume)} $
          </p>
        </li>
        <li className="header__item item">
          <img
            className="item__icon"
            src={HeaderIcon.BtcDominance}
            alt="BTC Domminance"
          />
          <p className="item__title">BTC Dominance: </p>
          <p
            className={`item__figure ${
              isGlobalMarketInfromationLoading ? `item__figure--updating` : ` `
            }`}
          >
            {fixFigureToTwoAfterComma(btc_d)} %
          </p>
        </li>
      </ul>
    </div>
  );
});

Header.propTypes = {
  globalMarketInformation: PropTypes.arrayOf(
    PropTypes.shape({
      coins_count: PropTypes.number.isRequired,
      active_markets: PropTypes.number.isRequired,
      total_mcap: PropTypes.number.isRequired,
      total_volume: PropTypes.number.isRequired,
      btc_d: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  isGlobalMarketInfromationLoading: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  globalMarketInformation: [
    {
      coins_count: 0,
      active_markets: 0,
      total_mcap: 0,
      total_volume: 0,
      btc_d: ``,
    },
  ],

  isGlobalMarketInfromationLoading: false,
};

export default Header;
