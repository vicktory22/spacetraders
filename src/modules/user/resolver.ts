export async function userResolver(
  parent: void,
  args: Record<string, any>,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.getUser(
    args.username,
    args.token
  );
  return response.user;
}
