import { Component, Input } from '@angular/core';

import { StreamingLinkModel } from '@app/shared/models';

@Component({
  selector: 'app-streaming-link',
  styleUrls: ['./streaming-link.component.css'],
  templateUrl: './streaming-link.component.html'
})
export class StreamingLinkComponent {
  @Input('link') streamingLink: StreamingLinkModel;

  openStreamingLink(): void {
    window.open(this.streamingLink.link);
  }
}
