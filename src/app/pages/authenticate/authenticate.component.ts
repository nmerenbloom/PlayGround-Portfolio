import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({transform: 'translateY(+100%)'}),
        animate('500ms ease-in', style({transform: 'translateY(0%)'}))
      ])
    ])
  ]
})
export class AuthenticateComponent implements OnInit {
  newUser = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.newUser = !this.newUser;
  }

}
