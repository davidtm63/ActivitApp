import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { CategoryPage } from '../1a_category/category';
import { CalendarPage} from '../1b_calendar/calendar';
import {ListPage} from '../2_list/list';
import {MapPage} from '../2_map/map';
// import { CalendarModule, CalendarModalOptions, CalendarResult, CalendarModal } from "ion2-calendar";
// import { CalendarComponentOptions } from "ion2-calendar";
import { StaticmapPage } from "../1c_staticmap/staticmap";
import { GlobalsProvider } from "../../providers/globals/globals";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public globals: GlobalsProvider) {

  }
  pageCat(){
    this.navCtrl.setRoot(CategoryPage);
    }
   pageSMap(){
    this.navCtrl.setRoot(StaticmapPage);
   }
   pageCal(){
    this.navCtrl.setRoot(CalendarPage);
   }
   listPage(){
     this.navCtrl.setRoot(ListPage);
   }

   mapPage(){
    this.navCtrl.setRoot(MapPage);
   }

}
