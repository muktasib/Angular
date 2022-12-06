import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="scrolling-text" [@scroll]="state" (@scroll.done)="scrollDone()">Scrolling text!</div>
    </div>
  `,

  styles: [ `
    .container {
      height: 30px;
      overflow: hidden;
      position: relative;
      width: 100%;
    }
    .scrolling-text {
      position: absolute;
      white-space: nowrap;
    }
  `,
  ],

  animations: [
    trigger('scroll', [
      state('on', style({ left: '-100px' })),
      transition('* => *', [
        style({ left: '-100px' }),
        animate(7000, style({ left: '100%' })),
      ]),
    ]),
  ],
  
})
export class AppComponent {
  state = 0;

  scrollDone() {
    this.state++;
  }
}
