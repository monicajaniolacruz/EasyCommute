<script setup>
import { RouterView } from 'vue-router'
import videoPath from './components/images/INDEX.mp4'


</script>

<template>
  <v-app>
    <!-- Background Video -->
    <div class="video-container">
      <video autoplay muted loop class="background-video">
        <source :src="videoPath" type="video/mp4" />
        Your browser does not support the video tag.
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
          <router-link to="#" class="nav-link">About</router-link>
          <router-link to="#" class="nav-link">Contact</router-link>
          <router-link to="#" class="nav-link">Settings</router-link>
        </nav>
        <router-link to="/auth">
          <button class="ml-3">Sign in</button>
        </router-link>
      </v-container>
    </v-app-bar>

    <RouterView />
  </v-app>
</template>

<style scoped>
.background-video {
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
  backdrop-filter: blur(5px);
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.7;
}
.white-text-custom {
  color: white !important;
}

button {
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #22034a;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3em;
  min-width: 0;
  outline: none;
  padding: 0.8em 2em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  color: #fff;
  background-color: #37277030;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}

/* Responsive adjustments */
button {
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #22034a;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px; /* Default font size */
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3em;
  min-width: 0;
  outline: none;
  padding: 0.8em 2em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  color: #fff;
  background-color: #37277030;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}

@media (max-width: 600px) {
  button {
    width: 100%;
    padding: 0.6em 1.5em;
    font-size: 12px;
    min-height: 2.5em;
  }
}
</style>