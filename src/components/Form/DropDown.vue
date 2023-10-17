<script setup>
defineProps({
    options: {
      type: Array,
      default: () => [
          {
              label: 'label',
              value: 'value'
          }
      ],
    },
    
  },
)
</script>

<template>
    <div class="dropdown flex flex-col">
        <label for="select" class="label">{{ $attrs.placeholder }}</label>
        <select
            v-bind="{
            ...$attrs,
            disabled
            }"
        >
            <option disable value="">Please select one</option>

            <option
                v-for="{value, label } in options"
                :key="value" value="vue"
            >
                {{ label }}
            </option>
        </select>
    </div>
</template>
