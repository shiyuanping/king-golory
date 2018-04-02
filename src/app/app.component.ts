import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component'

@Component({
  selector: 'app-root',
  template:`
    <nav>
      <div class="navbar">
        <ul>
          <li><a routerLink="">最新</a></li>
          <li><a routerLink="">赛事</a></li>
          <li><a routerLink="heroes">英雄</a></li>
          <li><a routerLink="">活动</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles:[`
    .navbar{
      width:100%;
      height:40px;
      line-height:40px;
      background-color:#eee;
    }
    li{
      float:left;
      width:25%;
      text-align:center;
    }
  `]
})

export class AppComponent {
}

