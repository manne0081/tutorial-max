import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      {{ nameI }}
      {{ nameII }}
    </p>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  @Input() nameI: string;
  @Input() nameII: string;

  constructor() {
    console.log('property-binding constructor...')
  }

  ngOnInit() {
  }

}
