import React from "react";

import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import Header from "./../Header/Header";
import CoinsFilter from "./../CoinsFilter/CoinsFilter";
import CoinsTable from "./../CoinsTable/CoinsTable";
import PrevNextButtons from "./../PrevNextButtons/PrevNextButtons";
import Preloader from "./../common/Preloader/Preloader";
import ErrorPage from "./../common/ErrorPage/ErrorPage";

import { getDate } from "./../../helpers/getDate";

import "./App.scss";

const App = () => {
  const { isCoinsDataLoading, isError } = useSelector(({ app }) => app);

  return (
    <div className="app">
      {isError ? (
        <ErrorPage />
      ) : (
        <>
          <Header />

          <PrevNextButtons
            date={getDate()}
            text_title={`Cryptocurrency Prices & Coin Market Caps —`}
          />
          {isCoinsDataLoading ? (
            <Preloader />
          ) : (
            <>
              <CoinsFilter />
              <CoinsTable />
              <PrevNextButtons />
            </>
          )}
        </>
      )}
    </div>
  );
};

App.propTypes = {
  isCoinsDataLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

App.defaultProps = {
  isCoinsDataLoading: false,
  isError: false,
};

export default App;
