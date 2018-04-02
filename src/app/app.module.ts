import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {
       	path:'heroes',
       	component:HeroesComponent
       },{
        path:'detail/:id',
        component:HeroDetailComponent
       }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
