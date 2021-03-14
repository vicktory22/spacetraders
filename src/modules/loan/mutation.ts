import { TakeOutLoanInput } from "./types";

export async function takeOutLoanResolver(
  _: any,
  args: { input: TakeOutLoanInput },
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.takeOutLoan(args.input);
  return response.user;
}
