import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ArtistModel, ReleaseModel, StreamingLinkModel } from '@app/shared/models';
import { environment } from '@environments/environment';
import { ArtistDTO, ReleaseDTO, StreamingLinkDTO } from '../dtos';

const RELEASES_PATH: string = 'releases';

@Injectable()
export class ReleasesService {
  constructor(private httpClient: HttpClient) {}

  async getReleases(): Promise<ReleaseModel[]> {
    const url: string = `${environment.apiUrl}/${RELEASES_PATH}`;
    const releases: ReleaseDTO[] = await this.httpClient
      .get<ReleaseDTO[]>(url)
      .toPromise();
    return releases.map(
      (dto: ReleaseDTO): ReleaseModel => this.mapReleaseToModel(dto)
    );
  }

  private async getArtistsOfRelease(
    release: ReleaseDTO
  ): Promise<ArtistModel[]> {
    const url: string = `${environment.apiUrl}/${release.artists.ref}`;
    const artists: ArtistDTO[] = await this.httpClient
      .get<ArtistDTO[]>(url)
      .toPromise();
    return artists.map((dto: ArtistDTO): ArtistModel => new ArtistModel(dto));
  }

  private async getStreamingLinksOfRelease(
    release: ReleaseDTO
  ): Promise<StreamingLinkModel[]> {
    const url: string = `${environment.apiUrl}/${release.streamingLinks.ref}`;
    const streamingLinks: StreamingLinkDTO[] = await this.httpClient.get<StreamingLinkDTO[]>(url)
      .toPromise();
    return streamingLinks.map(
      (dto: StreamingLinkDTO): StreamingLinkModel => new StreamingLinkModel(dto)
    );
  }

  private mapReleaseToModel(release: ReleaseDTO): ReleaseModel {
    const model: ReleaseModel = new ReleaseModel(release);
    this.getArtistsOfRelease(release).then((artists: ArtistModel[]): void => {
      model.artists = artists;
    });
    this.getStreamingLinksOfRelease(release).then(
      (streamingLinks: StreamingLinkModel[]): void => {
        model.streamingLinks = streamingLinks;
      }
    );
    return model;
  }
}
