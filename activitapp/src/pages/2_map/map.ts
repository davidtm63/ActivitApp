import { Component,ViewChild,ElementRef } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
//import { GESTURE_PRIORITY_TOGGLE } from 'ionic-angular/gestures/gesture-controller';
import { ListPage } from "../2_list/list";
import { RestProvider } from '../../providers/rest/rest';
// import { map } from 'rxjs/operator/map';
import { DetailPage } from '../3_detail/detail';
import { GlobalsProvider } from "../../providers/globals/globals";
import { HomePage } from "../1_home/home";
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// https://ionicframework.com/docs/native/geolocation/

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
countries : any;
errorMessage: string;

mapLocation : any;
map : any;
infoWindows : any;
title : any;
infoWindowContent : any; 
item:any;
@ViewChild('map') mapRef: ElementRef;

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public globals: GlobalsProvider, public geolocation: Geolocation) {
  }
  ListPage(){
    this.navCtrl.setRoot(ListPage);
  }
  HomePage(){
    this.navCtrl.setRoot(HomePage);
  }
  DetailPage(id){
    // O+ : Recorremos el countries, buscando que elemento coincide con el 
    // id seleccionado. Una vez lo encontramos, nos lo guardamos y 
    // llamamos a la pagina de detalle pasandole el item encontrado
    var item: any;
    for (let c of this.countries){
      if (c.id == id)
        item = c;
    }
    this.navCtrl.push(DetailPage,{
      item:item
    });
  }
  // ListClick(item){
  //   this.navCtrl.push(DetailPage,{
  //     item:item
  //   });
  // }
  ionViewDidLoad() {
    this.showMap();
    this.getCountries();
    this.infoWindows = [];
  }
 
  getCountries(){
    this.rest.getCountries().subscribe(
      countries =>{this.countries = (countries)
        this.addMarker();
      },
      error => this.errorMessage = <any>error);
    
  }
  showMap(){
    // const location = new google.maps.LatLng(51.507351,-0.127758);
    const location2 = new google.maps.LatLng(41.385064,2.173403);

    const options = {
      center: location2,
      zoom: 7
    };
  
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);

    this.addMarker();

  }

addMarker(){
    if(this.countries != null){
      for(let c of this.countries){
        if((this.globals.Esports == 1 && c.acf.category.includes('sport')) 
        || (this.globals.Musica == 1 && c.acf.category.includes('music')) 
        || (this.globals.Art == 1 && c.acf.category.includes('art')) 
        || (this.globals.Cuina == 1 && c.acf.category.includes('gastronomy')) 
        || (this.globals.Nens == 1 && c.acf.category.includes('kids'))){
        var position = new google.maps.LatLng(parseFloat(c.acf.map.lat),parseFloat(c.acf.map.lng));
        var dogwalkMarker = new google.maps.Marker({position:position});
        dogwalkMarker.setMap(this.map);
        // this.markerslist.push(dogwalkMarker);
        this.infoWindowContent =  '<div id="content" lang="'+c.id+'"><h6>' + c.title.rendered+'</h6><p>\n'+c.acf.city+'</p></div>';
        this.addInfoWindowToMarker(dogwalkMarker);  
        }else{
          if(this.globals.Esports == 0 && 
            this.globals.Musica == 0 && 
            this.globals.Art == 0 && 
            this.globals.Cuina == 0 &&
            this.globals.Nens == 0){
              var position = new google.maps.LatLng(parseFloat(c.acf.map.lat),parseFloat(c.acf.map.lng));
              var dogwalkMarker2 = new google.maps.Marker({position:position});
              dogwalkMarker2.setMap(this.map);
              // this.markerslist.push(dogwalkMarker);
              this.infoWindowContent =  '<div id="content" lang="'+c.id+'"><h6>' + c.title.rendered+'</h6><p>\n'+c.acf.city+'</p></div>';
              this.addInfoWindowToMarker(dogwalkMarker2);  
            }
        }
      }
    }
  }

  addInfoWindowToMarker(marker) {
    var infoWindow = new google.maps.InfoWindow({
      content: this.infoWindowContent
    });
    var self = this;
    google.maps.event.addListener(infoWindow, 'domready', function() {
      document.getElementById("content").addEventListener("click", function(e) {
        // Aqui es el click en la burbujita
        // openPiso abre una nueva pagina
        // En vuestro caso deberia ser el detalle de la actividad
        // self.DetailPage();
        
        //O+ : Le pasamos el id para abrir el detalle. El id lo hemos guardado
        // en el lang del div
        console.log("IdSeleccionado "+this.lang);
        self.DetailPage(this.lang);
      });
  });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
  
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  ngAfterViewInit(){
    this.geolocationNative();
  }

  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      // resp.coords.latitude
      // resp.coords.longitude
        var position3 = new google.maps.LatLng(geoposition.coords.latitude, geoposition.coords.longitude);
        var dogwalkMarker3 = new google.maps.Marker({
          position:position3,
          icon: {url: "assets/imgs/icono_mapa.png"  }
        });
        dogwalkMarker3.setMap(this.map);
        this.addInfoWindowToMarker(dogwalkMarker3);
     });
  }

}
