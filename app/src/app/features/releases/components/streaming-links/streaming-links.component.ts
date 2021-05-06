import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { ReleaseModel, StreamingLinkModel } from '@app/shared/models';

export const STREAMING_LINKS_PANEL_CLASS: string = 'dark-bottom-sheet';

@Component({
  selector: 'app-streaming-links',
  styleUrls: ['./streaming-links.component.css'],
  templateUrl: './streaming-links.component.html'
})
export class StreamingLinksComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public release: ReleaseModel) {}

  openStreamingLink(streamingLink: StreamingLinkModel): void {
    window.open(streamingLink.link);
  }
}
