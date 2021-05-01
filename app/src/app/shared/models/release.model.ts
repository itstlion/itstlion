import { ReleaseDTO } from '@app/core/dtos';
import { ArtistModel } from './artist.model';
import { ReleaseTypeModel } from './release-type.model';

const ARTWORK_BASE_PATH: string = 'assets/images/releases';
const ARTWORK_FORMAT: string = '.jpg';

export class ReleaseModel {
  artists?: ArtistModel[];
  id: number;
  name: string;
  releaseDate: string;
  type?: ReleaseTypeModel;

  constructor(dto: ReleaseDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.releaseDate = dto.releaseDate;
  }

  getArtists(): string {
    const separator: string = ', ';
    return this.artists
      ?.map((artist: ArtistModel): string => artist.name)
      .join(separator);
  }

  getArtwork(): string {
    const splitSeparator: string = ' ';
    const joinSeparator: string = '-';
    const releaseName: string = this.name
      .toLowerCase()
      .split(splitSeparator)
      .join(joinSeparator);
    return `${ARTWORK_BASE_PATH}/${releaseName}${ARTWORK_FORMAT}`;
  }
}
