import { ReleaseModel, StreamingLinkModel } from '@app/shared/models';

export interface StreamingLinksDataModel {
  release: ReleaseModel;
  streamingLinks: StreamingLinkModel[];
}
