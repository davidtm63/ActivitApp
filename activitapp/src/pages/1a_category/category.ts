import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../1_home/home';
import { GlobalsProvider } from "../../providers/globals/globals";
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  
})
export class CategoryPage {
  
  // esports : number = 0;
  // Musica : number = 0;
  // Cuina : number = 0;
  // Nens : number = 0;
  // Art : number = 0;
  // Altres : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globals: GlobalsProvider) {
  }

  homePage(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  check1(){
    if (this.globals.Esports == 0) this.globals.Esports = 1;
    else this.globals.Esports = 0;
  }
  check2(){
    if (this.globals.Musica == 0) this.globals.Musica = 1;
    else this.globals.Musica = 0;
  }
  check3(){
    if (this.globals.Cuina == 0) this.globals.Cuina = 1;
    else this.globals.Cuina = 0;
  }
  check4(){
    if (this.globals.Nens == 0) this.globals.Nens = 1;
    else this.globals.Nens = 0;
  }
  check5(){
    if (this.globals.Art == 0) this.globals.Art = 1;
    else this.globals.Art = 0;
  }
  check6(){
    if (this.globals.Altres == 0) this.globals.Altres = 1;
    else this.globals.Altres = 0;
  }

}
