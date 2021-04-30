import { ReleaseDTO } from '@app/core/dtos';
import { ArtistModel } from './artist.model';

export class ReleaseModel {
  artists: ArtistModel[];
  id: number;
  name: string;
  releaseDate: string;
  type: string;

  constructor(dto: ReleaseDTO) {
    this.id = dto.id;
    this.name = dto.name;
    this.releaseDate = dto.releaseDate;
  }
}
