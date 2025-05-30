import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import NavbarComponent from './components/core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router = inject(Router)
}
