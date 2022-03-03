const playlistTypes = {
  youtube: 'youtube',
  mixcloud: 'mixcloud'
}

export const mixes = [
  {
    section: 'Lounge',
    list: [
      {
        title: 'Disco Mix 5',
        type: playlistTypes.youtube,
        link: 'https://www.youtube.com/234234'
      },
      {
        title: 'Other mix 2',
        type: playlistTypes.mixcloud,
        link: 'https://www.mixcloud.com/234234'
      }
    ]
  },
  {
    section: 'Party Vibes',
    list: [
      {
        title: 'Disco Mix 5',
        type: playlistTypes.youtube,
        link: 'https://www.youtube.com/234234',
        desc: "house whatever"
      },
      {
        title: 'Other mix 2',
        type: playlistTypes.mixcloud,
        link: 'https://www.mixcloud.com/234234',
        desc: "something elseer"
      }
    ]
  }
];