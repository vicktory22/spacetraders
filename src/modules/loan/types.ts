export enum LoanType {
  STARTUP,
}

export interface TakeOutLoanInput {
  username: string;
  type: LoanType;
}
