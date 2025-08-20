interface Link {
  title: string
  link: string
  icon: string
  iframe: boolean
}

export type CardItem = Link[]

export const cards: CardItem[] = [
  [
    {
      title: 'itTools',
      link: 'it-tools.pjarek.com',
      icon: new URL('@/assets/it-tools-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Jellyfin',
      link: 'jellyfin.pjarek.com',
      icon: new URL('@/assets/jellyfin-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Jellyseerr',
      link: 'jellyseerr.pjarek.com',
      icon: new URL('@/assets/jellyseerr-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Jellystat',
      link: 'jellystat.pjarek.com',
      icon: new URL('@/assets/jellystat-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Radarr',
      link: 'pjarek.com/radarr',
      icon: new URL('@/assets/radarr-logo.svg', import.meta.url).href,
      iframe: true,
    },
    {
      title: 'Radarr 4k',
      link: 'pjarek.com/radarr4k',
      icon: new URL('@/assets/radarr-4k-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Sonarr',
      link: 'pjarek.com/sonarr',
      icon: new URL('@/assets/sonarr-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Dockge',
      link: 'dockge.pjarek.com',
      icon: new URL('@/assets/dockge-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'Prowlarr',
      link: 'pjarek.com/prowlarr',
      icon: new URL('@/assets/prowlarr-logo.svg', import.meta.url).href,
      iframe: true,
    },
  ],
  [
    {
      title: 'qBittorrent',
      link: 'qbittorrent.pjarek.com',
      icon: new URL('@/assets/qbittorrent-logo.svg', import.meta.url).href,
      iframe: false,
    },
  ],
]
