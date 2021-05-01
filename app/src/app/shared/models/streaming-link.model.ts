import { StreamingLinkDTO } from '@app/core/dtos';
import { StreamingPlatformModel } from './streaming-platform.model';

export class StreamingLinkModel {
  id: number;
  link: string;
  platform?: StreamingPlatformModel;

  constructor(dto: StreamingLinkDTO) {
    this.id = dto.id;
    this.link = dto.link;
  }
}
