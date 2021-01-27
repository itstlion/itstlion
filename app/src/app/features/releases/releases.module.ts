import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReleasesComponent } from './pages';
import { ReleasesRoutingModule } from './releases-routing.module';

@NgModule({
  declarations: [ReleasesComponent],
  imports: [CommonModule, ReleasesRoutingModule]
})
export class ReleasesModule {}
