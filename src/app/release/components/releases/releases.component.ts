import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import {
  STREAMING_LINKS_PANEL_CLASS,
  StreamingLinksComponent
} from '../streaming-links/streaming-links.component';
import { ArtistDTO, ReleaseDTO, StreamingLinkDTO } from '../../dtos';
import { NotificationService, ReleaseService } from '../../services';
import { HttpErrorResponse } from '@angular/common/http';

class ReleaseModel {
  artists: string[];
  cover: string;
  id: number;
  name: string;
  releaseDate: string;
  type: ReleaseTypeModel;

  constructor(dto: ReleaseDTO, artists: string[], cover: string) {
    this.artists = artists;
    this.cover = cover;
    this.id = dto.id;
    this.name = dto.name;
    this.releaseDate = dto.releaseDate;
    this.type = ReleaseTypeModel[dto.type];
  }
}

enum ReleaseTypeModel {
  ALBUM = 'Album',
  EP = 'EP',
  SINGLE = 'Single'
}

@Component({
  selector: 'app-releases',
  styleUrls: ['./releases.component.css'],
  templateUrl: './releases.component.html'
})
export class ReleasesComponent implements OnInit {
  isLoadingData: boolean;
  releases: ReleaseModel[];
  reloadButtonText: string;

  constructor(
    private bottomSheet: MatBottomSheet,
    private notificationService: NotificationService,
    private releaseService: ReleaseService
  ) {}

  ngOnInit(): void {
    this.initReloadButtonText();
    this.getAllReleases().catch((): void => this.catchReleasesRetrieving());
  }

  async openStreamingLinks(release: ReleaseModel): Promise<void> {
    try {
      const links: StreamingLinkDTO[] =
        await this.releaseService.getAllStreamingLinksOfRelease(release.id);
      this.bottomSheet.open(StreamingLinksComponent, {
        data: { releaseName: release.name, links },
        panelClass: STREAMING_LINKS_PANEL_CLASS
      });
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        const content: string =
          'No links are currently available for this release!';
        this.notificationService.notifyError(content);
      }
    }
  }

  reloadData(): void {
    this.getAllReleases().catch((): void => this.catchReleasesRetrieving());
  }

  private catchReleasesRetrieving(): void {
    this.isLoadingData = false;
    const content: string = 'Unable to fetch data from server!';
    this.notificationService.notifyError(content);
  }

  private async getAllReleases(): Promise<void> {
    const getArtistsAndCoverOfRelease = async (
      dto: ReleaseDTO
    ): Promise<void> => {
      const artists$: Promise<ArtistDTO[]> =
        this.releaseService.getAllArtistsOfRelease(dto);
      const cover$: Promise<string> =
        this.releaseService.getCoverOfRelease(dto);
      const results: [ArtistDTO[], string] = await Promise.all([
        artists$,
        cover$
      ]);
      const artists: string[] = results[0].map(
        (dto: ArtistDTO): string => dto.name
      );
      const release = new ReleaseModel(dto, artists, results[1]);
      this.releases.push(release);
    };

    this.isLoadingData = true;
    const releases: ReleaseDTO[] = await this.releaseService.getAllReleases();
    this.releases = [];
    for (const dto of releases) await getArtistsAndCoverOfRelease(dto);
    this.isLoadingData = false;
  }

  private initReloadButtonText(): void {
    this.reloadButtonText = 'RELOAD';
  }
}
