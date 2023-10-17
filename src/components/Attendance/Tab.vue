<script setup>
import ExportIcon from '../Icons/Export.vue'
import ScheduleIcon from '../Icons/Schedule.vue'
</script>

<template>
    <ul class="space-y-2 px-4 font-medium">
        <li>
            <a href="/"
                :class="['flex items-center p-2 text-charcoal rounded-lg hover:bg-light-green hover:text-charcoal group',
                {'bg-light-green': $route.path === '/'} ]"
            >
            <schedule-icon />
            <span class="ml-3">attendance Logs</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-2 text-charcoal rounded-lg hover:bg-light-green hover:text-charcoal group">
            <export-icon />
            <span class="flex-1 ml-3 whitespace-nowrap">Exported Files</span>
            </a>
        </li>
    </ul>   
</template>