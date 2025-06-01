import { Component } from '@angular/core';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';
import NavbarComponent from '../core/navbar/navbar.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [
    HlmButtonDirective,
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export default class HeroComponent {

}
