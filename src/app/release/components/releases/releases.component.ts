import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import {
  STREAMING_LINKS_PANEL_CLASS,
  StreamingLinksComponent
} from '../streaming-links/streaming-links.component';
import { ArtistDTO, ReleaseDTO, StreamingLinkDTO } from '../../dtos';
import { NotificationService, ReleaseService } from '../../services';

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
    const links: StreamingLinkDTO[] =
      await this.releaseService.getAllStreamingLinksOfRelease(release.id);
    this.bottomSheet.open(StreamingLinksComponent, {
      data: { releaseName: release.name, links },
      panelClass: STREAMING_LINKS_PANEL_CLASS
    });
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
    this.isLoadingData = true;
    this.releases = [];
    const releases: ReleaseDTO[] = await this.releaseService.getAllReleases();
    releases.forEach(async (dto: ReleaseDTO): Promise<void> => {
      const artists: string[] = (
        await this.releaseService.getAllArtistsOfRelease(dto)
      ).map((dto: ArtistDTO): string => dto.name);
      const cover: string = await this.releaseService.getCoverOfRelease(dto);
      this.releases.push(new ReleaseModel(dto, artists, cover));
    });
  }

  private initReloadButtonText(): void {
    this.reloadButtonText = 'RELOAD';
  }
}
