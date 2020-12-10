import * as faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  }

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      long: +faker.address.longitude(),
      lat: +faker.address.latitude()
    }
  }
}
