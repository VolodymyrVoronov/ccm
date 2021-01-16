import { makeActionCreator } from "./../../helpers/makeActionCreator";

import { ActionType } from "./actionTypes";

export const getGlobalMarketInformationAC = makeActionCreator(
  ActionType.GET_GLOBAL_MARKET_INFORMATION,
  `globalMarketInformation`
);

export const isGlobalMarketInformationLoadingAC = makeActionCreator(
  ActionType.IS_GLOBAL_MARKET_INFORMATION_LOADING,
  `isGlobalMarketInfromationLoading`
);

export const getCoinsDataAC = makeActionCreator(
  ActionType.GET_COINS_DATA,
  `coinsData`
);

export const isCoinsDataLoadingAC = makeActionCreator(
  ActionType.IS_COINS_DATA_LOADING,
  `isCoinsDataLoading`
);

export const onPrevButtonClickAC = makeActionCreator(
  ActionType.ON_PREV_BUTTON_CLICK
);

export const onNextButtonClickAC = makeActionCreator(
  ActionType.ON_NEXT_BUTTON_CLICK
);

export const getFilteredCoinsDataAC = makeActionCreator(
  ActionType.GET_FILTERED_COINS_DATA,
  `filter`,
  `onCoinsFilterClicked`
);

export const setFilteredCoinsDataToEmptyAC = makeActionCreator(
  ActionType.SET_FILTERED_COINS_DATA_TO_EMPTY
);

export const getIsErrorAC = makeActionCreator(ActionType.IS_ERROR, `isError`);

export const setActiveIndexAC = makeActionCreator(
  ActionType.SET_ACTIVE_INDEX,
  `activeIndex`
);
