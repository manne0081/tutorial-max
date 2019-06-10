import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div (click)="onClick()">
      Klick!
    </div>
  `,
  styles: [`
    div {
      width: 100px;
      height: 50px;
      background-color: gold;
      text-align: center;
    }
  `]
})

export class EventBindingComponent implements OnInit {

  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit('Neuer Text...')
  }

}
