import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import {
  ReleaseComponent,
  StreamingLinkComponent,
  StreamingLinksComponent
} from './components';
import { ReleasesPage } from './pages';
import { ReleasesRoutingModule } from './releases-routing.module';

@NgModule({
  declarations: [
    ReleaseComponent,
    ReleasesPage,
    StreamingLinkComponent,
    StreamingLinksComponent
  ],
  imports: [CommonModule, ReleasesRoutingModule, SharedModule]
})
export class ReleasesModule {}
