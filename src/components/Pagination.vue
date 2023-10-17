<script setup>
import BaseButton from './Base/Button.vue'
import ExportIcon from './Icons/Export.vue'
import BaseInput from './Base/Input.vue'
</script>

<template>
    <div class="flex items-center gap-2">
        <base-button
            class="text"
            >
            <template #icon>
                <div>
                    <fa icon="fa-solid fa-backward-step"/>
                </div>
            </template>
        </base-button>

        <base-button
            class="text"
            >
            <template #icon>
                <div>
                    <fa icon="fa-solid fa-caret-left"/>
                </div>
            </template>
        </base-button>

        <div> Page</div>

        <div class="w-3">
            <input
                class="focus:outline-none"
                value="1"
            />
        </div>

        <div>of 1</div>

        <base-button
            class="text"
            >
            <template #icon>
                <div>
                    <fa icon="fa-solid fa-caret-right"/>
                </div>
            </template>
        </base-button>

        <base-button
            class="text"
            >
            <template #icon>
                <div>
                    <fa icon="fa-solid fa-forward-step"/>
                </div>
            </template>
        </base-button>
    </div>
</template>