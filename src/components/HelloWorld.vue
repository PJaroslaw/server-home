<template>
  <div class="d-grid container gap-2">
    <template :key="link" v-for="link in links">
      <div style="cursor: pointer; max-height: 10em;" class="card" @click="open(link.link)">
        <div class="card-body text-center">
          <img :src="getImageUrl(`${link.icon}`)" style="max-height: 8em; max-width: -webkit-fill-available;" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">

const getImageUrl = (image: string) => {
  return new URL(`@/assets/${image}.svg`, import.meta.url).href
}

const open = (link: string) => {
  window.open(`https://${link}`, '_blank');
}

const links = {
  plex: {
    link: 'plex.pjarek.duckdns.org',
    title: 'Plex',
    icon: 'plex-logo'
  },
  hass: {
    link: 'hass.pjarek.duckdns.org',
    title: 'Home Assistant',
    icon: 'home-assistant-logo-white'
  },
  ovrsr: {
    link: 'overseerr.pjarek.duckdns.org',
    title: 'Overseerr',
    icon: 'overseerr-logo-full'
  },
  rdr: {
    link: 'arr.pjarek.duckdns.org/radarr',
    title: 'Radarr',
    icon: 'radarr-logo-full'
  },
  snr: {
    link: 'arr.pjarek.duckdns.org/sonarr',
    title: 'Sonarr',
    icon: 'sonarr-logo'
  },
  prwlr: {
    link: 'arr.pjarek.duckdns.org/prowlarr',
    title: 'Prowlarr',
    icon: 'prowlarr-logo'
  },
  trns: {
    link: 'arr.pjarek.duckdns.org/transmissions',
    title: 'Transmission',
    icon: 'transmission-logo'
  },
};
</script>