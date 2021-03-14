import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

enum LoanType {
  STARTUP,
  ENTERPRISE,
}

export class SpaceTradersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacetraders.io/";
  }

  async getUser(username: string, token: string) {
    return this.get(`users/${username}?token=${token}`);
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

  async takeOutLoan(type: string) {
    return this.post(`users/${process.env.USERNAME}/loans/`, {
      type,
    });
  }

  async purchaseShip(location: string, type: string) {
    return this.post(`users/${process.env.USERNAME}/ships`, { location, type });
  }

  async purchaseFuel(shipId: number, quantity: number) {
    return this.post(`users/${process.env.USERNAME}/purchase-orders`, {
      shipId,
      good: "FUEL",
      quantity,
    });
  }
}
