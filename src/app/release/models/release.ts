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
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/friends-and-fam-ep/1652347409'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/371842297' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/56T8Qmu11ZGW6O1DfN8yvm'
      },
      { platform: 'YouTube', link: 'https://youtu.be/1i4YEb6fvIQ' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_lV7IUyt5rZ7VCI9LsEiGzt9YxSoETzmKM'
      }
    ]
  },
  {
    name: 'Sunset Dreamer',
    publicationDate: '2021-09-24',
    type: 'Single',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/sunset-dreamer-single/1648770714'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/363407147' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/5uho1Lrk4dHYw6QRVKj37q'
      },
      { platform: 'YouTube', link: 'https://youtu.be/ed2_czk71os' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_k58ZlUzIAwsSTWi_DbD6Il3kDuljZBeM4'
      }
    ]
  },
  {
    name: 'Sunny Window',
    publicationDate: '2021-07-23',
    type: 'Single',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/sunny-window-single/1646641689'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/359626457' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/0v2Y2PQLxvNAHHGbig7gNi'
      },
      { platform: 'YouTube', link: 'https://youtu.be/LFEsSOw_vTQ' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_nlLORhB41L8aS0NyhZGiazwZstbINn8-k'
      }
    ]
  },
  {
    name: 'Stillness in Darkness',
    publicationDate: '2021-06-25',
    type: 'Single',
    artists: ['T.Lion', 'Fe.Arts'],
    links: [
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/371840357' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/1lx2X3BGWuRkxsiOmEEiNp'
      },
      { platform: 'YouTube', link: 'https://youtu.be/onS-lAVn7y0' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_ka163OC85cMxOwdHNg5_D8SLZ7l8ZPjZ8'
      }
    ]
  },
  {
    name: 'Morning Light',
    publicationDate: '2021-05-07',
    type: 'EP',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/morning-light-ep/1646641908'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/359627727' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/019uCxaIocuGd5OJ6eI53B'
      },
      { platform: 'YouTube', link: 'https://youtu.be/-Ge4FrPYznM' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_kJg7OZdHPNAFH6XGhRQqZs9OvZFxUp20M'
      }
    ]
  },
  {
    name: 'Forgotten Dreams',
    publicationDate: '2021-01-15',
    type: 'Single',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/forgotten-dreams-single/1646612499'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/359630177' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/2wkAiEqnGxqhlHh4SFeo1H'
      },
      { platform: 'YouTube', link: 'https://youtu.be/DcK7Ye50bwE' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_ln06xknPdNNIOqHTn7WfqKMGBZgeiQ190'
      }
    ]
  },
  {
    name: 'Thinking About You',
    publicationDate: '2020-11-26',
    type: 'Single',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/thinking-about-you-single/1646612538'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/359628987' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/7uYwRHV4iUvqyT8E97M33n'
      },
      { platform: 'YouTube', link: 'https://youtu.be/AtnGsodKwC8' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_lp4DUJDAojns8wMyQsbMs8D2rZ_w8U1l8'
      }
    ]
  },
  {
    name: 'My Sunshine',
    publicationDate: '2020-10-16',
    type: 'Single',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/my-sunshine-single/1646612257'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/359632807' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/5HfNopJr687fXPdtU9HhcU'
      },
      { platform: 'YouTube', link: 'https://youtu.be/V-DA_YbzfgM' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_mDbGId4ECxFCSH_XqUz_UmbHVJ4K4YsLg'
      }
    ]
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
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/dans-le-silence-single/1646612530'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/359632247' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/3B4avMFWc9gEwdWLUN6s7x'
      },
      { platform: 'YouTube', link: 'https://youtu.be/lt0tLs9k190' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_k-OR4DH9l1tFyza7ArqpIEj3tCaMLhgKM'
      }
    ]
  },
  {
    name: 'Crépuscule',
    publicationDate: '2020-04-25',
    type: 'Single',
    artists: ['T.Lion'],
    links: [
      {
        platform: 'Apple Music',
        link: 'https://music.apple.com/fr/album/cr%C3%A9puscule-single/1644086627'
      },
      { platform: 'Deezer', link: 'https://www.deezer.com/fr/album/354741877' },
      {
        platform: 'Spotify',
        link: 'https://open.spotify.com/album/07YBkei9Ghtp6LRsjsCu0I'
      },
      { platform: 'YouTube', link: 'https://youtu.be/dL4_2uuLrrw' },
      {
        platform: 'YouTube Music',
        link: 'https://music.youtube.com/playlist?list=OLAK5uy_n5x9vq-wf3xEPP9nnKZ61iTpi6NFUgkrI'
      }
    ]
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
