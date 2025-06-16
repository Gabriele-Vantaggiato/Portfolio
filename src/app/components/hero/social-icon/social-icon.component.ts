import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-icon',
  imports: [],
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.css'
})
export class SocialIconComponent {
    @Input({required: true}) url = '';
    @Input({required: true}) imgPath = '';
    @Input({required: true}) alt  = '';
}
