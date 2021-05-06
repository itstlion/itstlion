import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  ArtistModel,
  ReleaseModel,
  ReleaseTypeModel,
  StreamingLinkModel,
  StreamingPlatformModel
} from '@app/shared/models';
import { environment } from '@environments/environment';
import { StreamingLinksService } from './streaming-links.service';
import {
  ArtistDTO,
  ReleaseDTO,
  ReleaseTypeDTO,
  StreamingLinkDTO
} from '../dtos';

const RELEASES_PATH: string = 'releases';

@Injectable()
export class ReleasesService {
  private baseUrl: string = `${environment.apiUrl}/${RELEASES_PATH}`;

  constructor(
    private httpClient: HttpClient,
    private streamingLinksService: StreamingLinksService
  ) {}

  async getReleases(): Promise<ReleaseModel[]> {
    const releases: ReleaseDTO[] = await this.httpClient
      .get<ReleaseDTO[]>(this.baseUrl)
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
    const streamingLinks: StreamingLinkDTO[] = await this.httpClient
      .get<StreamingLinkDTO[]>(url)
      .toPromise();
    return streamingLinks.map(
      (dto: StreamingLinkDTO): StreamingLinkModel =>
        this.mapStreamingLinkToModel(dto)
    );
  }

  private async getTypeOfRelease(
    release: ReleaseDTO
  ): Promise<ReleaseTypeModel> {
    const url: string = `${environment.apiUrl}/${release.type.ref}`;
    const type: ReleaseTypeDTO = await this.httpClient
      .get<ReleaseTypeDTO>(url)
      .toPromise();
    return ReleaseTypeModel[type];
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
    this.getTypeOfRelease(release).then((type: ReleaseTypeModel): void => {
      model.type = type;
    });
    return model;
  }

  private mapStreamingLinkToModel(
    streamingLink: StreamingLinkDTO
  ): StreamingLinkModel {
    const model: StreamingLinkModel = new StreamingLinkModel(streamingLink);
    this.streamingLinksService
      .getPlatformOfStreamingLink(streamingLink)
      .then((platform: StreamingPlatformModel): void => {
        model.platform = platform;
      });
    return model;
  }
}
