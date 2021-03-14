export async function purchaseShipResolver(
  parent: void,
  args: Record<string, any>,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.purchaseShip(
    args.location,
    args.type
  );
  console.log(response.user);
  return response.user;
}
