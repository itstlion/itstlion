import { Component, OnInit } from '@angular/core';

import { ReleasesService } from '@app/core/services';
import {
  ApiReferenceModel,
  ArtistModel,
  ReleaseModel
} from '@app/shared/models';

// TODO: Extract this class
// TODO: Separate DTOs from Models
// TODO: Build this class with a builder pattern
class Release {
  artists: ArtistModel[];
  id: number;
  name: string;
  releaseDate: string;
  streamingLinks: ApiReferenceModel;
  type: ApiReferenceModel;

  constructor(model: ReleaseModel) {
    this.id = model.id;
    this.name = model.name;
    this.releaseDate = model.releaseDate;
  }
}

@Component({
  selector: 'app-releases',
  styleUrls: ['./releases.page.css'],
  templateUrl: './releases.page.html'
})
export class ReleasesComponent implements OnInit {
  releases: Release[];

  constructor(private service: ReleasesService) {}

  ngOnInit(): void {
    this.retrieveReleases();
  }

  private mapModelToRelease(model: ReleaseModel): Release {
    const release: Release = new Release(model);
    this.retrieveArtistsOfRelease(model, release);
    return release;
  }

  private async retrieveArtistsOfRelease(
    model: ReleaseModel,
    release: Release
  ): Promise<void> {
    release.artists = await this.service.getAllArtistsOfARelease(model);
  }

  private async retrieveReleases(): Promise<void> {
    const models: ReleaseModel[] = await this.service.getAllReleases();
    this.releases = models.map(
      (model: ReleaseModel): Release => this.mapModelToRelease(model)
    );
  }
}
