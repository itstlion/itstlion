import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { ArtistDTO, ReleaseDTO, StreamingLinkDTO } from '../dtos';

@Injectable()
export class ReleaseService {
  constructor(private httpClient: HttpClient) {}

  async getAllArtistsOfRelease(release: ReleaseDTO): Promise<ArtistDTO[]> {
    const url: string = `${environment.apiUrl}/${release.artists.ref}`;
    return await this.httpClient.get<ArtistDTO[]>(url).toPromise();
  }

  async getAllReleases(): Promise<ReleaseDTO[]> {
    const url: string = `${environment.apiUrl}/releases`;
    return await this.httpClient.get<ReleaseDTO[]>(url).toPromise();
  }

  async getAllStreamingLinksOfRelease(
    releaseId: number
  ): Promise<StreamingLinkDTO[]> {
    const url: string = `${environment.apiUrl}/releases/${releaseId}/streaming-links`;
    return await this.httpClient.get<StreamingLinkDTO[]>(url).toPromise();
  }

  async getCoverOfRelease(release: ReleaseDTO): Promise<string> {
    const url: string = `${environment.apiUrl}/${release.cover.ref}`;
    return await this.httpClient.get<string>(url).toPromise();
  }
}
