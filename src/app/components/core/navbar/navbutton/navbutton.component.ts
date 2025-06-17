import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HlmButtonDirective} from '@spartan-ng/helm/button';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-navbutton',
  imports: [
    RouterLink,
    RouterLinkActive,
    HlmButtonDirective,
    TranslatePipe
  ],
  templateUrl: './navbutton.component.html',
  styleUrl: './navbutton.component.css'
})
export class NavbuttonComponent {
    @Input() text = '';
    @Input() url = '';
}
