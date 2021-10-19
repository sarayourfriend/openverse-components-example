<template>
  <OButton variant="primary" :margin="2" @click="handleClick" @mouseenter="handleMouseEnter">This is a primary button</OButton>
  <OButton variant="secondary" :margin="2">This is a secondary button</OButton>
  <OButton type="submit" :margin="2">This is a submit button</OButton>
</template>

<script setup lang="ts">
import OButton from './components/OButton.vue'

const handleClick = () => window.alert('hello, world!')
const handleMouseEnter = (event: MouseEvent) => console.log('mouse entered!', event)
</script>
