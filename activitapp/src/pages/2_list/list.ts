import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { MapPage } from '../2_map/map';
import { GlobalsProvider } from '../../providers/globals/globals';
import { DetailPage } from "../3_detail/detail";
import { HomePage } from "../1_home/home";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

countries : any;
errorMessage : string;
a : number;
order: number = 1;
column : string = 'modified';

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:RestProvider,public globals: GlobalsProvider) {
  }

  ionViewDidLoad(){
    this.getCountries();
    var date = new Date(this.globals.desde);
    console.log(date);
  }

  ListClick(item){
    this.navCtrl.push(DetailPage,{
      item:item
    });
  }

  HomePage(){
    this.globals.Esports = 0;
    this.globals.Altres = 0;
    this.globals.Art = 0;
    this.globals.Cuina = 0;
    this.globals.Musica = 0;
    this.globals.Nens = 0;

    this.globals.girona = 0;
    this.globals.francia = 0;
    this.globals.lleida = 0;
    this.globals.andorra = 0;

    this.navCtrl.setRoot(HomePage);
  }
getCountries(){
    this.rest.getCountries().subscribe(
      countries => {
        this.countries = (countries);                        
          var inicioAct = new Date(this.globals.desde);
          var finAct = new Date(this.globals.hasta);

        
        this.countries = this.countries.filter((item) => {
          var dateStart = new Date(item.acf.startDate.substr(0,4)+"-"+
                                   item.acf.startDate.substr(4,2)+"-"+
                                   item.acf.startDate.substr(6,2));
          var dateEnd = new Date(item.acf.endDate.substr(0,4)+"-"+
                                   item.acf.endDate.substr(4,2)+"-"+
                                   item.acf.endDate.substr(6,2));
          return ((this.globals.francia == 1 && item.acf.province.toLowerCase()=='southfrance') 
          || (this.globals.girona == 1 && item.acf.province.toLowerCase()=='girona')
          || (this.globals.andorra == 1 && item.acf.province.toLowerCase()=='andorra')
          || (this.globals.lleida == 1 && item.acf.province.toLowerCase()=='lleida')
          || (inicioAct <= dateStart  && dateEnd <= finAct)
          || (inicioAct <= dateStart && finAct <= dateEnd && finAct >= dateStart)
          || (inicioAct >= dateStart && inicioAct <= dateEnd && finAct >= dateEnd)
          || (this.globals.francia == 0 
            && this.globals.girona == 0 
            && this.globals.andorra == 0 
            && this.globals.lleida == 0
            && inicioAct.toDateString() == "Thu Jan 01 1970"));
        });
      },
      error => this.errorMessage = <any>error); 
  }

  MapPage(){
    this.navCtrl.setRoot(MapPage);
  }

}
