import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  providers:[HeroService],
  template:`

  <div class="list" id="list" >
  	<div class="title">
  		<span>本周数据 (01.15-01.21)</span>
  		<span>出场率</span>
  		<span>胜率</span>
  	</div>
  	<ul>
  		<li *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]">
  			<div class="pic"><img src="{{hero.pic}}"></div>
  			<div class="name">
  				<div>{{hero.name}}</div>
  				<div>{{hero.job}}</div>
  			</div>
  			<span class="attendrate">{{hero.attendrate}}</span>
  			<span class="winrate">{{hero.winrate}}</span>		
  		</li>
  	</ul>
  </div>

  `,
  styles:[`
  	.header{
  		text-align:center;
  		border-bottom:1px solid #eee;
  		color:#434343;
  		padding:8px;
  	}
  	.list{
  		height:auto;
  		color:#444444;
  		font-size:14px;

  	}
  	.title{
  		height:34px;
  		line-height:34px;
  		color:#9a9a9a;
  		font-size:13px;
  		border-bottom:1px solid #eee;
  	}
  	.title span:nth-child(1){
  		margin-left:6%;
  	}
  	.title span:nth-child(2){
  		float:right;
  		margin-right:10%;
  	
  	}
  	.title span:nth-child(3){
  		float:right;
  		margin-right:7%;
		color:#c8a77b;
  	}
  	.list li{
  		box-sizing:border-box;
  		height:80px;
  		padding-top:12px;
  		border-bottom:1px solid #eee;
  	}
  	.pic{
  		float:left;
  		margin-left:6%;
  	}
  	.pic img{
  		width:54px;
  		height:54px;
  		border-radius:0 5px 0 5px;
  	}
  	.name{
  		float:left;
  		font-size:16px;
  		padding:5px 0;
  		margin-left:16px;
  	}
  	.name div:nth-child(2){
  		color:#9a9a9a;
  		font-size:14px;
  		margin-top:2px;
  	}
  	.winrate{
  		float:right;
  		margin-right:6%;
  		margin-top:14px;
  		display:inline-block;
  		color:#c8a77b;
  	}
  	.attendrate{
  		float:right;
  		margin-right:10%;
  		margin-top:14px;
  		text-align:center;
  	}

    .nav{
      height:42px;
      line-height:42px;
    }
    .nav .back{
      font-size:22px;
      font-weight:bold;
      color:#b28652;
      margin-left:2%;
      cursor:pointer;
    }
    .nav .hero{
      width:30%;
      text-align:center;
      float:right;
      margin-right:35%;
      font-size:20px;
      color:#363636;
    }
    .header{
      width:100%;
      height:200px;
      overflow:hidden;
    }
    .header img{
      width:120%;
      height:240px;
      margin-left:-20%;
      margin-bottom:-20px;
    }
    .header-con{
      position:relative;
      color:#fff9ff;
      font-size:17px;
    }
    .header-con .name{
      position:absolute;
      left:5%;
      top:120px;
    }
    .header-con .job{
      position:absolute;
      left:5%;
      top:145px;
      font-size:14px;
    }
    .history{
      padding:2% 5%;
      overflow:hidden;
    }
    .history .tit{
      display:block;
      width:100%;
      height:28px;
      color:#b28652;
    }
    .history .cont{
      width:100%;
      color:#363636;
      padding-top:5px;
      border-top:1px solid #e4e4e4;

      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:3;
      overflow:hidden;
    }
    .history .open{
      float:right;
      height:24px;
      color:#b28652;
      margin-top:5px;
      font-weight:bold;
      font-size:15px;
    }
    .bgcolor{
      width:100%;
      height:10px;
      background-color:#f4f5ed;
    }
  `]
})

export class HeroesComponent implements OnInit{
  title = '全服英雄';
  heroes:Hero[];
  selectedHero:Hero;

  constructor(private heroService:HeroService){}

  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
    var list = document.getElementById("list");
    list.style.display="none";
  }

}




