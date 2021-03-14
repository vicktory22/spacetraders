import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { TakeOutLoanInput } from "../modules/loan/types";
import { PurchaseShipInput } from "../modules/ship/types";

enum LoanType {
  STARTUP,
  ENTERPRISE,
}

export class SpaceTradersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacetraders.io/";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getUser(username: string, token: string) {
    return this.get(`users/${username}`);
  }

  async getLoans() {
    return this.get(`game/loans`);
  }

  async getShips() {
    return this.get(`game/ships`);
  }

  async getLocations() {
    return this.get(`game/systems/OE/locations`);
  }

  async takeOutLoan(input: TakeOutLoanInput) {
    const { username, type } = input;
    return this.post(`users/${username}/loans/`, {
      type,
    });
  }

  async purchaseShip(input: PurchaseShipInput) {
    const { username, location, type } = input;
    return this.post(`users/${username}/ships`, { location, type });
  }

  async purchaseFuel(username: string, shipId: number, quantity: number) {
    return this.post(`users/${username}/purchase-orders`, {
      shipId,
      good: "FUEL",
      quantity,
    });
  }
}
