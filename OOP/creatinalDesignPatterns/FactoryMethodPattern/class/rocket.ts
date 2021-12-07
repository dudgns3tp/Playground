import { Payload, Stage } from '.';

export class Rocket {
    payload: Payload;
    stages: Stage[];

    constructor(payload: Payload, stages: Stage[]) {
        this.payload = payload;
        this.stages = stages;
    }
}
