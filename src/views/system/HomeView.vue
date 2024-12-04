<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <v-app>
    <!-- Background Video -->
    <div class="video-container">
      <video autoplay muted loop class="background-video">
        <source src="/public/images/homeview.mp4" type="video/mp4" />
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
          <router-link to="/complain" class="nav-link">Complain</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
          <router-link to="/profile" class="nav-link">Profile</router-link>
        </nav>
      </v-container>
    </v-app-bar>

    <!-- First Row (Content above video) -->
    <div class="overlay">
      <div class="main-title">DON'T KNOW</div>
      <div class="subtitle">WHERE TO GO?</div>
      <RouterLink to="/routes" style="text-decoration: none">
        <v-btn class="contact-button"> GET STARTED </v-btn>
      </RouterLink>
    </div>

    <RouterView />
  </v-app>
</template>

<style scoped>
/* Background Video */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

/* Video Container */
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Overlay Styles for text and button on the left */
.overlay {
  position: absolute;
  top: 50%;
  left: 10%; /* Aligns content to the left */
  transform: translateY(-50%); /* Vertically center the content */
  text-align: left; /* Align text to the left */
  color: white;
  z-index: 1; /* Ensure content is above the video */
}

/* Navbar Styles */
.transparent-navbar {
  background-color: transparent;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 50px;
  font-weight: 500;
  transition: opacity 0.3s ease;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}

.nav-link:hover {
  opacity: 0.8;
}

.white-text-custom {
  color: white !important;
}

.main-title {
  font-size: 7rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow:
    2px 2px 10px #00bfff,
    4px 4px 10px rgba(254, 254, 254, 0.8); /* Neon glow effect */
  margin-bottom: 10px;
}

.subtitle {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 3px;
}

/* Contact Button */
.contact-button {
  display: inline-block;
  background-color: #00bfff;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 255, 128, 0.4);
}

.contact-button:hover {
  background-color: #ffffff;
  color: #00bfff;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 255, 128, 0.6);
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .nav-link {
    margin-right: 20px;
  }

  .contact-button {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}
</style>
