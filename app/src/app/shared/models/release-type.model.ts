import { ReleaseTypeDTO } from '@app/core/dtos';

export class ReleaseTypeModel {
  id: number;
  type: string;

  constructor(dto: ReleaseTypeDTO) {
    this.id = dto.id;
    this.type = dto.type;
  }
}
