import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ReleasesComponent, StreamingLinksComponent } from './components';
import { ReleaseRoutingModule } from './release-routing.module';
import { NotificationService, ReleaseService } from './services';

@NgModule({
  declarations: [ReleasesComponent, StreamingLinksComponent],
  imports: [CommonModule, ReleaseRoutingModule, SharedModule],
  providers: [NotificationService, ReleaseService]
})
export class ReleaseModule {}
