<script setup>
import { computed } from 'vue'
const props = defineProps({
    role: {
      type: String,
      required: false,
      default: () => 'button',
    },
    label: {
      type: String,
      required: true
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    buttonStyle: {
      type: String,
      required: false,
      default: () => 'default',
    },
    color: {
      type: String,
      required: false,
      default: () => 'primary',
    }
  },
)

const cssClasses = computed(() => {
      return {
        btn: true,
        outlined: props.buttonStyle === 'outlined',
        primary: props.buttonStyle === 'primary',
        'full-width': props.fullWidth
      }
})
</script>

<template>
  <component
    :is="role === 'button' ? 'button' : 'a'"
    v-bind="$attrs"
    :class="cssClasses"
    :disabled="disabled"
  >
    <!-- @slot Use this slot header -->
    <slot>
      <div class="flex justify-center gap-2">
        <slot name="icon" />
        {{ label }}
      </div>
    </slot>
  </component>
</template>