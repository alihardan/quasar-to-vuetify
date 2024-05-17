<script setup>
import { useAttrs, computed } from 'vue'

const attrs = useAttrs()

const iconName = computed(() => {
  const icons = {
    circle: 'mdi-circle',
    o_edit: 'mdi-note-edit',
    o_delete: 'mdi-delete',
    o_drag_indicator: 'mdi-drag',
    o_paste: 'mdi-content-paste',
    o_file_upload: 'mdi-upload'
  }
  return icons[attrs.icon] || null
})

defineOptions({
  inheritAttrs: false
})
</script>
<template>
  <v-btn
    :icon="iconName"
    :text="$attrs.label"
    :density="'dense' in $attrs ? 'compact' : 'default'"
    :variant="'flat' in $attrs ? 'flat' : undefined"
    :to="$attrs.to || undefined"
    @click="$emit('click', $event)"
    :color="$attrs.color"
    ><template v-if="$slots.default" #default><slot /></template
  ></v-btn>
</template>
