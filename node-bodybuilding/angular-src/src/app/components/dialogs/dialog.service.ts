import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(whatDialog:string): Observable<boolean> {

        let dialogRef: MatDialogRef<AuthDialogComponent>;

        if (whatDialog==="login"){
            dialogRef = this.dialog.open(AuthDialogComponent, {
                height: '400px',
                width: '600px',
              });
        }else {
            dialogRef = this.dialog.open(AuthDialogComponent, {
                height: '650px',
                width: '600px',
              });
        }
        
        dialogRef.componentInstance.whatDialog = whatDialog;
        // dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}