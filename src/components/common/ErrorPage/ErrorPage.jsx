import React from "react";

import { FcDeleteDatabase } from "react-icons/fc";

import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">Some error has been occurred.</h1>
      <p className="error-page__icon">
        <FcDeleteDatabase />
      </p>
      <p className="error-page__text">
        Please, refresh the page and try again.
      </p>
    </div>
  );
};

export default ErrorPage;
