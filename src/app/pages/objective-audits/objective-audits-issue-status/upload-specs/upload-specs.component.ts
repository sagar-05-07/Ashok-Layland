import { Component, Inject, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-specs',
  templateUrl: './upload-specs.component.html',
  styleUrls: ['./upload-specs.component.scss']
})
export class UploadSpecsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UploadSpecsComponent>,
    @Inject(MAT_DIALOG_DATA) public campaign: any) { }

  ngOnInit(): void {
  }

  authFiles: File[] = [];
  showModal = true;

  close() {
    this.dialogRef.close();
  }

  onFileSelected(event: any, type: string) {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      if (type === 'auth') {
        this.authFiles.push(fileList[i]);
      }
    }
  }

  onDrop(event: DragEvent, type: string) {
    event.preventDefault();
    const fileList: FileList | null = event.dataTransfer?.files || null;
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        if (type === 'auth') {
          this.authFiles.push(fileList[i]);
        }
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  viewFile(file: File) {
    // Logic to view or download the file
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }

  onClose(): void {
    this.dialogRef.close();
  }

  removeFiles(type: string) {
    if (type === 'auth') {
      this.authFiles = [];
    }
  }

  removeSingleFile(file: File, type: string) {
    if (type === 'auth') {
      this.authFiles = this.authFiles.filter(f => f !== file);
    }
  }

  uploadFiles() {
    const allFiles = [...this.authFiles];
    for (let i = 0; i < allFiles.length; i++) {
      const file = allFiles[i];
      console.log('Uploading file:', file.name);
      // Replace with actual upload functionality
    }
    this.close();
  }

  viewAuth() {
    // Functionality to view auth file
  }
}