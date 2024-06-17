import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
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
