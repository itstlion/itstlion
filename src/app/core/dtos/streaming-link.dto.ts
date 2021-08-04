export interface StreamingLinkDTO {
  id: number;
  link: string;
  platform: StreamingPlatformDTO;
}

enum StreamingPlatformDTO {
  APPLE_MUSIC = 'APPLE_MUSIC',
  DEEZER = 'DEEZER',
  SPOTIFY = 'SPOTIFY',
  YOUTUBE = 'YOUTUBE',
  YOUTUBE_MUSIC = 'YOUTUBE_MUSIC'
}
