import { ArtistDTO } from '@app/core/dtos';

export class ArtistModel {
  id: number;
  name: string;

  constructor(dto: ArtistDTO) {
    this.id = dto.id;
    this.name = dto.name;
  }
}
