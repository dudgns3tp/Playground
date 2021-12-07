import { Engine, Stage } from '.';

export class SecondStage extends Stage {
    constructor() {
        super([new Engine(1000)]);
    }
}
