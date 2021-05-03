import { StreamingLinkDTO } from '@app/core/dtos';
import { StreamingPlatformModel } from './streaming-platform.model';

const LOGO_BASE_PATH: string = 'assets/images/streaming-platforms';
const LOGO_FORMAT: string = '.svg';

export class StreamingLinkModel {
  id: number;
  link: string;
  platform?: StreamingPlatformModel;

  constructor(dto: StreamingLinkDTO) {
    this.id = dto.id;
    this.link = dto.link;
  }

  getLogo(): string {
    if (undefined === this.platform) return '';
    const platformName: string = this.getPlatformInLowerCase();
    return `${LOGO_BASE_PATH}/${platformName}${LOGO_FORMAT}`;
  }

  getPlatformInLowerCase(): string {
    const splitSeparator: string = ' ';
    const joinSeparator: string = '-';
    return this.platform
      ?.toLowerCase()
      .split(splitSeparator)
      .join(joinSeparator);
  }
}
