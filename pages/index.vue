<script setup lang="ts">
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const route = useRoute()
const date = new Date()

const value1 = ''
const value2 = ''

const selectedCity = ref()
const countries = ref([
  {
    name: 'Australia',
    code: 'AU',
    states: [
      {
        name: 'New South Wales',
        cities: [
          { cname: 'Sydney', code: 'A-SY' },
          { cname: 'Newcastle', code: 'A-NE' },
          { cname: 'Wollongong', code: 'A-WO' },
        ],
      },
      {
        name: 'Queensland',
        cities: [
          { cname: 'Brisbane', code: 'A-BR' },
          { cname: 'Townsville', code: 'A-TO' },
        ],
      },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Quebec',
        cities: [
          { cname: 'Montreal', code: 'C-MO' },
          { cname: 'Quebec City', code: 'C-QU' },
        ],
      },
      {
        name: 'Ontario',
        cities: [
          { cname: 'Ottawa', code: 'C-OT' },
          { cname: 'Toronto', code: 'C-TO' },
        ],
      },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      {
        name: 'California',
        cities: [
          { cname: 'Los Angeles', code: 'US-LA' },
          { cname: 'San Diego', code: 'US-SD' },
          { cname: 'San Francisco', code: 'US-SF' },
        ],
      },
      {
        name: 'Florida',
        cities: [
          { cname: 'Jacksonville', code: 'US-JA' },
          { cname: 'Miami', code: 'US-MI' },
          { cname: 'Tampa', code: 'US-TA' },
          { cname: 'Orlando', code: 'US-OR' },
        ],
      },
      {
        name: 'Texas',
        cities: [
          { cname: 'Austin', code: 'US-AU' },
          { cname: 'Dallas', code: 'US-DA' },
          { cname: 'Houston', code: 'US-HO' },
        ],
      },
    ],
  },
])
</script>

<template>
  <div class="flex flex-col gap-4 p-20">
    <h1 class="text-3xl font-bold underline">Matej Kokol</h1>
    <h2>kokol.matej0@gmail.com</h2>
    <div class="w-56">
      <Calendar v-model="date" />
    </div>
    <div class="card flex justify-start">
      <CascadeSelect
        v-model="selectedCity"
        :options="countries"
        optionLabel="cname"
        optionGroupLabel="name"
        :optionGroupChildren="['states', 'cities']"
        style="min-width: 14rem"
        placeholder="Select a City"
      />
    </div>
    <IconField iconPosition="left">
      <InputIcon>
        <i class="pi pi-search" />
      </InputIcon>
      <InputText v-model="value1" placeholder="Search" />
    </IconField>

    <IconField>
      <InputIcon>
        <i class="pi pi-spin pi-spinner" />
      </InputIcon>
      <InputText v-model="value2" />
    </IconField>

    <FontAwesomeIcon :icon="{ faEnvelope }" style="color: red" />

    <Button label="Submit" />
  </div>
</template>
