<script setup>
import { ref } from 'vue';
const value = ref('')

defineProps({
    label1: {
      type: String,
      default: () => 'Label1',
    },
    label2: {
      type: String,
      default: () => 'Label2',
    },
  },
)
</script>
<template>
    <ul
        class="btn-group">
        <li>
            <input
                v-model="value"
                type="radio"
                id="option 01"
                class="btn-group-item"
                name="option"
                checked
                :value="label1"
            />
            <label for="option 01" class="btn-label">
                {{ label1 }}

                <span
                    v-if="label1 ===  value"
                    class="text-white"
                >
                    <fa icon="fa-solid fa-check" />
                </span>
            </label>
        </li>
        <li>
            <input
                v-model="value"
                type="radio"
                id="option 02"
                class="btn-group-item"
                name="option"
                 :value="label2"
            />
            <label for="option 02" class="btn-label">
                {{ label2 }}
                <span
                    v-if="label2 ===  value"
                    class="text-white"
                >
                    <fa icon="fa-solid fa-check" />
                </span>
            </label>
        </li>
    </ul>
</template>