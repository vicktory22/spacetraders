import { PurchaseShipInput } from "./types";

export async function purchaseShipResolver(
  _: any,
  args: { input: PurchaseShipInput },
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.purchaseShip(args.input);
  return response.user;
}
