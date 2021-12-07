import { Payload } from '.';

export class Satellite extends Payload {
    constructor(public id: number) {
        super(200);
    }
}
