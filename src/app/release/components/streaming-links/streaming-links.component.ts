import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { StreamingLinkDTO } from '../../dtos';

export const STREAMING_LINKS_PANEL_CLASS: string = 'dark-bottom-sheet';

class StreamingLinkModel {
  id: number;
  link: string;
  platform: StreamingPlatformModel;

  constructor(dto: StreamingLinkDTO) {
    this.id = dto.id;
    this.link = dto.link;
    this.platform = StreamingPlatformModel[dto.platform];
  }

  get formattedPlatform(): string {
    return this.platform.toLowerCase().split(' ').join('-');
  }

  get platformLogo(): string {
    return `assets/images/streaming-platforms/${this.formattedPlatform}.svg`;
  }
}

enum StreamingPlatformModel {
  APPLE_MUSIC = 'Apple Music',
  DEEZER = 'Deezer',
  SPOTIFY = 'Spotify',
  YOUTUBE = 'YouTube',
  YOUTUBE_MUSIC = 'YouTube Music'
}

@Component({
  selector: 'app-streaming-links',
  styleUrls: ['./streaming-links.component.css'],
  templateUrl: './streaming-links.component.html'
})
export class StreamingLinksComponent implements OnInit {
  releaseName: string;
  streamingLinks: StreamingLinkModel[];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    private data: { releaseName: string; links: StreamingLinkDTO[] }
  ) {}

  isNotLastItem(streamingLink: StreamingLinkModel): boolean {
    return (
      this.streamingLinks[this.streamingLinks.length - 1] !== streamingLink
    );
  }

  ngOnInit(): void {
    this.releaseName = this.data.releaseName;
    this.streamingLinks = this.data.links.map(
      (dto: StreamingLinkDTO): StreamingLinkModel => new StreamingLinkModel(dto)
    );
  }

  openStreamingLink(link: string): void {
    window.open(link);
  }
}
