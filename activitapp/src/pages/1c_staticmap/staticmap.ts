import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalsProvider } from "../../providers/globals/globals";
import { HomePage } from "../1_home/home";
/**
 * Generated class for the StaticmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staticmap',
  templateUrl: 'staticmap.html',
})
export class StaticmapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public globals:GlobalsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticmapPage');
  }

  homePage(){
    this.navCtrl.setRoot(HomePage);
  }

  clickFrancia(){
    if (this.globals.francia == 0) this.globals.francia = 1;
    else this.globals.francia = 0;
    
  }
  clickGirona(){
    if (this.globals.girona == 0) this.globals.girona = 1;
    else this.globals.girona = 0;
  }
  clickLleida(){
    if (this.globals.lleida == 0) this.globals.lleida = 1;
    else this.globals.lleida = 0;
  }
  clickAndorra(){
    if (this.globals.andorra == 0) this.globals.andorra = 1;
    else this.globals.andorra = 0;
  } 

}
