import { Component, OnInit } from '@angular/core';

interface CardItem {
  title: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  titleTextStart = 'Brainstorming';
  titleTextEnd = 'for desired perfect Usability';
  logoText = 'AppCo';
  titleSubText = 'Our design projects are fresh and simple and will denefit your business greatly. Learn more about our work!';
  titleButtonText = 'Views Stats';
  middleText = 'small business owners love';
  str6 = 'Enter your email';
  subscribe = 'Subscribe';
  title1 = 'Clean Design';
  title2 = 'Secure Data';
  title3 = 'Retina Ready';
  text1 = 'Increase sales by showing true dynamics of your website.';
  text2 = 'Build your online store’s trust using Social Proof & Urgency.';
  text3 = 'Realize importance of social proof in customer\’s purchase decision.';
  iconPath1 = 'assets/icon1.png';
  iconPath2 = 'assets/icon2.png';
  iconPath3 = 'assets/icon3.png';
  items: CardItem[] = [
    { icon: this.iconPath1, title: this.title1, text: this.text1  },
    { icon: this.iconPath2, title: this.title2, text: this.text2  },
    { icon: this.iconPath3, title: this.title3, text: this.text3  }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
