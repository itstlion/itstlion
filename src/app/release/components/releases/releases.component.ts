import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class ReleasesComponent implements AfterViewInit, OnInit {
  releases: Release[];

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.releases = RELEASES;
  }

  ngAfterViewInit(): void {
    this.releases
      .filter((release: Release): boolean => release.artists.length > 2)
      .map((release: Release): string => this.toKebabCase(release.name))
      .forEach((id: string): void => {
        const release: Element = document.querySelector(`mat-card#${id}`);
        const artists = {
          container: release.querySelector('.release-artists'),
          text: undefined
        };
        artists.text = artists.container.querySelector('span');
        if (artists.container.clientWidth < artists.text.clientWidth)
          artists.text.classList.add('animate-text');
      });
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
