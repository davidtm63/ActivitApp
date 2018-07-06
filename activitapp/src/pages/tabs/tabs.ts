import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../1_home/home';
import { CalendarPage } from '../1b_calendar/calendar';
import { MapPage } from '../2_map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CalendarPage;
  tab4Root = MapPage ;
  
  constructor() {

  }
}
