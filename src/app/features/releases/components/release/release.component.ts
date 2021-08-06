import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ReleasesService } from '@app/core/services';
import { ReleaseModel } from '@app/shared/models';
import {
  StreamingLinksComponent,
  STREAMING_LINKS_PANEL_CLASS
} from '../streaming-links';

@Component({
  selector: 'app-release',
  styleUrls: ['./release.component.css'],
  templateUrl: './release.component.html'
})
export class ReleaseComponent implements OnInit {
  @Input() release: ReleaseModel;
  cover$: Promise<string>;

  constructor(
    private bottomSheet: MatBottomSheet,
    private releasesService: ReleasesService
  ) {}

  ngOnInit(): void {
    this.cover$ = this.getCover();
  }

  private getCover(): Promise<string> {
    return this.releasesService.getCoverOfRelease(this.release.id);
  }

  async openStreamingLinksBottomSheet(): Promise<void> {
    this.bottomSheet.open(StreamingLinksComponent, {
      data: this.release,
      panelClass: STREAMING_LINKS_PANEL_CLASS
    });
  }
}
