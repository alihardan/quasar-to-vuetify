<template>
  <v-select
    :items="$attrs.options"
    :item-title="$attrs['option-label'] || 'label'"
    :item-value="$attrs['option-value'] || 'value'"
    :variant="'outlined' in $attrs ? 'outlined' : undefined"
    :density="'dense' in $attrs ? 'compact' : 'default'"
  ></v-select>
</template>
