import { Component } from '@angular/core';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';
import NavbarComponent from '../core/navbar/navbar.component';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {PersonalDescriptionComponent} from '../shared/personal-description/personal-description.component';

@Component({
  selector: 'app-hero',
  imports: [
    NavbarComponent, TranslatePipe,
    PersonalDescriptionComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export default class HeroComponent {

}
