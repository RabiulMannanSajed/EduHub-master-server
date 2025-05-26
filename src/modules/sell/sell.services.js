import { Sell } from "./sell.model.js";

export const createSellIntoDB = async (sellData) => {
  const newSellProduct = await Sell.create(sellData);
  return newSellProduct;
};
