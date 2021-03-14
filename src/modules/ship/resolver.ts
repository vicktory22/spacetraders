export async function shipResolver(
  _1: any,
  _2: any,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.getShips();
  return response.ships;
}
