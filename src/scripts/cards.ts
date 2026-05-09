interface Link {
  title: string
  link: string
  icon: string
  iframe: boolean
}

export type CardItem = Link[]

export const homeCards: CardItem[] = [
  [
    {
      title: 'itTools',
      link: 'https://it-tools.pjarek.com',
      icon: new URL('@/assets/it-tools-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Jellyfin',
      link: 'https://jellyfin.pjarek.com',
      icon: new URL('@/assets/jellyfin-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Seerr',
      link: 'https://seerr.pjarek.com',
      icon: new URL('@/assets/seerr-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Jellystat',
      link: 'https://jellystat.pjarek.com',
      icon: new URL('@/assets/jellystat-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
]

export const adminCards: CardItem[] = [
  [
    {
      title: 'Radarr',
      link: 'https://pjarek.com/radarr',
      icon: new URL('@/assets/radarr-logo.svg', import.meta.url).href,
      iframe: true,
    },
    {
      title: 'Radarr 4k',
      link: 'https://pjarek.com/radarr4k',
      icon: new URL('@/assets/radarr-4k-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Sonarr',
      link: 'https://pjarek.com/sonarr',
      icon: new URL('@/assets/sonarr-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Dockge',
      link: 'https://dockge.pjarek.com',
      icon: new URL('@/assets/dockge-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Prowlarr',
      link: 'https://pjarek.com/prowlarr',
      icon: new URL('@/assets/prowlarr-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'qBittorrent',
      link: 'https://pjarek.com/qbittorrent',
      icon: new URL('@/assets/qbittorrent-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Nginx Proxy Manager',
      link: 'https://nginx.pjarek.com',
      icon: new URL('@/assets/nginx-logo.svg', import.meta.url).href,
      iframe: true,
    }
  ]
]
