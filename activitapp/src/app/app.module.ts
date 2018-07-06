import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/1_home/home';
//import { TabsPage } from '../pages/tabs/tabs';
import { CategoryPage} from '../pages/1a_category/category';
import { MapPage } from '../pages/2_map/map';
import {StaticmapPage} from '../pages/1c_staticmap/staticmap';
import {ListPage} from '../pages/2_list/list';
import {DetailPage} from '../pages/3_detail/detail';

import { SearchPipe } from "../pipes/search/search";
import { SortPipe } from "../pipes/sort/sort";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgCalendarModule  } from 'ionic2-calendar';
import { MonthViewComponent } from 'ionic2-calendar/monthview';
import { WeekViewComponent } from 'ionic2-calendar/weekview';
import { DayViewComponent } from 'ionic2-calendar/dayview';
import { CalendarModule } from 'ion2-calendar';
import { CalendarPage } from '../pages/1b_calendar/calendar';
import { RestProvider } from '../providers/rest/rest';
import { GlobalsProvider } from '../providers/globals/globals';
import { Searchbar } from 'ionic-angular/components/searchbar/searchbar';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    //TabsPage,
    CalendarPage,
    CategoryPage,
    MapPage,
    StaticmapPage,
    ListPage,
    DetailPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,HttpClientModule ,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    //TabsPage,
    CalendarPage,
    CategoryPage,
    MapPage,
    StaticmapPage,
    ListPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: "es-ES" },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    GlobalsProvider,
    Geolocation
  ]
})
export class AppModule {}
