import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { PlanetService } from '../../data/planet/planet.service';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  planet: any;
  planets: Array<any>;
  selectedPlanet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public planetService: PlanetService) {
    this.planet = navParams.get('planet');
  }


  itemTapped(event, planet) {
    this.navCtrl.push(ListPage, {
      planet: planet
    });
  }

  ngOnInit() {
    this.planetService.getPlanets().subscribe(planets => {
      this.planets = planets.results;
      console.log(this.planets);
    });
  }
}