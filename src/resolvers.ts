import { loanResolver } from "./resolvers/loan-resolver";
import { locationResolver } from "./resolvers/location-resolver";
import { purchaseFuelResolver } from "./resolvers/purchase-fuel-resolver";
import { purchaseShipResolver } from "./resolvers/purchase-ship-resolver";
import { shipResolver } from "./resolvers/ship-resolver";
import { takeOutLoanResolver } from "./resolvers/take-out-loan-resolver";
import { userResolver } from "./resolvers/user-resolver";

export const resolvers = {
  Query: {
    user: userResolver,
    loans: loanResolver,
    ships: shipResolver,
    locations: locationResolver,
  },
  Mutation: {
    takeOutLoan: takeOutLoanResolver,
    purchaseShip: purchaseShipResolver,
    purchaseFuel: purchaseFuelResolver,
  },
};
