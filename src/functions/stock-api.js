import tickers from './tickers';
import { getFollowedStocks } from './stock-interactions.js';

const stockList = [];

export async function initializeStocks() {
  tickers.forEach(ticker => {
    // await 
  });
}

export function getAllStocks() {
  return stockList;
}

export async function getFollowedStocks(uid) {
  const followed = await getFollowedStocks(uid);
  const followedList = [];
  stockList.forEach((stock) => {
    if (followed.includes(stock.name)) {
      followedList.push(stock);
    }
  });
  return followedList;
}

export async function getUnfollowedStocks(uid) {
  const followed = await getFollowedStocks(uid);
  const unfollowedList = [];
  stockList.forEach((stock) => {
    if (!followed.includes(stock.name)) {
      unfollowedList.push(stock);
    }
  });
  return unfollowedList;
}

export function sortMarketCapHigh() {

}

export function sortMarketCapLow() {

}

export function sortPercentIncrease() {

}

export function sortPercentDecrease() {

}

export function searchStocks(text) {
  const searchedList = [];
  stockList.forEach((stock) => {
    if (stock.name.substring(0, text.length) === text) {
      searchedList.push(stock);
    }
  });
}
