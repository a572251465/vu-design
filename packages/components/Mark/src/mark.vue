<template>
  <div class="vu-mask" :style="styles" :class="classes" @click="closeHandle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { styleCommonPrefix } from '@vu-design/utils'

export default defineComponent({
  name: 'VuMask',
  props: {
    zIndex: {
      type: Number,
      default: 1000
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  emits: ['closeHandle'],
  setup(props, { emit }) {
    const styles = computed(() => ({
      zIndex: props.zIndex
    }))
    const classes = computed<object>(() => [
      {
        [`${styleCommonPrefix.$statePrefix}center`]: props.center
      }
    ])
    const closeHandle = () => {
      emit('closeHandle')
    }

    return {
      styles,
      closeHandle,
      classes
    }
  }
})
</script>
