import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('closed', style({ height: 0, opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '100%', opacity: 1 })),
      transition('closed => open', [
        animate('550ms'), style({transform: 'translateY(0%)'})])
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  @Input() isMobile: boolean;
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
