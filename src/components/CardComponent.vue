<template>
  <div class="col">
    <div class="card rounded-4 bg-dark border-0 overflow-hidden">
      <div class="d-flex justify-content-center">
        <template v-for="el in link" :key="el">
          <div @click="open(el.iframe, el.link)"
            style="cursor: pointer;" :title="el.title">
            <img height="150" :src="`${el.icon}`" class="card-img p-3">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

//Props
defineProps({
  link: { type: Array<{title: string, link: string; icon: string; iframe: boolean}>, required: true }
});

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
