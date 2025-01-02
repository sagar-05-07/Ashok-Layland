import { SkipDialogComponent } from './../skip-dialog/skip-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NoteComponent } from '../note/note.component';
import { PartsData } from '../PartsData';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  isRepeted = false;
  constructor(public dialog: MatDialog, public router: Router) { }
  values: any;
  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.workflow();
    }
    else {

    }

  }
  note() {
    
    let dialogRef = this.dialog.open(NoteComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  skip() {

    let dialogRef = this.dialog.open(SkipDialogComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  next() {
    this.router.navigate(['/app/prtsnavbar/d1']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/base-info']);
  }
  repeted(event) {
    this.isRepeted = !this.isRepeted;
  }

  }

