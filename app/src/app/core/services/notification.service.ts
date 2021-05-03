import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const CONFIG: MatSnackBarConfig = {
  duration: 3000,
  panelClass: 'notification'
};

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  notify(content: string): void {
    this.snackBar.open(content, undefined, CONFIG);
  }
}
