export async function takeOutLoanResolver(
  parent: void,
  args: Record<string, any>,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.takeOutLoan(args.type);
  return response.user;
}
