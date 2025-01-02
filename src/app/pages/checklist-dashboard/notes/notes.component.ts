
import { AddNotesComponent } from './add-notes/add-notes.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = false;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';




  constructor(public dialog: MatDialog,
    public MglTimelineModule: MglTimelineModule,

  ) { }
  entries = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.entries = this.entries1
    }
    else {
      return;
    }
  }
  entries1 = [
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Surya",
      Checkpoint: "510",
      prblm: "(BSO/Aesthetics/Thin Paint)",
      issue: "68",
      model: "Hector",
      content: "LHF Door outer belt to rear door outer belt flush nok,2mm",
      dataelement: "fa fa-flag-o",
      date: "Fri, 11 June 2021 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass",
      command() {
        console.log("hi")
      }
    },
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "siva",
      Checkpoint: "510",
      prblm: "",
      issue: "68",
      model: "Hector",
      content: "LHS Tailgate garnish to tail lamp improper fit, flushness 3.5mm againts RHS flushness 1.5mm",
      dataelement: "fa fa-flag-o",
      date: "Fri, 27 August 2021 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    },
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Navin",
      Checkpoint: "510",
      prblm: "(Rear Bumper/Aesthetics/Scratch)",
      issue: "68",
      model: "Hector",
      content: "Fuel flap - Reinforcement Panel Spot Exposed",
      dataelement: "fa fa-flag-o",
      date: "Fri, 16 Octuber 2021 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    },
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Ridhima",
      Checkpoint: "510",
      prblm: "",
      issue: "68",
      model: "Hector",
      content: "Fuel filler hinge area/Fuel flap edge - Thin Paint & Paint Run down",
      dataelement: "fa fa-flag-o",
      date: "Fri, 18 Octuber 2021 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    }
  ]

  addEntry() {
    this.entries.push({
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Surya",
      Checkpoint: "510",
      prblm: "",
      issue: "68",
      model: "Hector",
      content: "RHF Door under flush to A Pillar 7mm, Nom 4mm",
      dataelement: "fa fa-flag-o",
      date: "Fri, 21 May 2021 16:31",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass",
      command() {
        alert("hello");
      }

    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      this.addnotes();
      event.stopPropagation();

    }

  }
  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
  addnotes() {
    this.dialog.open(AddNotesComponent, {
      width: "600px",
      height: "auto"
    })
  }

}
