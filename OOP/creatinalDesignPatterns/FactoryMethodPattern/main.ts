import { FreightRocketFactory } from './class/FreightRocketFactory';
import { RocketFactory } from './class/rocketFactory';

let rocketFactory = new FreightRocketFactory();
let rocket = rocketFactory.buildRocket();
let rocket2 = rocketFactory.buildRocket();
let rocket3 = rocketFactory.buildRocket();
console.log(JSON.stringify(rocket3, null, 2));
