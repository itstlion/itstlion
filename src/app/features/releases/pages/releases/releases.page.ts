import { Component, OnInit } from '@angular/core';

import { NotificationService, ReleasesService } from '@app/core/services';
import { ReleaseModel } from '@app/shared/models';

@Component({
  selector: 'app-releases',
  styleUrls: ['./releases.page.css'],
  templateUrl: './releases.page.html'
})
export class ReleasesPage implements OnInit {
  isLoadingData: boolean;
  releases$: Promise<ReleaseModel[]>;
  reloadButtonText: string;

  constructor(
    private notificationService: NotificationService,
    private releasesService: ReleasesService
  ) {}

  ngOnInit(): void {
    this.initReloadButtonText();
    this.getReleases();
  }

  reloadData(): void {
    this.getReleases();
  }

  private catchReleasesRetrieving(): void {
    this.isLoadingData = false;
    const content: string = 'Unable to fetch data from server!';
    this.notificationService.notifyError(content);
  }

  private getReleases(): void {
    this.isLoadingData = true;
    this.releases$ = this.releasesService.getReleases();
    this.releases$.catch((): void => this.catchReleasesRetrieving());
  }

  private initReloadButtonText(): void {
    this.reloadButtonText = 'RELOAD';
  }
}
