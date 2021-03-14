export async function loanResolver(
  parent: void,
  args: void,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.getLoans();
  return response.loans;
}
