import { Component, OnInit, ViewChild } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-prts-part',
  templateUrl: './prts-part.component.html',
  styleUrls: ['./prts-part.component.scss']
})
export class PrtsPart1Component implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = true;

  public toggleSidenav() {
    // console.log('toggle')
    this.sidenav.toggle();
    this.isOpen
      = !this.isOpen
  }

}
