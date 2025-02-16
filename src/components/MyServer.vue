<template>
  <div class="d-grid container gap-2">
    <template :key="link" v-for="link in links">
      <div style="cursor: pointer; max-height: 10em;" class="card" @click="open(link.link)">
        <div class="card-body text-center">
          <img :src="`${link.icon}`" style="max-height: 8em; max-width: -webkit-fill-available;" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.body.classList.add(prefersDark ? 'dark' : 'light');

const open = (link: string) => {
  window.open(`https://${link}`, '_blank');
}

const links = {
  plex: {
    link: 'plex.pjarek.duckdns.org',
    icon: new URL("@/assets/plex-logo.svg", import.meta.url).href
  },
  hass: {
    link: 'hass.pjarek.duckdns.org',
    icon: new URL("@/assets/home-assistant-logo-white.svg", import.meta.url).href
  },
  ovrsr: {
    link: 'overseerr.pjarek.duckdns.org',
    icon: new URL("@/assets/overseerr-logo-full.svg", import.meta.url).href
  },
  rdr: {
    link: 'arr.pjarek.duckdns.org/radarr',
    icon: new URL("@/assets/radarr-logo-full.svg", import.meta.url).href
  },
  snr: {
    link: 'arr.pjarek.duckdns.org/sonarr',
    icon: new URL("@/assets/sonarr-logo.svg", import.meta.url).href
  },
  prwlr: {
    link: 'arr.pjarek.duckdns.org/prowlarr',
    icon: new URL("@/assets/prowlarr-logo.svg", import.meta.url).href
  },
  trns: {
    link: 'arr.pjarek.duckdns.org/transmissions',
    icon: new URL("@/assets/transmission-logo.svg", import.meta.url).href
  },
};
</script>
