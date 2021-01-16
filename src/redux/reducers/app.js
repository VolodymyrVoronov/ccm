import { ActionType } from "../actions/actionTypes";

import {
  getGlobalMarketInformationAC,
  isGlobalMarketInformationLoadingAC,
  getCoinsDataAC,
  isCoinsDataLoadingAC,
  getIsErrorAC,
} from "./../actions/actions";

import { STATUS_CODE, FILTER_ITEM } from "./../../helpers/const";

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
      const filterCoins = (filter, onCoinsFilterClicked) => {
        if (filter === FILTER_ITEM.BY_NAME) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => {
              let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            });
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => {
              let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase();
              if (nameA > nameB) return -1;
              if (nameA < nameB) return 1;
              return 0;
            });
          }
        }

        if (filter === FILTER_ITEM.BY_PRICE) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => a.price_usd - b.price_usd);
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => b.price_usd - a.price_usd);
          }
        }

        if (filter === FILTER_ITEM.BY_MARKET_CAP) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => a.market_cap_usd - b.market_cap_usd
            );
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => b.market_cap_usd - a.market_cap_usd
            );
          }
        }

        if (filter === FILTER_ITEM.BY_24H_VOLUME) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => a.volume24 - b.volume24);
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => b.volume24 - a.volume24);
          }
        }

        if (filter === FILTER_ITEM.BY_SUPPLY) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => a.tsupply - b.tsupply);
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort((a, b) => b.tsupply - a.tsupply);
          }
        }

        if (filter === FILTER_ITEM.BY_1H) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => a.percent_change_1h - b.percent_change_1h
            );
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => b.percent_change_1h - a.percent_change_1h
            );
          }
        }

        if (filter === FILTER_ITEM.BY_24H) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => a.percent_change_24h - b.percent_change_24h
            );
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => b.percent_change_24h - a.percent_change_24h
            );
          }
        }

        if (filter === FILTER_ITEM.BY_7D) {
          if (!onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => a.percent_change_7d - b.percent_change_7d
            );
          }

          if (onCoinsFilterClicked) {
            let sortedArray = [...state.coinsData.data];
            return sortedArray.sort(
              (a, b) => b.percent_change_7d - a.percent_change_7d
            );
          }
        }
      };

      return {
        ...state,
        filteredCoinsData: filterCoins(
          action.filter,
          action.onCoinsFilterClicked
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
