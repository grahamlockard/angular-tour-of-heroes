import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    //  ActivatedRoute holds the info about the route to tihs instance.
    //  Hero Detail Component is interested in the routes bag of parameters extracted from the URL.
    //  The "id" parameter is the id of the hero to diplay
    private route: ActivatedRoute,
    //  The hero service gets hero data from the remote server and this component will use it to get the hero-to-display
    private heroService: HeroService,
    //  The location is an Angular service for interacting with the browser.
    //  This can be used to navigate back to the view that navigated here
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    //  The route.snapshot is a static image of the route information shortly after the component was created.
    //  The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
