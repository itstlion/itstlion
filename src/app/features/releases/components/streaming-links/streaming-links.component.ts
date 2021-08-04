import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { ReleaseModel, StreamingLinkModel } from '@app/shared/models';

export const STREAMING_LINKS_PANEL_CLASS: string = 'dark-bottom-sheet';

@Component({
  selector: 'app-streaming-links',
  styleUrls: ['./streaming-links.component.css'],
  templateUrl: './streaming-links.component.html'
})
export class StreamingLinksComponent implements OnInit {
  subtitle: string;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public release: ReleaseModel) {}

  ngOnInit(): void {
    this.subtitle = 'Choose a platform';
  }

  isNotLastItem(streamingLink: StreamingLinkModel): boolean {
    return (
      this.release.streamingLinks[this.release.streamingLinks.length - 1] !==
      streamingLink
    );
  }
}
