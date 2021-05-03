import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { ReleasesService } from '@app/core/services';
import { ReleaseModel, StreamingLinkModel } from '@app/shared/models';

@Component({
  selector: 'app-streaming-links',
  styleUrls: ['./streaming-links.component.css'],
  templateUrl: './streaming-links.component.html'
})
export class StreamingLinksComponent implements OnInit {
  streamingLinks$: Promise<StreamingLinkModel[]>;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public release: ReleaseModel,
    private releasesService: ReleasesService
  ) {}

  ngOnInit(): void {
    this.getStreamingLinks();
  }

  openStreamingLink(streamingLink: StreamingLinkModel): void {
    window.open(streamingLink.link);
  }

  private getStreamingLinks(): void {
    this.streamingLinks$ = this.releasesService.getStreamingLinksOfRelease(
      this.release
    );
  }
}
