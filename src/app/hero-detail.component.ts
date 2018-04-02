import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector:"hero-detail",
	providers:[HeroService],
	template:`	
  		<div *ngIf="hero">
  			<div class="nav">
  				<span class="back" (click)="goBack()"><</span>
  				<span class="hero">{{hero.name}}</span>
  			</div>
  			<div class="header-con">
  				<span class="name">{{hero.name}}</span>
  				<span class="job">{{hero.job}}</span>
  			</div>
  			<div class="header">
  				<img src="{{hero.bgpic}}">
  			</div>
  			<div class="history">
  				<span class="tit">历史上的他</span>
  				<div class="cont"  id="hiscont">{{hero.history}}</div>
  				<span class="open" (click)="openHistory()" >展开</span>
  			</div> 
  			<div class="bgcolor"></div>
  			<div class="history">
  				<span class="tit">背景故事</span>
  				<div class="cont"  id="bgcont">{{hero.bgstory}}</div>
  				<span class="open" (click)="openBgstory()" >展开</span>
  			</div>
	`,
	styles:[`
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

export class HeroDetailComponent implements OnInit{
	hero:Hero;

	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	    .subscribe(hero => this.hero = hero);
	}

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	goBack(){
		this.location.back();
	}
	openHistory(){
		var hiscont = document.getElementById("hiscont");
		if(hiscont.style.display==="block"){
			hiscont.style.display="-webkit-box";
		}else{
			hiscont.style.display="block";
			hiscont.style.height="auto";
		}		
	}
	openBgstory(){
		var bgcont = document.getElementById("bgcont");
		if(bgcont.style.display==="block"){
			bgcont.style.display="-webkit-box";
		}else{
			bgcont.style.display="block";
			bgcont.style.height="auto";
		}		
	}
}
