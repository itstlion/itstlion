import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ArtistModel, ReleaseModel } from '@app/shared/models';
import { environment } from '@environments/environment';
import { ArtistDTO, ReleaseDTO } from '../dtos';

@Injectable()
export class ReleasesService {
  private baseUrl: string = `${environment.apiUrl}/releases`;

  constructor(private httpClient: HttpClient) {}

  async getAllReleases(): Promise<ReleaseModel[]> {
    const releases: ReleaseDTO[] = await this.httpClient
      .get<ReleaseDTO[]>(this.baseUrl)
      .toPromise();
    return releases.map(
      (dto: ReleaseDTO): ReleaseModel => this.mapReleaseDTOToModel(dto)
    );
  }

  private async getAllArtistsOfARelease(
    release: ReleaseDTO
  ): Promise<ArtistModel[]> {
    const artists: ArtistDTO[] = await this.httpClient
      .get<ArtistDTO[]>(release.artists.ref)
      .toPromise();
    return artists.map(
      (dto: ArtistDTO): ArtistModel => ({ id: dto.id, name: dto.name })
    );
  }

  private mapReleaseDTOToModel(release: ReleaseDTO): ReleaseModel {
    const model: ReleaseModel = {
      artists: [],
      id: release.id,
      name: release.name,
      releaseDate: release.releaseDate
    };
    this.getAllArtistsOfARelease(release).then(
      (artists: ArtistModel[]): void => {
        model.artists = artists;
      }
    );
    return model;
  }
}
