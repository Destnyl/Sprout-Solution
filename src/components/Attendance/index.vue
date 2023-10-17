<script setup>
import BaseButton from '../Base/Button.vue'
import GroupButton from '../Base/GroupButton.vue'
import ExportIcon from '../Icons/Export.vue'

import TimeCalendar from '../Icons/SolidTimeCalendar.vue'
import BuildingIcon from '../Icons/Building.vue'
import PeopleGroupIcon from '../Icons/PeopleGroup.vue'
import MapPinIcon from '../Icons/MapPin.vue'
import UserIcon from '../Icons/User.vue'

import TableContainer from '../Containers/Table.vue'
import Empty from '../Icons/Empty.vue'
import tab from './Tab.vue'
import BaseInput from '../Base/Input.vue'
import Dropdown from '../Form/DropDown.vue'
import pagination from '../Pagination.vue'

import { ref } from 'vue'

const value = ref('')
const isEditable = ref(false)

const companies = ref([
  {
    value: 'Sprout Solution',
    label: 'Sprout Solution',
  },
  {
    value: 'Jollibee Corporation',
    label: 'Jollibee Corporation',
  },
  {
    value: 'All',
    label: 'All',
  }
])

const department = ref([
  {
    value: 'Technology',
    label: 'Technology',
  },
  {
    value: 'Solution',
    label: 'Solution',
  },
  {
    value: 'All',
    label: 'All',
  }
])

const locations = ref([
  {
    value: 'No Location',
    label: 'No Location',
  },
  {
    value: 'Mandaluyong',
    label: 'Mandaluyong',
  }
])

const employees = ref([
  {
    value: 'Andrea Destajo',
    label: 'Andrea Destajo',
  },
  {
    value: 'John Doe',
    label: 'John Doe',
  },
  {
    value: 'All',
    label: 'All',
  }
])



const filters = ref({
    company:   { value: 'All', label: 'All'},
    department:   { value: 'All', label: 'All'},
    location:   { value: 'All', label: 'All'},
    employee:   { value: 'All', label: 'All'},
})
</script>

<template>
    <div>
        <button data-drawer-target="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-20 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
           <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
           </svg>
        </button>
        
        <aside class="fixed pt-20 left-0 z-40 w-[354px] h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-dark-gray" aria-label="Sidebar">
           <div class="h-full overflow-y-auto divide-y divide-gray flex flex-col gap-6">
              <section class="flex flex-col gap-2 p-6">
                  <h6 class="text-2xl font-medium">Manage Attendance</h6>
                  <p class="text-sm">Attendance management is where you can generate, add, edit, and export the logs of the employees.</p>

                  <tab />  
              </section>

              <section class="flex flex-col gap-4 p-6">
                <div class="text-sm font-medium text-transform: uppercase">Date Range</div>
               <div class=" flex flex-col gap-4 self-center w-full">
                  <base-input
                    type="date"
                    v-model="value"
                  />
                  <base-input
                    type="date"
                  />
               </div>
                <div class="flex justify-between items-center">
                    <div class="text-sm font-medium text-transform: uppercase">Filters</div>
                    <base-button
                        class="text"
                        :label="isEditable? 'Show All' : 'Hide All'"
                        button-style="text"
                        @click="() => isEditable = !isEditable"
                    />
                </div>
                <div>
                    <fragment
                        v-if="!isEditable"
                        class="flex flex-col gap-2"
                    >
                        <dropdown
                            v-model="filters.company"
                            placeholder="Company"
                            :options="companies"
                        />
                        <dropdown
                            placeholder="Select Department"
                            :options="department"
                        />
    
                        <dropdown
                            placeholder="Select Location"
                            :options="locations"
                        />
    
                        <dropdown
                            placeholder="Select Employee"
                            :options="employees"
                        />
                    </fragment>

                    <fragment 
                        v-else
                        class="flex flex-col gap-2"
                    >
                        <div class="flex items-center gap-2">
                            <building-icon />
                            <p>{{ filters.company.value }}</p>
                        </div>

                        <div class="flex items-center gap-2">
                            <people-group-icon />
                            <p>{{ filters.company.value }}</p>
                        </div>

                        <div class="flex items-center gap-2">
                            <map-pin-icon />
                            <p>{{ filters.company.value }}</p>
                        </div>

                        <div class="flex items-center gap-2">
                            <user-icon />
                            <p>{{ filters.company.value }}</p>
                        </div>
                    </fragment>
                </div>

              </section>

              <section class="flex flex-col gap-2 p-6">
                  <base-button
                  label="Search Employee"
                  full-width
                  >
                    <template #icon>
                        <fa icon="fa-solid fa-search" />
                    </template>
                  </base-button>
                  <base-button
                  class="outlined"
                  label="Export"
                  full-width
                  >
                    <template #icon>
                        <div>
                            <export-icon />
                        </div>
                    </template>
                  </base-button>
              </section>
           </div>
        </aside>
        
        <div class="p-4 pt-20 sm:ml-[22rem]">
            <section class="flex justify-between py-5">
                <div class="flex flex-row gap-2 items-center">
                    <time-calendar />
                    <p class="font-medium text-base">
                        Date Range
                    </p>
                </div>

                <div class="flex">
                  <group-button
                    label1="Activity logs"
                    label2="Deleted Logs"
                  />
                </div>
            </section>

            <section>
                <table-container>
                    <template #table>
                        <div class="flex flex-col items-center py-80">
                            <empty />
                            <h6 class="font-medium text-2xl">No attendance logs to show</h6>
                            <p class="text-base">Get started by searching for the logs</p>
                        </div>
                    </template>

                    <template #pagination>
                        <div class="flex flex-row justify-between p-4">
                            <section  class="flex flex-row justify-between gap-4">
                                <p>
                                    Items per page
                                </p>
                                <select
                                    name="page"
                                    id="page"
                                    class="border border-1 rounded"
                                >
                                    <option
                                        v-for="i in 10"
                                        :key="i"
                                        :value="i"
                                    >
                                        {{ i }}
                                    </option>
                                </select>
                            </section>

                            <section>
                                <pagination />
                            </section>

                            <section>
                                Showing of 0 of 0
                            </section>
                        </div>
                    </template>
                </table-container>
            </section>
        </div>
    </div>
</template>