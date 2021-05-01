import { Component, OnInit } from '@angular/core';

import { ReleasesService } from '@app/core/services';
import { ReleaseModel } from '@app/shared/models';

@Component({
  selector: 'app-releases',
  styleUrls: ['./releases.page.css'],
  templateUrl: './releases.page.html'
})
export class ReleasesPage implements OnInit {
  releases$: Promise<ReleaseModel[]>;

  constructor(private service: ReleasesService) {}

  ngOnInit(): void {
    this.getReleases();
  }

  private getReleases(): void {
    this.releases$ = this.service.getReleases();
  }
}
