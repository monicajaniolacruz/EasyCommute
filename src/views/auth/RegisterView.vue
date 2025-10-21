<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { ref } from 'vue'
import { supabase, formActionDefault } from '@/utils/supabase'

const IsPasswordVisible = ref(false)
const IsPasswordConfirmVisible = ref(false)
const currentForm = ref('register')
const refVform = ref()

const formDataDefault = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const formData = ref({
  ...formDataDefault,
})

const formAction = ref({
  ...formActionDefault,
})

const onRegister = async () => {
  formAction.value = { ...formActionDefault }
  formAction.value.formProcess = true

  const { data, error } = await supabase.auth.signUp({
    email: formData.value.email,
    password: formData.value.password,
    options: {
      data: {
        fullname: formData.value.fullname,
      },
    },
  })

  if (error) {
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    console.log(data)
    formAction.value.formSuccessMessage = 'Successfully Registered Account.'
    refVform.value?.reset()
  }
  formAction.value.formProcess = false
}

const onFormSubmit = () => {
  refVform.value?.validate().then(({ valid }) => {
    if (valid) onRegister()
  })
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-alert
      v-if="formAction.formSuccessMessage"
      :text="formAction.formSuccessMessage"
      title="Success!"
      type="success"
      variant="tonal"
      density="compact"
      border="start"
      closable
    ></v-alert>
    <v-alert
      v-if="formAction.formErrorMessage"
      :text="formAction.formErrorMessage"
      title="Ooops!"
      type="error"
      variant="tonal"
      density="compact"
      border="start"
      closable
    ></v-alert>
    <v-app>
      <!-- Background Video -->
      <div class="video-container">
        <video autoplay muted loop class="background-video">
          <source src="/public/images/register (1).mp4" type="video/mp4" />
        </video>
      </div>

      <!-- FORMS -->
      <v-container fluid class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <!-- Apply transparent background to v-card using class -->
            <v-card
              class="elevation-12 rounded-xl transparent-card blurred-background flexible-form"
            >
              <v-toolbar dark flat class="rounded-t-xl transparent-card">
                <v-toolbar-title class="text-h5 font-weight-bold text-center white--text">
                  Easy Commute
                </v-toolbar-title>
              </v-toolbar>

              <v-card-text class="pa-6 transparent-card white--text">
                <!-- Form Tabs and other content -->
                <v-tabs v-model="currentForm" grow class="white--text">
                  <v-tab value="login">SignUp</v-tab>
                </v-tabs>

                <v-window>
                  <v-window-item value="login">
                    <v-form ref="refVform" @submit.prevent="onFormSubmit">
                      <v-text-field
                        v-model="formData.fullname"
                        label="Full Name"
                        prepend-icon="mdi-account"
                        variant="filled"
                        color="white"
                        hide-details
                        :rules="[requiredValidator]"
                      ></v-text-field>
                      <v-text-field
                        v-model="formData.email"
                        label="Email"
                        prepend-icon="mdi-email"
                        variant="filled"
                        color="white"
                        hide-details
                        :rules="[requiredValidator, emailValidator]"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.password"
                        label="Password"
                        prepend-icon="mdi-lock"
                        variant="filled"
                        color="white"
                        :type="IsPasswordVisible ? 'text' : 'password'"
                        :append-icon="IsPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="IsPasswordVisible = !IsPasswordVisible"
                        :rules="[requiredValidator, passwordValidator]"
                      ></v-text-field>
                      <v-text-field
                        v-model="formData.confirmPassword"
                        label="Confirm Password"
                        prepend-icon="mdi-lock-check"
                        variant="filled"
                        color="white"
                        :type="IsPasswordConfirmVisible ? 'text' : 'password'"
                        :append-icon="IsPasswordConfirmVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="IsPasswordConfirmVisible = !IsPasswordConfirmVisible"
                        :rules="[
                          requiredValidator,
                          confirmedValidator(formData.confirmPassword, formData.password),
                        ]"
                      ></v-text-field>

                      <v-btn
                        class="mt-4 gradient-btn"
                        type="submit"
                        block
                        rounded
                        elevation="6"
                        :disabled="formAction.formProcess"
                        :loading="formAction.formProcess"
                      >
                        SIGN IN
                      </v-btn>
                    </v-form>
                  </v-window-item>
                </v-window>
                <v-divider class="my-5"></v-divider>
                <h5 class="text-center">
                  Already have an account?
                  <RouterLink class="btn-cyan" to="/">LOGIN</RouterLink>
                </h5>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <RouterView />
    </v-app>
  </v-responsive>
