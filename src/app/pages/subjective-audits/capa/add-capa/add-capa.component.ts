import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-capa',
  templateUrl: './add-capa.component.html',
  styleUrls: ['./add-capa.component.scss']
})
export class AddCapaComponent implements OnInit {



  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCapaComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }


}