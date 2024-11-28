<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
<template>
  <AppLayout>
    <v-container class="text-center">
      <v-row justify="center" align="center" class="button-row">
        <v-col cols="12" md="4" sm="6">
          <v-btn class="custom-btn" rounded="lg" size="x-large" block> Rounded lg </v-btn>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <v-btn class="custom-btn" rounded="xl" size="x-large" block> Rounded xl </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </AppLayout>
</template>

<style scoped>
.custom-btn {
  background-color: blue; /* Set button background color to blue */
  color: white; /* Set the text color to white */
  transition: 0.3s; /* Smooth transition for hover effect */
}

.custom-btn:hover {
  background-color: darkblue; /* Darker blue when hovered */
  color: white; /* Ensure text stays white on hover */
}

.custom-btn {
  position: absolute;
  top: var(--button-top, 50%); /* Allow for adjustable top position */
  left: var(--button-left, 50%); /* Allow for adjustable left position */
  transform: translate(-50%, -50%); /* Center the button exactly */
}

.custom-btn:disabled {
  pointer-events: none;
}

/* Remove absolute positioning to keep the grid layout intact */
.button-row {
  min-height: 100vh; /* Ensure the row takes up full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
