import { Observable, subscribeOn, Subscriber } from 'rxjs';

const observable: Observable<any> = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('just before subscribe');

observable.subscribe({
    next(x) {
        console.log('got value' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    },
});

console.log('just after subscribe');

const foo = new Observable((subscriber) => {
    console.log('hello');
    subscriber.next(42);
    subscriber.next(100);
    subscriber.next(200);
});

foo.subscribe((x) => {
    console.log(x);
});
