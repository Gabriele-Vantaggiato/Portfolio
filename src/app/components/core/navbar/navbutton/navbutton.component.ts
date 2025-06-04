import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-navbutton',
  imports: [
    RouterLink,
    RouterLinkActive,
    HlmButtonDirective
  ],
  templateUrl: './navbutton.component.html',
  styleUrl: './navbutton.component.css'
})
export class NavbuttonComponent {
    @Input() text = '';
    @Input() url = '';
}
