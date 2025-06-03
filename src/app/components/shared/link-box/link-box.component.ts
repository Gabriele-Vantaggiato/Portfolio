import { Component, Input } from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-link-box',
  imports: [
    UpperCasePipe,
    RouterLink
  ],
  templateUrl: './link-box.component.html',
  styleUrl: './link-box.component.css'
})
export class LinkBoxComponent {
    @Input() title: string = '';
    @Input() redirectUrl: string = '';
}
