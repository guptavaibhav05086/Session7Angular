import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-observables-example',
  templateUrl: './observables-example.component.html',
  styleUrls: ['./observables-example.component.css']
})
export class ObservablesExampleComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  //Rxjs Operators 
  MapOperatorExmple() {
    //This will create an observale
    const nums = of(1, 2, 3);

    //This is the map operator which will accept the values emit by the
    //observalbes, modify them and returns a new observable
    const squareValues = map((val: number) => val * val);

    //Passing the observables into the map opretor 
    const squaredNums = squareValues(nums);

    //Subscribing to the observables returned by the map operator
    squaredNums.subscribe(x => console.log(x));
  }
  pipeOperatorExmple() {
    const nums = of(1, 2, 3, 4, 5);

    // Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

    // Subscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
  }

  sequenceSubscriber(observer) {
    debugger;
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return { unsubscribe() { } };
  }

  //Sequence Deliver Observables
  CallObservables() {
    debugger;
    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(this.sequenceSubscriber);

    // execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) { 
        debugger;
        console.log(num); 
      },
      complete() { console.log('Finished sequence'); }
    });
  }

  //Event Attachment Through Observables
  ObservableEventHandler(elementName) {
    debugger;
    const ESC_KEY = 27;
    const nameInput = document.getElementById(elementName) as HTMLInputElement;

    const subscription = this.fromEvent(nameInput, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        debugger;
        if (e.keyCode === ESC_KEY) {
          nameInput.value = '';
        }
      });

  }
  fromEvent(target, eventName) {
    return new Observable((observer) => {
      debugger;
      const handler = (e) => observer.next(e);

      // Add the event handler to the target
      target.addEventListener(eventName, handler);

      return () => {
        // Detach the event handler from the target
        target.removeEventListener(eventName, handler);
      };
    });
  }

}
