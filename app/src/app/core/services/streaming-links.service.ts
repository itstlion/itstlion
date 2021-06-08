import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StreamingPlatformModel } from '@app/shared/models';
import { environment } from '@environments/environment';
import { StreamingLinkDTO, StreamingPlatformDTO } from '../dtos';

@Injectable()
export class StreamingLinksService {
  constructor(private httpClient: HttpClient) {}

  async getPlatformOfStreamingLink(
    streamingLink: StreamingLinkDTO
  ): Promise<StreamingPlatformModel> {
    const url: string = `${environment.apiUrl}/${streamingLink.platform.ref}`;
    return StreamingPlatformModel[
      await this.httpClient.get<StreamingPlatformDTO>(url).toPromise()
    ];
  }
}
