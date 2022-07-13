type Platform =
  | 'Apple Music'
  | 'Deezer'
  | 'Spotify'
  | 'YouTube'
  | 'YouTube Music';

export interface Link {
  platform: Platform;
  link: string;
}

export interface Release {
  name: string;
  publicationDate: string;
  type: 'Album' | 'EP' | 'Single';
  artists: string[];
  links: Link[];
}

export const RELEASES: Release[] = [
  {
    name: 'Frozen',
    publicationDate: '2022-07-13',
    type: 'Single',
    artists: ['Skengybeatz', 'Bertram Kvist', 'T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/gb/album/frozen-single/1630985365'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/333045927' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/track/38xWoM5sWIRD0Cgjh7XGNZ'
      },
      { platform: 'YouTube', link: 'https://youtu.be/s-uoA165Bsk' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_nCRaDLULppV31LYlLZMchsernffQgrNok'
      }
    ]
  },
  {
    name: 'High Tide',
    publicationDate: '2021-11-26',
    type: 'Single',
    artists: ['T.Lion', 'CMJ'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/gb/album/high-tide-single/1591452765'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/267230372' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/track/5Sws5Q1EHsuMQVb3GGchum'
      },
      { platform: 'YouTube', link: 'https://youtu.be/XQVA1JCONDA' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_lUHtPac4epAlucEeG7BVqkDnwDYsjZqOk'
      }
    ]
  },
  {
    name: 'Friends and Fam',
    publicationDate: '2021-10-29',
    type: 'EP',
    artists: ['T.Lion', 'ONE.dot'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/1i4YEb6fvIQ' }]
  },
  {
    name: 'Sunset Dreamer',
    publicationDate: '2021-09-24',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/ed2_czk71os' }]
  },
  {
    name: 'Sunny Window',
    publicationDate: '2021-07-23',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/LFEsSOw_vTQ' }]
  },
  {
    name: 'Stillness in Darkness',
    publicationDate: '2021-06-25',
    type: 'Single',
    artists: ['T.Lion', 'Fe.Arts'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/onS-lAVn7y0' }]
  },
  {
    name: 'Morning Light',
    publicationDate: '2021-05-07',
    type: 'EP',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/-Ge4FrPYznM' }]
  },
  {
    name: 'Forgotten Dreams',
    publicationDate: '2021-01-15',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/DcK7Ye50bwE' }]
  },
  {
    name: 'Thinking About You',
    publicationDate: '2020-11-26',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/AtnGsodKwC8' }]
  },
  {
    name: 'My Sunshine',
    publicationDate: '2020-10-16',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/V-DA_YbzfgM' }]
  },
  {
    name: 'Jasmine',
    publicationDate: '2020-08-28',
    type: 'Single',
    artists: ['C4C', 'T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/gb/album/jasmine/1526902681'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/165855882' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/1kUtwvX4TBQUTl5AdP2f3M'
      },
      { platform: 'YouTube', link: 'https://youtu.be/D-2HTBiK1qo' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_lv4B-uXAfPVKewHSB3B-ICxxBehlHDqzQ'
      }
    ]
  },
  {
    name: 'Dans le Silence',
    publicationDate: '2020-06-27',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/lt0tLs9k190' }]
  },
  {
    name: 'Crépuscule',
    publicationDate: '2020-04-25',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/dL4_2uuLrrw' }]
  },
  {
    name: 'Reminiscing',
    publicationDate: '2020-02-22',
    type: 'Single',
    artists: ['T.Lion'],
    links: [{ platform: 'YouTube', link: 'https://youtu.be/2vWs85pRs2E' }]
  },
  {
    name: 'Beginning',
    publicationDate: '2019-11-30',
    type: 'EP',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/beginning-ep/1484661949'
      },
      { platform: 'Deezer', link: 'https://deezer.com/album/116396862' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/6k6KGfuMzKGxEqDYZ6Rtbu'
      },
      { platform: 'YouTube', link: 'https://youtu.be/FVLL8rYIc70' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_li2WMuUAlnMJNDDowjdIWMWPTZcZ18gJ0'
      }
    ]
  },
  {
    name: 'Sunrise',
    publicationDate: '2019-11-16',
    type: 'Single',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/sunrise-single/1484644574'
      },
      { platform: 'Deezer', link: 'https://deezer.com/fr/album/116402062' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/4tJGx7mpccr795RXWe3PX3'
      },
      { platform: 'YouTube', link: 'https://youtu.be/kWhzSORMG3A' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_nhw6exj4iq2-wFm7uypMYGYfGtAqdzkoI'
      }
    ]
  }
];
