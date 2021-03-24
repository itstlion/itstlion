import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ReleasesComponent } from './pages';
import { ReleasesRoutingModule } from './releases-routing.module';

@NgModule({
  declarations: [ReleasesComponent],
  imports: [CommonModule, ReleasesRoutingModule, SharedModule]
})
export class ReleasesModule {}
