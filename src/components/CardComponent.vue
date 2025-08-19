<template>
  <div class="col">
    <div class="card rounded-4 bg-dark border-0 overflow-hidden">
      <div class="d-flex justify-content-center gap-3">
        <template v-for="link in card" :key="link">
          <div @click="open(link.iframe, link.link)"
            style="cursor: pointer;" :title="link.title">
            <img height="150" :src="`${link.icon}`" class="card-img p-3">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardItem } from '@/scripts/shared';
//Props
defineProps<{
  card: CardItem
}>();

//Emits
const emits = defineEmits(['cardClick']);

const open = (iframe: boolean, link: string) => {
  emits('cardClick', { iframe: iframe, link: `https://${link}` });
}
</script>

<style lang="css" scoped>
.card-img {
  object-fit: contain;
}

.card-img:hover {
  scale: 1.2;
  transition: ease-in 200ms;
}

.card:hover {
  scale: 1.05;
  box-shadow: 0 0.5rem 1rem rgba(255, 0, 0, 0.5);
  transition: ease-in 200ms;
}
</style>
