enum LoanType {
  STARTUP,
}

interface TakeOutLoanInput {
  username: string;
  type: LoanType;
}

export async function takeOutLoanResolver(
  _: any,
  args: TakeOutLoanInput,
  { dataSources }: Record<string, any>
) {
  const response = await dataSources.spaceTradersAPI.takeOutLoan(
    args.username,
    args.type
  );
  return response.user;
}
