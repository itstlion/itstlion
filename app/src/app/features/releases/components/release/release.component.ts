import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ReleasesService } from '@app/core/services';
import { ReleaseModel, StreamingLinkModel } from '@app/shared/models';
import { StreamingLinksDataModel } from '../../models';
import {
  StreamingLinksComponent,
  STREAMING_LINKS_PANEL_CLASS
} from '../streaming-links';

@Component({
  selector: 'app-release',
  styleUrls: ['./release.component.css'],
  templateUrl: './release.component.html'
})
export class ReleaseComponent {
  @Input() release: ReleaseModel;

  constructor(
    private bottomSheet: MatBottomSheet,
    private service: ReleasesService
  ) {}

  async openStreamingLinksBottomSheet(): Promise<void> {
    const streamingLinks: StreamingLinkModel[] = await this.service.getStreamingLinksOfRelease(
      this.release
    );
    const data: StreamingLinksDataModel = {
      release: this.release,
      streamingLinks
    };
    this.bottomSheet.open(StreamingLinksComponent, {
      data,
      panelClass: STREAMING_LINKS_PANEL_CLASS
    });
  }
}
