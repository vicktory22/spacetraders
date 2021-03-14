export async function locationResolver(
  parent: void,
  args: void,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.getLocations();
  return response.locations;
}
