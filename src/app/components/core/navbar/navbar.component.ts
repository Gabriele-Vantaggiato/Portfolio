import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NavitemComponent} from './navitem/navitem.component';
import {routes} from '../../../app.routes';
import {NavbuttonComponent} from './navbutton/navbutton.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavitemComponent,
    NavbuttonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('hamburgerX', [
      /*
        state hamburguer => is the regular 3 lines style.
        states topX, hide, and bottomX => used to style the X element
      */
      state('hamburger', style({})),
      // style top bar to create the X
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      // hides element when create the X (used in the middle bar)
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      // style bottom bar to create the X
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [
        animate('0.2s'), // controls animation speed
      ]),
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('300ms ease-out', style({transform: 'translateY(0)', opacity: 1})),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)', opacity: 0})),
      ]),
    ]),
  ]
})
export default class NavbarComponent {

  isOpen = false;
  protected readonly routes = routes;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


}
