<template>
    <div class="col">    
        <div class="card rounded-4 bg-dark border-0 overflow-hidden" @click="open(link)" style="cursor: pointer;" :title="link.title">
            <img height="150" :src="`${link.icon}`" class="card-img p-3">
        </div>
    </div>
</template>

<script setup lang="ts">

//Props
    defineProps({
        link: { type: Object, required: true }
    });
    
//Emits
    const emits = defineEmits(['cardClick']);

//
	const open = (link: any) => {
        emits('cardClick', { iframe: link.canOpenInIframe, link: `https://${link.link}` });
	}
</script>

<style lang="css" scoped>
    .card-img{
        object-fit: contain;
    }

    .card-img:hover{
        scale: 1.2;
        transition: ease-in 200ms;
    }

    .card:hover{
        scale: 1.05;
        box-shadow: 0 0.5rem 1rem rgba(255, 0, 0, 0.5);
        transition: ease-in 200ms;
    }
</style>