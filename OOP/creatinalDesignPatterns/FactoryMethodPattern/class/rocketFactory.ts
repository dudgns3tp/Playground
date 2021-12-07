import { Engine, Payload, Stage } from '.';
import { Rocket } from './rocket';

export class RocketFactory {
    buildRocket(): Rocket {
        const payload = this.createPayload();
        const stages = this.createStages();
        const rocket = this.createRocket(payload, stages);
        // rocket.payload = payload;
        // rocket.stages = stages;
        return rocket;
    }
    createRocket(payload: Payload, stages: Stage[]): Rocket {
        return new Rocket(payload, stages);
    }

    createPayload(): Payload {
        return new Payload(0);
    }

    createStages(): Stage[] {
        const engine = new Engine(1000);
        const stage = new Stage([engine]);
        return [stage];
    }
}
