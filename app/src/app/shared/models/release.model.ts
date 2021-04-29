import { ArtistModel } from './artist.model';

export interface ReleaseModel {
  artists: ArtistModel[];
  id: number;
  name: string;
  releaseDate: string;
}
