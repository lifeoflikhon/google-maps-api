import { CustomMap } from "./models/CustomMap";
import { User } from "../models/User";
import { Company } from "./models/Company";

const user = new User();
const company = new Company();

const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);
