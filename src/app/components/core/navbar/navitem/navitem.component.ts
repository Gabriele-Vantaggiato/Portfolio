import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-navitem',
  imports: [
    RouterLink,
    TranslatePipe,
    RouterLinkActive
  ],
  templateUrl: './navitem.component.html',
  styleUrl: './navitem.component.css'
})
export class NavitemComponent {
  @Input() title = '';
  @Input() href = '';
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter();
}