</template>

<style scoped>
.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%; /* Default width */
  height: auto; /* Maintain aspect ratio */
  transform: translate(-50%, -50%); /* Center the video */
  min-width: 100%; /* Ensure video covers the width */
  min-height: 100%; /* Ensure video covers the height */
  object-fit: cover; /* Scale to cover the entire container */
  z-index: -1; /* Behind all content */
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
  font-weight: bold;
  color: white;
  user-select: none;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
}
.transparent-navbar {
  background-color: transparent;
}

.white-text-custom {
  color: white !important;
}

/* Gradient button (blue-green theme) */
.gradient-btn {
  background: #98ded9;
  color: rgb(0, 0, 0) !important;
  text-transform: uppercase;

  letter-spacing: 1px;
  border-radius: 12px !important;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 255, 200, 0.3);
}

/* Hover effect - brighter glow */
.gradient-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 16px rgba(0, 255, 200, 0.5);
  background: linear-gradient(90deg, #00e5ff, #00c853);
}
@keyframes glow {
  0% {
    box-shadow:
      0 0 5px #00e5ff,
      0 0 10px #00c853;
  }
  50% {
    box-shadow:
      0 0 15px #00e5ff,
      0 0 25px #00c853;
  }
  100% {
    box-shadow:
      0 0 5px #00e5ff,
      0 0 10px #00c853;
  }
}

.gradient-btn:hover {
  animation: glow 1.5s infinite alternate;
}

/* Transparent Card */
.transparent-card {
  background-color: transparent !important;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Blurred Background */
.blurred-background {
  backdrop-filter: blur(10px);
}

/* White text for forms */
.white-input .v-input__control {
  color: white !important;
}

/* Ensure all text is white */
.white--text {
  color: white !important;
}

.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-radius: 4px;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative; /* To position the checkmark inside */
}

.custom-checkbox:checked {
  background-color: transparent;
  border-color: white; /* Ensure the border color is white when checked */
}

.custom-checkbox:checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 4px;
  width: 4px;
  height: 7px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg); /* Make the checkmark */
}

.ml-2 {
  margin-left: 8px;
}

.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}
/* ensure placeholder and input text readable */
:deep(.v-field__input) {
  color: #fff !important;
}
:deep(.v-field__label) {
  color: rgba(255, 255, 255, 0.9) !important;
}

/* give the filled input a subtle translucent background to stand out on the video */
:deep(.v-field--variant-filled .v-field__control) {
  background: rgba(0, 0, 0, 0.35) !important;
  border-radius: 6px;
  padding-left: 0.5rem;
}
/* Adjust spacing inside the card form */
.v-card-text {
  padding: 40px 40px !important;
}

/* Reduce spacing between form fields */
.v-input {
  margin-bottom: 30px !important;
}

/* Reduce space before the button */
.v-btn.gradient-btn {
  margin-top: 15px !important;
}
/* Move entire email field down or up */
.v-text-field:first-of-type {
  margin-top: 20px !important; /* increase to move down, decrease to move up */
}
.btn-cyan {
  display: inline-block;
  padding: 0.25rem 0.8rem; /* smaller padding */
  min-width: 15px; /* ensures a minimum width */
  height: 20px; /* fixed height */
  background-color: transparent; /* transparent background */
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 0.6rem; /* smaller text */
  border: 1px solid white; /* added white border */
  border-radius: 0rem;
  text-align: center;
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.btn-cyan:hover {
  background-color: rgba(255, 255, 255, 0.1); /* subtle hover effect */
  transform: translateY(-1px);
}
</style>
