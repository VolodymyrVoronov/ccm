import { ActionType } from "../actions/actionTypes";

import {
  getGlobalMarketInformationAC,
  isGlobalMarketInformationLoadingAC,
  getCoinsDataAC,
  isCoinsDataLoadingAC,
  getIsErrorAC,
} from "./../actions/actions";

import { STATUS_CODE, FILTER_ITEM } from "./../../helpers/const";
import { getSortedArrayByAscending } from "./../../helpers/getSortedArrayByAscending";
import { getSortedArrayByDescending } from "./../../helpers/getSortedArrayByDescending";
import { getSortedArrayByAlphabetForward } from "./../../helpers/getSortedArrayByAlphabetForward";
import { getSortedArrayByAlphabetBackward } from "./../../helpers/getSortedArrayByAlphabetBackward";

import { appAPI } from "./../../api/api";

const initialState = {
  globalMarketInformation: [],
  isGlobalMarketInfromationLoading: false,
  coinsData: [],
  isCoinsDataLoading: false,
  startNumber: 0,
  filteredCoinsData: [],
  isError: false,
  activeIndex: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_GLOBAL_MARKET_INFORMATION: {
      return {
        ...state,
        globalMarketInformation: action.globalMarketInformation,
      };
    }

    case ActionType.IS_GLOBAL_MARKET_INFORMATION_LOADING: {
      return {
        ...state,
        isGlobalMarketInfromationLoading:
          action.isGlobalMarketInfromationLoading,
      };
    }

    case ActionType.GET_COINS_DATA: {
      return {
        ...state,
        coinsData: action.coinsData,
      };
    }

    case ActionType.IS_COINS_DATA_LOADING: {
      return {
        ...state,
        isCoinsDataLoading: action.isCoinsDataLoading,
      };
    }

    case ActionType.ON_PREV_BUTTON_CLICK: {
      return {
        ...state,
        startNumber: state.startNumber - 100,
      };
    }

    case ActionType.ON_NEXT_BUTTON_CLICK: {
      return {
        ...state,
        startNumber: state.startNumber + 100,
      };
    }

    case ActionType.GET_FILTERED_COINS_DATA: {
      const filterCoins = (filter, onCoinsFilterClicked, dataForFiltration) => {
        if (filter === FILTER_ITEM.BY_NAME) {
          const sortBy = `name`;

          return onCoinsFilterClicked
            ? getSortedArrayByAlphabetBackward(dataForFiltration, sortBy)
            : getSortedArrayByAlphabetForward(dataForFiltration, sortBy);
        }

        if (filter === FILTER_ITEM.BY_PRICE) {
          const sortBy = `price_usd`;

          return onCoinsFilterClicked
            ? getSortedArrayByDescending(dataForFiltration, sortBy)
            : getSortedArrayByAscending(dataForFiltration, sortBy);
        }

        if (filter === FILTER_ITEM.BY_MARKET_CAP) {
          const sortBy = `market_cap_usd`;

          return onCoinsFilterClicked
            ? getSortedArrayByDescending(dataForFiltration, sortBy)
            : getSortedArrayByAscending(dataForFiltration, sortBy);
        }

        if (filter === FILTER_ITEM.BY_24H_VOLUME) {
          const sortBy = `volume24`;

          return onCoinsFilterClicked
            ? getSortedArrayByDescending(dataForFiltration, sortBy)
            : getSortedArrayByAscending(dataForFiltration, sortBy);
        }

        if (filter === FILTER_ITEM.BY_SUPPLY) {
          const sortBy = `tsupply`;

          return onCoinsFilterClicked
            ? getSortedArrayByDescending(dataForFiltration, sortBy)
            : getSortedArrayByAscending(dataForFiltration, sortBy);
        }

        if (filter === FILTER_ITEM.BY_1H) {
          const sortBy = `percent_change_1h`;

          return onCoinsFilterClicked
            ? getSortedArrayByDescending(dataForFiltration, sortBy)
            : getSortedArrayByAscending(dataForFiltration, sortBy);
        }

        if (filter === FILTER_ITEM.BY_24H) {
          const sortBy = `percent_change_24h`;

          return onCoinsFilterClicked
            ? getSortedArrayByDescending(dataForFiltration, sortBy)
            : getSortedArrayByAscending(dataForFiltration, sortBy);
        }

        if (filter === FILTER_ITEM.BY_7D) {
          const sortBy = `percent_change_7d`;

          return onCoinsFilterClicked
            ? getSortedArrayByDescending(dataForFiltration, sortBy)
            : getSortedArrayByAscending(dataForFiltration, sortBy);
        }
      };

      return {
        ...state,
        filteredCoinsData: filterCoins(
          action.filter,
          action.onCoinsFilterClicked,
          state.coinsData.data
        ),
      };
    }

    case ActionType.SET_FILTERED_COINS_DATA_TO_EMPTY: {
      return {
        ...state,
        filteredCoinsData: [],
      };
    }

    case ActionType.IS_ERROR: {
      return {
        ...state,
        isError: action.isError,
      };
    }

    case ActionType.SET_ACTIVE_INDEX: {
      return {
        ...state,
        activeIndex: action.activeIndex,
      };
    }

    default:
      return state;
  }
};

export default appReducer;

//Thunks
export const getGlobalMarketInformation = () => async (dispatch) => {
  try {
    dispatch(isGlobalMarketInformationLoadingAC(true));
    const response = await appAPI.getGlobalMarketInformation();
    if (response.status === STATUS_CODE.SUCCESS) {
      dispatch(getGlobalMarketInformationAC(response.data[0]));
      dispatch(isGlobalMarketInformationLoadingAC(false));
    }
  } catch (error) {
    dispatch(getIsErrorAC(true));
    console.log(error);
  }
};

export const getCoinsData = (startNumber) => async (dispatch) => {
  try {
    dispatch(isCoinsDataLoadingAC(true));
    const response = await appAPI.getCoinsData(startNumber);
    if (response.status === STATUS_CODE.SUCCESS) {
      dispatch(getCoinsDataAC(response.data));
      dispatch(isCoinsDataLoadingAC(false));
    }
  } catch (error) {
    dispatch(getIsErrorAC(true));
    console.log(error);
  }
};
