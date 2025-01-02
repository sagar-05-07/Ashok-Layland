import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-img-popup',
  templateUrl: './img-popup.component.html',
  styleUrls: ['./img-popup.component.scss']
})
export class ImgPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { imgSrc: string },
    private dialogRef: MatDialogRef<ImgPopupComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }


}
