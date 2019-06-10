import {Component, ElementRef, OnInit, ViewChild, ContentChild} from '@angular/core';

@Component({
  selector: 'app-next-other',
  template: `
    <h3>ViewChild & ContentChild</h3>
    <input type="text" value="Irgendein Text" #i>
    <ng-content></ng-content>
  `,
  styles: []
})
export class NextOtherComponent implements OnInit {
  @ViewChild('i') input: ElementRef;
  @ContentChild('paragraph') paragraph: ElementRef;

  constructor() {
    setTimeout(() => {
      this.input.nativeElement.value = 'Wert überschreiben';
      this.paragraph.nativeElement.innerText = 'Wert überschreiben';
    }, 3000);
  }

  ngOnInit() {
  }

}
