import { Component, OnInit } from '@angular/core';
import { AddDocsComponent } from '../../subjective-audits/capa/add-docs/add-docs.component';
import { AddCapaComponent } from '../../subjective-audits/capa/add-capa/add-capa.component';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from '../../subjective-audits/capa/notes/notes.component';
import { GridViewComponent } from '../grid-view/grid-view.component';

@Component({
  selector: 'app-obj-caap',
  templateUrl: './obj-caap.component.html',
  styleUrls: ['./obj-caap.component.scss']
})
export class ObjCaapComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  values = [
    {
      subject: 'Supplier Risk Assessment',
      supplier: 'Global Tech Supplies',
      auditref: 'AT12345',
      processarea: 'Quality Control',
      processcat: 'Manufacturing',
      description: 'When casting ceramic items in potteries, liquid ‘slip’ is passed from a settling tank, through overhead pipelines, before being pumped manually into the moulds. It is not uncommon for bubbles to be introduced into the slip as it passes through the complex piping network, and indeed the presence of bubbles is a major source of financial loss to the ceramics industry worldwide',
      issueDate: '01-Jan-2024',
      dueDate: '15-Jan-2024',
      completiondate: '12-Jan-2024',
      status: 1,
      check: true
    },
    {
      subject: 'Product Recall Review',
      supplier: 'Ace Components',
      auditref: 'AT67890',
      processarea: 'Logistics',
      description: 'When casting ceramic items in potteries, liquid ‘slip’ is passed from a settling tank, through overhead pipelines, before being pumped manually into the moulds. It is not uncommon for bubbles to be introduced into the slip as it passes through the complex piping network, and indeed the presence of bubbles is a major source of financial loss to the ceramics industry worldwide',
      processcat: 'Distribution',
      issueDate: '10-Feb-2024',
      dueDate: '20-Feb-2024',
      completiondate: '19-Feb-2024',
      status: 0,
      check: true
    },
    {
      subject: 'Supplier Certification Audit',
      supplier: 'Prime Manufacturing',
      auditref: 'AT54321',
      processarea: 'Compliance',
      processcat: 'Certification',
      description: 'Certification audit for ISO standards compliance',
      issueDate: '05-Mar-2024',
      dueDate: '15-Mar-2024',
      completiondate: '',
      status: 2
    },
    {
      subject: 'Supplier Risk Assessment',
      supplier: 'Global Tech Supplies',
      auditref: 'AT12345',
      processarea: 'Quality Control',
      processcat: 'Manufacturing',
      description: 'Audit of production quality and safety standards',
      issueDate: '01-Jan-2024',
      dueDate: '15-Jan-2024',
      completiondate: '12-Jan-2024',
      status: 1
    },
    {
      subject: 'Product Recall Review',
      supplier: 'Ace Components',
      auditref: 'AT67890',
      processarea: 'Logistics',
      processcat: 'Distribution',
      description: 'When casting ceramic items in potteries, liquid ‘slip’ is passed from a settling tank, through overhead pipelines, before being pumped manually into the moulds. It is not uncommon for bubbles to be introduced into the slip as it passes through the complex piping network, and indeed the presence of bubbles is a major source of financial loss to the ceramics industry worldwide',
      issueDate: '10-Feb-2024',
      dueDate: '20-Feb-2024',
      completiondate: '19-Feb-2024',
      status: 0,
      check: true
    },
    {
      subject: 'Supplier Certification Audit',
      supplier: 'Prime Manufacturing',
      auditref: 'AT54321',
      processarea: 'Compliance',
      processcat: 'Certification',
      description: 'Certification audit for ISO standards compliance',
      issueDate: '05-Mar-2024',
      dueDate: '15-Mar-2024',
      completiondate: '',
      status: 2
    }
  ];


  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
      ele.scrollLeft += 210;
    else
      ele.scrollLeft -= 210;
  }

  openGridview() {
    this.dialog.open(GridViewComponent, {
      height: 'auto',
      width: '600px'
    })
  }



  addParameter(item) {
    this.dialog.open(AddCapaComponent, {
      height: 'auto',
      width: '600px'
    })
  }

  addNotes(item) {
    this.dialog.open(NotesComponent, {
      height: 'auto',
      width: '600px'
    })
  }


  openDocs() {
    this.dialog.open(AddDocsComponent, {
      height: 'auto',
      width: '600px'
    })
  }

}
