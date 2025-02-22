<template>
  <div class="d-flex h-100 text-center">
    <div class="d-flex w-100 h-100 mx-auto flex-column">
      <header
        class="d-flex justify-content-between align-items-center p-3 position-sticky top-0 z-3 bg-body text-body border-bottom">
        <h3 class="d-flex align-items-center gap-3 mb-0">
          <img class="rounded-4" src="/favicon.ico" />
          <span class="fw-bold">Pjarek</span>
        </h3>
        <nav class="nav nav-underline">
          <!-- <button class="nav-link fw-bold py-1 active text-body-emphasis" id="jarek-tab"  data-bs-toggle="tab" data-bs-target="#jarek-tab-pane">Jarek</button> -->
          <!-- <button class="nav-link fw-bold py-1 text-body-emphasis"        id="wojtek-tab" data-bs-toggle="tab" data-bs-target="#wojtek-tab-pane">Main</button> -->
          <!-- <button class="btn btn-sm btn-light rounded-pill" title="Change Theme" @click="changeTheme">
                        {{ theme === 'dark' ? 'Sun' : 'Moon'}}
                    </button> -->
          <div class="align-self-center" title="Change Theme" @click="changeTheme" style="cursor: pointer;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25"
              height="25" viewBox="0 0 256 256" xml:space="preserve">
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <rect x="42" y="0" rx="0" ry="0" width="6" height="15.79"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                  :style="`fill: ${theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}`"
                  transform=" matrix(1 0 0 1 0 0) " />
                <rect x="42" y="74.21" rx="0" ry="0" width="6" height="15.79"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                  :style="`fill: ${theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}`"
                  transform=" matrix(1 0 0 1 0 0) " />
                <rect x="0" y="42" rx="0" ry="0" width="15.79" height="6"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                  :style="`fill: ${theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}`"
                  transform=" matrix(1 0 0 1 0 0) " />
                <rect x="74.21" y="42" rx="0" ry="0" width="15.79" height="6"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                  :style="`fill: ${theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}`"
                  transform=" matrix(1 0 0 1 0 0) " />
                <path
                  d="M 74.698 11.059 l -15.71 15.71 C 54.99 23.689 50.129 22 45 22 c -12.682 0 -23 10.318 -23 23 c 0 5.13 1.689 9.991 4.769 13.989 L 11.059 74.698 l 4.242 4.242 L 78.94 15.301 L 74.698 11.059 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                  :style="`fill: ${theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}`"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <rect x="15.76" y="10.87" rx="0" ry="0" width="6" height="15.79"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                  :style="`fill: ${theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}`"
                  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -7.7721 18.7634) " />
                <rect x="68.24" y="63.34" rx="0" ry="0" width="6" height="15.79"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                  :style="`fill: ${theme === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}`"
                  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -29.5071 71.2363) " />
              </g>
            </svg>
          </div>
        </nav>
      </header>

      <main v-show="!showIframe" class="tab-content overflow-auto h-100 bg-body-secondary">
        <!-- <div id="jarek-tab-pane" class="tab-pane fade show active">
                    <div class="p-3">
                        <MyServer/>
                    </div>
                </div> -->
        <div id="wojtek-tab-pane" class="tab-pane fade show active">
          <div class="p-3 row row-cols-2 g-4 container mx-auto">
            <template v-for="link in links" :key="link">
              <Card :link="link" @cardClick="e => onCardClick(e)" />
            </template>
          </div>
        </div>
      </main>
      <div v-show="showIframe" class="h-100 m-2">
        <button class="btn-close position-absolute end-0 me-3 mt-2 p-2 border border-2 rounded-pill z-3"
          title="Close Iframe" @click="showIframe = false"></button>
        <iframe :src="iframeSrc" frameborder="0" class="h-100 w-100 rounded-3"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
// import MyServer from './MyServer.vue';
import Card from './CardComponent.vue';
import { links } from '@/scripts/shared';

//Refs
const theme = ref();
const iframeSrc = ref();
const showIframe = ref(false);

//Helper Methods
const changeTheme = () => {
  const elem: HTMLHtmlElement | null = document.querySelector('html');
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  elem?.setAttribute('data-bs-theme', theme.value);
}

type CardEvent = {
  iframe: boolean
  link: string
};
const onCardClick = (e: CardEvent) => {
  if (e.iframe) {
    showIframe.value = true;
    iframeSrc.value = e.link;
  } else {
    window.open(e.link, '_blank');
  }
}

//Mounted
onMounted(() => {
  const elem: HTMLHtmlElement | null = document.querySelector('html');
  theme.value = elem?.getAttribute('data-bs-theme');
});
</script>
