import { ApiReferenceDTO } from './api-reference.dto';

export interface StreamingLinkDTO {
  id: number;
  link: string;
  platform: ApiReferenceDTO;
}
