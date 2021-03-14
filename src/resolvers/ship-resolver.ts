export async function shipResolver(
  parent: void,
  args: void,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.getShips();
  return response.ships;
}
