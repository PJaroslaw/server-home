export const links = {
  plex: {
    title: 'Plex',
    link: 'plex.pjarek.duckdns.org',
    icon: new URL('@/assets/plex-logo.svg', import.meta.url).href,
    iframe: true,
  },
  ovrsr: {
    title: 'Overseerr',
    link: 'overseerr.pjarek.duckdns.org',
    icon: new URL('@/assets/overseerr-logo-full.svg', import.meta.url).href,
    iframe: true,
  },
  hass: {
    title: 'Home Assistant',
    link: 'hass.pjarek.duckdns.org',
    icon: new URL('@/assets/home-assistant-logo-white.svg', import.meta.url).href,
    iframe: false,
  },
  msgs: {
    title: 'Messenger',
    link: 'facebook.com/messages/t/',
    icon: new URL('@/assets/messenger-logo.svg', import.meta.url).href,
    iframe: false,
  },
  rdr: {
    title: 'Radarr',
    link: 'arr.pjarek.duckdns.org/radarr',
    icon: new URL('@/assets/radarr-logo-full.svg', import.meta.url).href,
    iframe: true,
  },
  snr: {
    title: 'Sonarr',
    link: 'arr.pjarek.duckdns.org/sonarr',
    icon: new URL('@/assets/sonarr-logo.svg', import.meta.url).href,
    iframe: true,
  },
  prwlr: {
    title: 'Prowlarr',
    link: 'arr.pjarek.duckdns.org/prowlarr',
    icon: new URL('@/assets/prowlarr-logo.svg', import.meta.url).href,
    iframe: true,
  },
  trns: {
    title: 'Transmission',
    link: 'arr.pjarek.duckdns.org/transmission',
    icon: new URL('@/assets/transmission-logo.svg', import.meta.url).href,
    iframe: true,
  },
}
