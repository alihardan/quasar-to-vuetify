<script setup>
import { h, useSlots } from 'vue';

const slots = useSlots();
// to remove <q-td> wrapper
function SlotWithoutParentElement (props){
  return slots[props.name]({value:props.value, row:props.row})[0]['children'].default()
}
// import { h } from 'vue'
// import { VDataTable } from 'vuetify/components'
// import { h } from 'vue'
// export default {
//   props: {
//     /* ... */
//   },

//   setup(props, ctx) {
//     // const count = ref(1)

//     const slots = {}
//     Object.keys(ctx.slots)
//       .filter((e) => e.startsWith('body-cell-'))
//       .forEach((e) => {
//         console.log(ctx.slots[e]()[0]['children'].default())
//         slots['item.' + e.substring(10)] = h('div', 'bgb')
//       })

//     return () => [
//       h('div', Object.keys(ctx.slots).join(', ')),
//       h(
//         VDataTable,
//         {
//           items: ctx.attrs.rows,
//           headers: ctx.attrs.columns.map((e) => ({
//             ...e,
//             key: e.field,
//             title: e.label,
//             align: 'start'
//           }))
//         },
//         slots
//       )
//     ]

//     // VDataTable items={this.$attrs.rows}
//   }
// }
</script>

<template>
  <v-data-table
  :headers="$attrs.columns.map((e) => ({ ...e, key: e.field, title: e.label, align: e.align=='left'?'start' :'end' }))"
  :items="$attrs.rows"
  >
  <template v-if="$slots.body" #item><slot name="body" /></template>
  <template
  v-for="s in Object.keys($slots).filter((e) => e.startsWith('body-cell-'))"
  v-slot:['item.'+s.substring(10)]="props"
  >
    <SlotWithoutParentElement :name="s" :value="props.value" :row="props.item" />
    <!-- <slot :name="s" :value="props.value" :row="props.item" /> -->
  </template>
  </v-data-table>
</template>
