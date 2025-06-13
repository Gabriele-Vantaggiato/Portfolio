import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import NavbarComponent from './components/core/navbar/navbar.component';
import {TranslateService} from '@ngx-translate/core';
import {LocaleDetectorService} from './services/locale-detector.service';

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
  translate = inject(TranslateService)
  localeDetector = inject(LocaleDetectorService)

  constructor() {
    this.translate.setDefaultLang('it');
    this.localeDetector.detectCountry().subscribe(code => {
      const lang = (code?.toUpperCase() === 'IT' ) ? 'it' : 'en';
      this.translate.use(lang);
    });
  }

  onActivate(event: any) {
    window.scrollTo(0, 0);
  }
}
