import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navitem',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './navitem.component.html',
  styleUrl: './navitem.component.css'
})
export class NavitemComponent {
  @Input() title = '';
  @Input() href = '';
  @Input({required: true}) last: any;
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter();
}
