import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ReleasesComponent, StreamingLinksComponent } from './components';
import { ReleaseRoutingModule } from './release-routing.module';

@NgModule({
  declarations: [ReleasesComponent, StreamingLinksComponent],
  imports: [CommonModule, HttpClientModule, ReleaseRoutingModule, SharedModule]
})
export class ReleaseModule {}
