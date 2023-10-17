<script setup>
import SearchInput from '../Form/SearchInput.vue'
import { useMenubar } from '../../composables/index'

const { navList, toggle, isOpen } = useMenubar()
</script>

<template>
    <nav class="bg-charcoal fixed left-0 right-0 z-50">
        <div class="absolute top-5 left-5">
            <img src="../../assets/images/sprout-logo.png" class="h-8 mr-3" alt="Sprout Logo" />
        </div>
        <div class="w-full flex flex-wrap items-center justify-end mx-auto p-4 gap-6">
            <div class="flex items-center md:order-2">
                <SearchInput />

                <button  class="inline-flex items-center font-medium justify-center gap-2 px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg width="30" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#C4C4C4"/>
                    </svg>

                    Admin

                    <fa icon="fa-solid fa-caret-down" />
                </button>

                <button  @click="toggle" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div :class="isOpen ? 'block': 'hidden'" class="items-center justify-between w-full md:flex md:w-auto md:order-1">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-charcoal dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li
                        v-for="nav in navList"
                        :key="nav.title"
                    >
                        <button
                            id="dropdownNavbarLink"
                            class="flex items-center justify-between w-full gap-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-base">
                            {{ nav.title }} 
                            <fa icon="fa-solid fa-caret-down" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>