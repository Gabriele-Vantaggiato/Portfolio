import {Component, Input} from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  imports: [
    UpperCasePipe,
    TranslatePipe
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  @Input() bgImg = '';
  @Input() serviceTitle = '';
  @Input() description = '';
}
