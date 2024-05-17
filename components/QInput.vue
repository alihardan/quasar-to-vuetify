<script setup>
defineOptions({
  inheritAttrs: true
})
</script>
<template>
  <v-textarea
    v-if="$attrs.type == 'textarea'"
    :variant="'outlined' in $attrs ? 'outlined' : undefined"
    :density="'dense' in $attrs ? 'compact' : 'default'"
  />
  <v-text-field
    v-else
    :variant="'outlined' in $attrs ? 'outlined' : undefined"
    :density="'dense' in $attrs ? 'compact' : 'default'"
  />
</template>
