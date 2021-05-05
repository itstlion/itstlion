import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components';

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    MatBottomSheetModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  imports: [MatToolbarModule]
})
export class SharedModule {}
