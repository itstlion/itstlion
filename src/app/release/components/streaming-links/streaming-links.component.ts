import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { Link, Release } from '../../models/release';

export const STREAMING_LINKS_PANEL_CLASS: string = 'dark-bottom-sheet';

@Component({
  selector: 'app-streaming-links',
  styleUrls: ['./streaming-links.component.css'],
  templateUrl: './streaming-links.component.html'
})
export class StreamingLinksComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Release) {}

  isNotLastItem(link: Link): boolean {
    return this.data.links[this.data.links.length - 1] !== link;
  }

  openStreamingLink(link: string): void {
    window.open(link);
  }

  toKebabCase(value: string): string {
    return value.toLowerCase().split(' ').join('-');
  }
}
