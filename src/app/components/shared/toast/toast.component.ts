import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [
    NgClass
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnChanges {

  @Input() type: 'SUCCESS' | 'WARNING' | 'ERROR' | '' = '';
  @Input() description: string = '';
  @Input() show: boolean = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchanges', changes);
  }
}
