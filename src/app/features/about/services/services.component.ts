import {Component, Input} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  @Input() bgImg = '';
  @Input() serviceTitle = '';
  @Input() description = '';
}
