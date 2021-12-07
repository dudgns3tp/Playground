import { FirstStage } from './firstStage';
import { RocketFactory } from './rocketFactory';
import { Satellite } from './satellite';
import { SecondStage } from './secondStage';

type FreightRocketStages = [FirstStage, SecondStage];

export class FreightRocketFactory extends RocketFactory {
    nextSatelliteId = 0;

    createPayload(): Satellite {
        return new Satellite(this.nextSatelliteId++);
    }
    createStages(): FreightRocketStages {
        return [new FirstStage(), new SecondStage()];
    }
}
