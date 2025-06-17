import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
//TODO: per deploy mettere il path per intero
// import {HlmButtonDirective} from '../../../../../../libs/ui/ui-button-helm/src/lib/hlm-button.directive';
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
