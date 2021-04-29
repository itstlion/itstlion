import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ReleasesService } from '@app/core/services';
import { ReleaseModel } from '@app/shared/models';

@Component({
  selector: 'app-releases',
  styleUrls: ['./releases.page.css'],
  templateUrl: './releases.page.html'
})
export class ReleasesComponent implements OnInit {
  releases$: Observable<ReleaseModel[]>;

  constructor(private service: ReleasesService) {}

  ngOnInit(): void {
    this.retrieveReleases();
  }

  private retrieveReleases(): void {
    this.releases$ = this.service.getAllReleases();
  }
}
