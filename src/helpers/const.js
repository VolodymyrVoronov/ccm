export const apiBody = `https://api.coinlore.net/api/`;

export const STATUS_CODE = {
  SUCCESS: 200,
};

export const MINUTE_IN_MS = 300000;

export const constFilterItems = [
  { title: `Coin`, filter_type: `by_name` },
  { title: `Price`, filter_type: `by_price` },
  { title: `Market Cap`, filter_type: `by_market_cap` },
  { title: `24h Volume`, filter_type: `by_24h_volume` },
  { title: `Supply`, filter_type: `by_supply` },
  { title: `1h`, filter_type: `by_1h` },
  { title: `24h`, filter_type: `by_24h` },
  { title: `7d`, filter_type: `by_7d` },
];

export const FILTER_ITEM = {
  BY_NAME: `by_name`,
  BY_PRICE: `by_price`,
  BY_MARKET_CAP: `by_market_cap`,
  BY_24H_VOLUME: `by_24h_volume`,
  BY_SUPPLY: `by_supply`,
  BY_1H: `by_1h`,
  BY_24H: `by_24h`,
  BY_7D: `by_7d`,
};

export const FILTER_NUMBER = {
  BY_NAME: 0,
  BY_PRICE: 1,
  BY_MARKET_CAP: 2,
  BY_24H_VOLUME: 3,
  BY_SUPPLY: 4,
  BY_1H: 5,
  BY_24H: 6,
  BY_7D: 7,
};
