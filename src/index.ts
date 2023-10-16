import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './customMap';

const user = new User();
const company = new Company();

// console.log(user, company);

const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
