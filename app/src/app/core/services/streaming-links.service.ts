import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StreamingPlatformModel } from '@app/shared/models';
import { StreamingLinkDTO, StreamingPlatformDTO } from '../dtos';

@Injectable()
export class StreamingLinksService {
  constructor(private httpClient: HttpClient) {}

  async getPlatformOfStreamingLink(
    streamingLink: StreamingLinkDTO
  ): Promise<StreamingPlatformModel> {
    const platform: StreamingPlatformDTO = await this.httpClient
      .get<StreamingPlatformDTO>(streamingLink.platform.ref)
      .toPromise();
    return StreamingPlatformModel[platform];
  }
}
