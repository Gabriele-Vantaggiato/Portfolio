import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {IServices} from '../../models/IServices';
import {INIT_SERVICE} from '../../constants';
import {ServicesComponent} from './services/services.component';
import {LinkBoxComponent} from '../../components/shared/link-box/link-box.component';
import {BlackSeparatorComponent} from '../../components/shared/black-separator/black-separator.component';
import {
  PersonalDescriptionComponent
} from '../../components/shared/personal-description/personal-description.component';

@Component({
  selector: 'app-about',
  imports: [
    ServicesComponent,
    LinkBoxComponent,
    BlackSeparatorComponent,
    NgClass,
    PersonalDescriptionComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
    services: IServices[] = INIT_SERVICE;
}
