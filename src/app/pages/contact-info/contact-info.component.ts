import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  download(): void {
    window.open('../assets/Noah Merenbloom Resume 5-13-20.pdf');
  }

}
