import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {IServices} from '../../models/IServices';
import {INIT_SERVICE} from '../../constants';
import {ServicesComponent} from './services/services.component';
import {LinkBoxComponent} from '../../components/shared/link-box/link-box.component';

@Component({
  selector: 'app-about',
  imports: [
    NgOptimizedImage,
    ServicesComponent,
    LinkBoxComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
    services: IServices[] = INIT_SERVICE;
}
