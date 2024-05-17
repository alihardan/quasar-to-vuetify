<script setup>
import { useAttrs, computed } from 'vue'

const attrs = useAttrs()

const iconName = computed(() => {
  const icons = {
    circle: 'mdi-circle'
  }
  return icons[attrs.name] || null
})
</script>
<template>
  <v-icon :icon="iconName" />
</template>
