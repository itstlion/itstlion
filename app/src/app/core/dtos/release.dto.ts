import { ApiReferenceDTO } from './api-reference.dto';

export interface ReleaseDTO {
  id: number;
  name: string;
  releaseDate: string;
  artwork: string;
  artists: ApiReferenceDTO;
  streamingLinks: ApiReferenceDTO;
  type: ApiReferenceDTO;
}
