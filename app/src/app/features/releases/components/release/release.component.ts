import { Component, Input, OnInit } from '@angular/core';

import { ArtistModel, ReleaseModel } from '@app/shared/models';

@Component({
  selector: 'app-release',
  styleUrls: ['./release.component.css'],
  templateUrl: './release.component.html'
})
export class ReleaseComponent implements OnInit {
  @Input() release: ReleaseModel;

  constructor() {}

  ngOnInit(): void {}

  getArtists(): string {
    const separator: string = ', ';
    return this.release.artists
      .map((artist: ArtistModel): string => artist.name)
      .join(separator);
  }
}