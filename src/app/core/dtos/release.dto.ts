import { ApiReferenceDTO } from './api-reference.dto';

export interface ReleaseDTO {
  id: number;
  name: string;
  releaseDate: string;
  type: ReleaseTypeDTO;
  artists: ApiReferenceDTO;
  streamingLinks: ApiReferenceDTO;
}

enum ReleaseTypeDTO {
  ALBUM = 'ALBUM',
  EP = 'EP',
  SINGLE = 'SINGLE'
}
