import * as faker from "faker";

export class Company {
  name: string;
  slogan: string;
  location: {
    lat: number;
    long: number;
  }

  constructor() {
    this.name = faker.company.companyName();
    this.slogan = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      long: +faker.address.longitude(),
    }
  }
}
