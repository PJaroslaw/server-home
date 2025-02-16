export const links = {
	plex: {
		title: 'Plex',
		link: 'plex.pjarek.duckdns.org',
		icon: new URL("@/assets/plex-logo.svg", import.meta.url).href,
		canOpenInIframe: true,
	},
	ovrsr: {
		title: 'Overseerr',
		link: 'overseerr.pjarek.duckdns.org',
		icon: new URL("@/assets/overseerr-logo-full.svg", import.meta.url).href,
		canOpenInIframe: true,
	},
	hass: {
		title: 'Home Assistant',
		link: 'hass.pjarek.duckdns.org',
		icon: new URL("@/assets/home-assistant-logo-white.svg", import.meta.url).href,
		canOpenInIframe: false,
	},
	rdr: {
		title: 'Radarr',
		link: 'arr.pjarek.duckdns.org/radarr',
		icon: new URL("@/assets/radarr-logo-full.svg", import.meta.url).href,
		canOpenInIframe: true,
	},
	snr: {
		title: 'Sonarr',
		link: 'arr.pjarek.duckdns.org/sonarr',
		icon: new URL("@/assets/sonarr-logo.svg", import.meta.url).href,
		canOpenInIframe: true,
	},
	prwlr: {
		title: 'Prowlarr',
		link: 'arr.pjarek.duckdns.org/prowlarr',
		icon: new URL("@/assets/prowlarr-logo.svg", import.meta.url).href,
		canOpenInIframe: true,
	},
	trns: {
		title: 'Transmission',
		link: 'arr.pjarek.duckdns.org/transmission',
		icon: new URL("@/assets/transmission-logo.svg", import.meta.url).href,
		canOpenInIframe: true,
	},
};