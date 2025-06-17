import { Component } from '@angular/core';
import {HlmButtonDirective} from '@spartan-ng/helm/button';
import NavbarComponent from '../core/navbar/navbar.component';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {PersonalDescriptionComponent} from '../shared/personal-description/personal-description.component';
import {SocialIconComponent} from './social-icon/social-icon.component';
import {INIT_SOCIAL_ICONS} from '../../constants';

@Component({
  selector: 'app-hero',
  imports: [
    NavbarComponent, TranslatePipe,
    PersonalDescriptionComponent, SocialIconComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export default class HeroComponent {
    public socialIcons = INIT_SOCIAL_ICONS;
}
