import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './welcomePopup.component.html',
  styleUrls: ['./welcomePopup.component.scss']
})
export class WelcomePopupComponent {
  constructor(
    public dialogRef: MatDialogRef<WelcomePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onClickAvailable(){
      this.dialogRef.close(true);
    }

    onClickNotAvailable(){
      this.dialogRef.close();
    }
}
