import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  ArtistModel,
  ReleaseModel,
  ReleaseTypeModel
} from '@app/shared/models';
import { environment } from '@environments/environment';
import { ArtistDTO, ReleaseDTO, ReleaseTypeDTO } from '../dtos';

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
    return artists.map((dto: ArtistDTO): ArtistModel => new ArtistModel(dto));
  }

  private async getTypeOfARelease(
    release: ReleaseDTO
  ): Promise<ReleaseTypeModel> {
    const type: ReleaseTypeDTO = await this.httpClient
      .get<ReleaseTypeDTO>(release.type.ref)
      .toPromise();
    return new ReleaseTypeModel(type);
  }

  private mapReleaseDTOToModel(release: ReleaseDTO): ReleaseModel {
    const model: ReleaseModel = new ReleaseModel(release);
    this.getAllArtistsOfARelease(release).then(
      (artists: ArtistModel[]): void => {
        model.artists = artists;
      }
    );
    this.getTypeOfARelease(release).then((type: ReleaseTypeModel): void => {
      model.type = type.type;
    });
    return model;
  }
}
