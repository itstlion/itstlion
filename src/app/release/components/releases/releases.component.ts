import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import {
  STREAMING_LINKS_PANEL_CLASS,
  StreamingLinksComponent
} from '../streaming-links/streaming-links.component';
import { RELEASES, Release } from '../../models/release';

@Component({
  selector: 'app-releases',
  styleUrls: ['./releases.component.css'],
  templateUrl: './releases.component.html'
})
export class ReleasesComponent implements OnInit {
  releases: Release[];

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.releases = RELEASES;
  }

  openStreamingLinks(release: Release): void {
    this.bottomSheet.open(StreamingLinksComponent, {
      data: release,
      panelClass: STREAMING_LINKS_PANEL_CLASS
    });
  }

  toKebabCase(value: string): string {
    return value.toLowerCase().split(' ').join('-');
  }
}
