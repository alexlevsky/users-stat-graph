import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

interface CardItem {
  title: string;
  text: string;
}

export class MainComponent implements OnInit {
  str1 = 'Brainstorming';
  str2 = 'for desired perfect Usability';
  str3 = 'AppCo';
  str4 = 'Our design projects are fresh and simple and will denefit your business greatly. Learn more about our work!';
  str5 = 'Views Stats';
  str6 = 'Enter your email';
  str7 = 'Subscribe';
  title1 = 'Clean Design';
  title2 = 'Secure Data';
  title3 = 'Retina Ready';
  text1 = 'Increase sales by showing true dynamics of your website.';
  text2 = 'Build your online store’s trust using Social Proof & Urgency.';
  text3 = 'Realize importance of social proof in customer\’s purchase decision.';
  str: CardItem[] = [
    { title: this.title1, text: this.text1  },
    { title: this.title2, text: this.text2  },
    { title: this.title3, text: this.text3  }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
