import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] 
})

export class HeroesComponent implements OnInit{ 
  title = 'Peoples';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router ,
    private heroService: HeroService) { }

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => {
      this.heroes = heroes;
      console.log(heroes);
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    if(this.selectedHero === hero)
    {
      this.selectedHero = null;
    }else{
      this.selectedHero = hero;
    }
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 }

