import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
  },
  primitive: {
    orange: {
      50: '#fbf6f1',
      100: '#f7eadd',
      200: '#edd3bb',
      300: '#e2b48f',
      400: '#d58f62',
      500: '#cc7243',
      600: '#bd5d38',
      700: '#9e4930',
      800: '#7f3d2d',
      900: '#673327',
      950: '#371913',
    },
  },
})

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: '.p-dark',
  },
}
