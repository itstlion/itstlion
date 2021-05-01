import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  NotificationService,
  ReleasesService,
  StreamingLinksService
} from './services';

@NgModule({
  imports: [HttpClientModule],
  providers: [NotificationService, ReleasesService, StreamingLinksService]
})
export class CoreModule {}
