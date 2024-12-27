import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wavy-container',
  templateUrl: './wavy-container.component.html',
  styleUrls: ['./wavy-container.component.css']
})
export class WavyContainerComponent {
  // tslint:disable-next-line:variable-name
  @Input() fill_color: string;

}
