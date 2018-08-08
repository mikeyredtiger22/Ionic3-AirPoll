import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';
import {ComponentsModule} from "../../components/components.module";
import {GoogleMapsComponent} from "../../components/google-maps/google-maps";

@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
    // ComponentsModule,
  ],
  exports: [
    MapsPage,
  ]
  // entryComponents: [ GoogleMapsComponent ],

})
export class MapsPageModule {}
