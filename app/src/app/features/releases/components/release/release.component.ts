import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ReleaseModel } from '@app/shared/models';
import { StreamingLinksComponent } from '../streaming-links';

@Component({
  selector: 'app-release',
  styleUrls: ['./release.component.css'],
  templateUrl: './release.component.html'
})
export class ReleaseComponent {
  @Input() release: ReleaseModel;

  constructor(private bottomSheet: MatBottomSheet) {}

  openStreamingLinksBottomSheet(): void {
    this.bottomSheet.open(StreamingLinksComponent, {
      data: this.release,
      panelClass: ['dark-bottom-sheet']
    });
  }
}
