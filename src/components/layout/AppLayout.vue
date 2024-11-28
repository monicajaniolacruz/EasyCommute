<script setup>
import videoPath from '@/components/vids/home.mp4'
import { RouterView } from 'vue-router'
</script>
<template>
  <v-app>
    <!-- Background Video -->
    <div class="video-container">
      <video autoplay muted loop class="background-video">
        <source :src="videoPath" type="video/mp4" />
      </video>
    </div>

    <!-- Header Section -->
    <v-app-bar app flat class="transparent-navbar">
      <v-container class="d-flex align-center">
        <!-- Logo -->
        <v-app-bar-title class="text-h5 font-weight-bold white-text-custom">
          Easy Commute
        </v-app-bar-title>

        <!-- Navigation -->
        <v-spacer></v-spacer>
        <nav>
          <router-link to="#" class="nav-link">Home</router-link>
          <router-link to="#" class="nav-link">Complain</router-link>
          <router-link to="#" class="nav-link">Contact Us</router-link>
          <router-link to="#" class="nav-link">Profile</router-link>
        </nav>
      </v-container>
    </v-app-bar>
    <RouterView />
  </v-app>
</template>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.transparent-navbar {
  background-color: transparent;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.white-text-custom {
  color: white !important;
}
</style>
