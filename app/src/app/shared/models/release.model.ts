import { ReleaseDTO } from '@app/core/dtos';
import { ArtistModel } from './artist.model';
import { ReleaseTypeModel } from './release-type.model';
import { StreamingLinkModel } from './streaming-link.model';

const ARTWORK_BASE_PATH: string = 'assets/images/releases';
const ARTWORK_FORMAT: string = '.jpg';

export class ReleaseModel {
  artists?: ArtistModel[];
  id: number;
  name: string;
  releaseDate: string;
  streamingLinks?: StreamingLinkModel[];
  type: ReleaseTypeModel;

  constructor(dto: ReleaseDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.releaseDate = dto.releaseDate;
    this.type = ReleaseTypeModel[dto.type];
  }

  getArtists(): string {
    const separator: string = ', ';
    return this.artists
      ?.map((artist: ArtistModel): string => artist.name)
      .join(separator);
  }

  getArtwork(): string {
    return `${ARTWORK_BASE_PATH}/${this.getNameInLowerCase()}${ARTWORK_FORMAT}`;
  }

  getNameInLowerCase(): string {
    return this.name.toLowerCase().split(' ').join('-');
  }
}
