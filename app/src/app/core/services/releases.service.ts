import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ArtistModel, ReleaseModel } from '@app/shared/models';
import { environment } from '@environments/environment';

@Injectable()
export class ReleasesService {
  private baseUrl: string = `${environment.apiUrl}/releases`;

  constructor(private httpClient: HttpClient) {}

  getAllArtistsOfARelease(release: ReleaseModel): Promise<ArtistModel[]> {
    return this.httpClient.get<ArtistModel[]>(release.artists.ref).toPromise();
  }

  getAllReleases(): Promise<ReleaseModel[]> {
    return this.httpClient.get<ReleaseModel[]>(this.baseUrl).toPromise();
  }
}
