<template>
  <div class="d-grid container gap-2">
    <template :key="index" v-for="(card, index) in cards">
      <template :key="link.title" v-for="link in card">
        <div style="cursor: pointer; max-height: 10em;" class="card bg-dark" @click="open(link.link)">
          <div class="card-body text-center">
            <img :src="`${link.icon}`" style="max-height: 8em; max-width: -webkit-fill-available;" />
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { cards } from '@/scripts/shared';

const open = (link: string) => {
  window.open(`https://${link}`, '_blank');
}
</script>
