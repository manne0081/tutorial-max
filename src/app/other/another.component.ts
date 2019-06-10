import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <h4>Content des app-another templates</h4>
    <ng-content></ng-content>  <!-- wird übergeben > von dort, wo app-another verwendet wird -->
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
