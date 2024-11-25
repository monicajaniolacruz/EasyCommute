<script setup>
import { RouterView } from 'vue-router'
import videoPath from './components/vids/login.mp4'
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
.logo {
  font-size: 2em;
  color: white;
  user-select: none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}
.transparent-navbar {
  background-color: transparent;
}

.nav-link {
  position: relative;
  font-size: 1.1em;
  color: white;
  text-decoration: none;
  font-weight: 300;
  margin-left: 50px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}
.nav-link a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: #fff;
  border-radius: 5px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.5s;
}
.nav-link a:hover::after {
  transform-origin: left;
  transform: scaleX(1);
}

.white-text-custom {
  color: white !important;
}

button {
  width: 130px;
  height: 50px;
  background: transparent;
  border: 2px solid white;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: white;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.5s;
  transform: translate(40%, 15%);
}

button:disabled {
  pointer-events: none;
}

button:hover {
  background: #fff;
  color: #162938;
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}

/* Responsive adjustments */
button {
  width: 130px;
  height: 50px;
  background: transparent;
  border: 2px solid white;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: white;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.5s;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  background: #fff;
  color: #162938;
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
