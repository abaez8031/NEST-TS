// To use this library, you can install it by running:

// npm install @faker-js/faker@7.6.0

// You'll then need to update all of your imports:

// import { faker } from "@faker-js/faker";

import { faker } from "@faker-js/faker";

// Sometimes we need to install type definition files for JS libraries we use in TS project by npm install @types/library_name

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat = parseFloat(faker.address.latitude());
      lng = parseFloat(faker.address.longitude())
    };
  }
}
