import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ReleaseModel } from '@app/shared/models';
import { environment } from '@environments/environment';

@Injectable()
export class ReleasesService {
  private baseUrl: string = `${environment.apiUrl}/releases`;

  constructor(private httpClient: HttpClient) {}

  getAllReleases(): Observable<ReleaseModel[]> {
    return this.httpClient.get<ReleaseModel[]>(this.baseUrl);
  }
}
