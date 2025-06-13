import { Component, Input } from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-link-box',
  imports: [
    UpperCasePipe,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './link-box.component.html',
  styleUrl: './link-box.component.css'
})
export class LinkBoxComponent {
    @Input() title: string = '';
    @Input() redirectUrl: string = '';
}
