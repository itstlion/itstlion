import { ReleaseDTO } from '@app/core/dtos';
import { ArtistModel } from './artist.model';
import { ReleaseTypeModel } from './release-type.model';
import { StreamingLinkModel } from './streaming-link.model';

export class ReleaseModel {
  artists?: ArtistModel[];
  artwork: string;
  id: number;
  name: string;
  releaseDate: string;
  streamingLinks?: StreamingLinkModel[];
  type?: ReleaseTypeModel;

  constructor(dto: ReleaseDTO) {
    this.artwork = dto.artwork;
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
}
