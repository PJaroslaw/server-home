<template>
  <div class="d-grid container gap-2">
    <template :key="link" v-for="link in links">
      <div style="cursor: pointer; max-height: 10em;" class="card bg-dark" @click="open(link.link)">
        <div class="card-body text-center">
          <img :src="`${link.icon}`" style="max-height: 8em; max-width: -webkit-fill-available;" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { links } from '@/scripts/shared';

const open = (link: string) => {
  window.open(`https://${link}`, '_blank');
}
</script>
