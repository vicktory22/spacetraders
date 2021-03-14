export async function purchaseFuelResolver(
  parent: void,
  args: Record<string, any>,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.purchaseFuel(
    args.shipId,
    args.quantity
  );
  return response;
}
