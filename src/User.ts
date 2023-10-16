import { faker } from '@faker-js/faker';
import { Mappable } from './customMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
    <h1>
    Username is: ${this.name}
    </h2>
    `;
  }
}
// console.log(faker.person.firstName());
