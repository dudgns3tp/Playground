import { range } from 'rxjs';
import { filter, take, map, toArray } from 'rxjs/operators';

range(1, 20) //Observable -> Operator(순수 함수들)
    .pipe(
        filter((n) => n % 2 === 0),
        take(5),
        map((n) => Math.pow(n, 2)),
        toArray(),
        map((arr) => arr.join(', '))
    )
    .subscribe(console.log);
