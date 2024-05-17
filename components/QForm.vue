<script setup>
defineOptions({
  inheritAttrs: false
})
defineEmits(['submit'])
</script>
<template>
  <v-form validate-on="submit lazy" @submit.prevent="$emit('submit', $event)">
    <slot />
  </v-form>
</template>
