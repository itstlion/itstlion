import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const CONFIG: MatSnackBarConfig = { duration: 3000 };
const ERROR_PANEL_CLASS: string = 'error-notification';
const NOTIFICATION_PANEL_CLASS: string = 'notification';

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  notifyError(content: string): void {
    const config: MatSnackBarConfig = {
      ...CONFIG,
      panelClass: ERROR_PANEL_CLASS
    };
    this.snackBar.open(content, undefined, config);
  }

  notify(content: string): void {
    const config: MatSnackBarConfig = {
      ...CONFIG,
      panelClass: NOTIFICATION_PANEL_CLASS
    };
    this.snackBar.open(content, undefined, config);
  }
}
