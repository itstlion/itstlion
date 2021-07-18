import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NotificationService, ReleasesService } from './services';

@NgModule({
  imports: [HttpClientModule],
  providers: [NotificationService, ReleasesService]
})
export class CoreModule {}
