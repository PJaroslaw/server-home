<template>
  <MainComponent :cards="adminCards" />
</template>

<script setup lang="ts">
import MainComponent from './MainComponent.vue';
import { adminCards } from '@/scripts/cards';
</script>
