import { Component } from '@angular/core';
import { NavController, IonicPage,  NavParams, IonicModule, IonicApp} from 'ionic-angular';
import { CategoryPage } from '../1a_category/category';
import { CalendarModule, CalendarModalOptions, CalendarResult, CalendarModal } from "ion2-calendar";
import { CalendarComponentOptions } from "ion2-calendar";
import { ModalController } from 'ionic-angular';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HomePage } from '../1_home/home';
import { GlobalsProvider } from '../../providers/globals/globals';

// https://github.com/HsuanXyz/ion2-calendar
// acudir al enlace para instalar el plug-in

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})

export class CalendarPage {
  // modalCtrl: any;
  dateRange: { from: string; to: string; };
  type: 'js-date'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    showMonthPicker:true,
    monthPickerFormat:['GEN', 'FEB', 'MAR','ABR','MAI','JUN', 'JUL','AGO','SEP','OCT','NOV',]
  };
  constructor(
    public modalCtrl: ModalController,public navCtrl: NavController, public globals:GlobalsProvider
  ) { }
  ionViewDidLoad(){
    this.openCalendar();
  }
  openCalendar() {
    //Configuración plug-in calendario
    const options: CalendarModalOptions = {
      pickMode: 'range', //
      title: 'Selecciona les dates',
      monthFormat: 'MM / YY', //formato mes año
      weekdays: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
      weekStart: 1, //comienza en lunes
      color: 'dark', //'primary', 'secondary', 'danger', 'light', 'dark'
      doneLabel: 'FET',
      closeLabel: 'CANCELAR'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present()

    myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
      //Sirve para volver a la home en caso de que se pulse doneLabel
      if (date != null){
      this.globals.desde = date.from.string; //recoge fecha inicio en un string
      this.globals.hasta = date.to.string; //recoge fecha fin en un string
      this.navCtrl.setRoot(HomePage);
    }
      //Sirve para volver a la home en caso de que se pulse closeLabel
    else{
      this.navCtrl.setRoot(HomePage);
    }

     
    });
  }
}
