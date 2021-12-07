import { Engine } from '.';

export class Stage {
    engines: Engine[];

    constructor(engines: Engine[]) {
        this.engines = engines;
    }
}
