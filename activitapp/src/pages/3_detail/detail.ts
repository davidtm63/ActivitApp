import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../2_map/map"; 
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public params : NavParams) {
    this.item = params.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  mapPage(){
    this.navCtrl.setRoot(MapPage);
  }

}
