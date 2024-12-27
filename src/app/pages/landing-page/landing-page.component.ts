import { Component, OnInit } from '@angular/core';

export interface ProjectCard {
  title: string;
  imgPath: string;
  desc: string;
  href: string;
  buttonText: string;
  bold?: boolean;
  boldText?: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  // s =

  cards: ProjectCard[] = [
    {
      title: 'Github Public API React App',
      imgPath: '../../assets/githubLogo.png',
      href: 'https://github-react-app-b1ab9.web.app/',
      // tslint:disable-next-line:max-line-length
      desc: `${'Built with React, this application demonstrates "Reactive" components, hooks, and state. It consumes the Github public API and returns a user\'s public repos- just type in their username!'}`,
      buttonText: 'Go To Application',
    },
    {
      title: 'React-NodeJs-SQLite Countries',
      imgPath: '../../assets/globe.png',
      href: 'http://noah-countries.azurewebsites.net/',
      // tslint:disable-next-line:max-line-length
      desc: `${'This app is a React front-end app, with a Node/ExpressJs BFF layer that defines REST endpoints. The data is selected using SQL queries. The app is wrapped in a Docker container and hosted on a Microsoft Azure server.'}`,
      buttonText: 'Go To Application',
    },
    {
      title: 'Angular Recipe Book App',
      imgPath: '../../assets/burger2.png',
      href: 'https://ng-course-recipe-book-87fed.web.app',
      // tslint:disable-next-line:max-line-length
      desc: `${'Built with Angular 9, this application is the culmination of a 33-hour course by Udemy.com. I utilized routing, services, NgRx, authentication, and more.'}`,
      buttonText: 'Go To Application',
    },
    {
      title: 'Zuudoo.com',
      imgPath: '../../assets/Zuudoo-01_trimmed.png',
      href: 'https://www.zuudoo.com/',
      desc:
        // tslint:disable-next-line:max-line-length
        `${'As an intern at the exciting, Raleigh-based startup Zuudoo.com, Front-end Developer, and Director of QA/Testing were just a few of my many titles.'}`,
      bold: true,
      boldText: 'Note: site is no longer maintained.',
      buttonText: 'Check out Zuudoo!',
    },
    {
      title: 'COMP 535 Final Paper',
      imgPath: '../../assets/overflow.png',
      href: '../../assets/Merenbloom_Noah_ 535.pdf',
      // tslint:disable-next-line:max-line-length
      desc: `${'This essay, written for a course in Computer Security, explores buffer overflow attacks adn countermeasures used to prevent this common exploit.'}`,
      buttonText: 'Learn about Buffer Overflows',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
