import { purchaseFuelResolver } from "./modules/fuel/mutation";
import { takeOutLoanResolver } from "./modules/loan/mutation";
import { loanResolver } from "./modules/loan/resolver";
import { locationResolver } from "./modules/location/resolver";
import { purchaseShipResolver } from "./modules/ship/mutation";
import { shipResolver } from "./modules/ship/resolver";
import { userResolver } from "./modules/user/resolver";

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
