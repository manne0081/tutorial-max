import {
  Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <div>
      {{ name }}
    </div>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('On Changes...');
    console.log(changes);
    console.log(changes['name'].previousValue + '  >  ' + changes['name'].currentValue);
  }

  ngOnInit() {
    console.log('On Init...');
  }

  ngDoCheck() {
    console.log('Do Check...');
  }

  ngAfterContentInit() {
    console.log('After Content Init...');
  }

  ngAfterContentChecked() {
    console.log('After Content Checked...');
  }

  ngAfterViewInit() {
    console.log('After View Init...');
  }

  ngAfterViewChecked() {
    console.log('After View Checked...');
  }

  ngOnDestroy() {
    console.log('On Destroy...');
  }

}
