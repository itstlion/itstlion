import { ApiReferenceModel } from './api-reference.model';

export interface ReleaseModel {
  id: number;
  name: string;
  releaseDate: string;
  artists: ApiReferenceModel;
  streamingLinks: ApiReferenceModel;
  type: ApiReferenceModel;
}
