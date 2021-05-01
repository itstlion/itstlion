import { ReleaseDTO } from '@app/core/dtos';
import { ArtistModel } from './artist.model';

const ARTWORK_BASE_PATH: string = 'assets/images/releases';
const ARTWORK_FORMAT: string = '.jpg';

export class ReleaseModel {
  artists: ArtistModel[];
  artwork: string;
  id: number;
  name: string;
  releaseDate: string;
  type: string;

  constructor(dto: ReleaseDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.releaseDate = dto.releaseDate;
    this.initArtwork();
  }

  private initArtwork(): void {
    const splitSeparator: string = ' ';
    const joinSeparator: string = '-';
    const releaseName: string = this.name
      .toLowerCase()
      .split(splitSeparator)
      .join(joinSeparator);
    this.artwork = `${ARTWORK_BASE_PATH}/${releaseName}${ARTWORK_FORMAT}`;
  }
}
