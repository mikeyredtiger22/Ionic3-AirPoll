import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GoogleMapsComponent } from "../../components/google-maps/google-maps";

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild(GoogleMapsComponent) mapComponent: GoogleMapsComponent;

  constructor(public navCtrl: NavController) {

  }

  testMarker() {
    let center = this.mapComponent.map.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());
  }
}
