<template>
  <div class="basis-1/2 pl-28 mt-3 pr-5">
    <h2 class="text-xl bold font-bold mb-7">Event Details</h2>
    <div class="flex flex-col mb-9 relative">
      <label class="text-sm text-gray-700 mb-1">Enter your email here</label>
      <div class="relative">
        <input
          v-model="email"
          class="border-gray-300 border rounded py-2 px-3 w-full"
          :class="{ 'border-red-500': emailHasError }"
          placeholder="example@email.com"
          @keyup="resetEmailError"
        />
        <div
          v-if="emailHasError"
          class="absolute text-xs text-red-500 error-text"
        >
          There email is not valid.
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex items-center gap-7">
        <BaseIcon name="calendar" class="mt-1 ml-1" />
        <span class="text-gray-500 text-base flex">Date:</span>
        <datepicker
          class="ml-12"
          v-model="selectedDate"
          inputFormat="dd/MM/yyyy"
          :lower-limit="limitPreviousDays"
        />
      </div>
      <div class="flex items-center gap-7">
        <BaseIcon name="time" class="mt-1 ml-1" />
        <span class="text-gray-500 text-base flex"> Time:</span>
        <vue-timepicker
          v-model="selectedTime"
          format="h:mm A"
          :minute-interval="30"
          class="rounded ml-10"
          hide-clear-button
        />
      </div>
      <div class="flex items-center">
        <BaseIcon name="pin" class="mt-0 ml-1 mr-7" />
        <span class="text-gray-500 text-base flex mr-9">Timezone:</span>
        <select v-model="selectedTimeZone" class="w-40">
          <option
            v-for="timeZone in timeZones"
            :value="timeZone"
            :key="timeZone"
          >
            {{ timeZone }}
          </option>
        </select>
      </div>
    </div>
    <hr class="my-14" />
    <div>
      <h6 class="text-gray-500 text-base text-center">Event begins in:</h6>
      <div class="mt-12">
        <CountDown />
      </div>
      <button
        @click="sendRequest"
        :disabled="email.length == 0"
        class="rounded w-full bg-gray-400 text-gray-500 font-bold mt-11 py-2 disabled:opacity-40"
      >
        Count me in!
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseIcon from "../BaseIcon.vue";
import Datepicker from "vue3-datepicker";
import VueTimepicker from "vue3-timepicker/src/VueTimepicker.vue";
import CountDown from "../CountDown.vue";
import moment from "moment";
import "moment-timezone";
import { Ref, ref } from "vue";

const initialTime = "12:30 PM";

const email: Ref<string> = ref("");
const emailHasError: Ref<boolean> = ref(false);

/**
 * Model assigned to date picker
 * Initial Day is the next day from today
 */
const today: Date = new Date();
const tomorrow: Date = new Date(today);
const initialDate: number = tomorrow.setDate(tomorrow.getDate() + 1);
const selectedDate: Ref<number> = ref(initialDate);

/**
 * Limits the datepicker so you cannot select previous dates
 */
const limitPreviousDays: Ref<number> = ref(initialDate);

/**
 * Sets the default time
 */
const selectedTime: Ref<string> = ref(initialTime);

/**
 * Use the names() function that moment uses to get an array of timezones.
 */
const timeZones: string[] = moment.tz.names();

/**
 * Set the default timezone as Europe/Paris.
 * TODO: make the timezone dynamic from the users location
 */
const selectedTimeZone = "Europe/Paris";

/**
 * Handles on click button
 */
const sendRequest = (): boolean | void => {
  /**
   * First validate the user email
   */
  if (!validateEmail(email.value)) {
    return (emailHasError.value = true);
  }

  alert("Successfully registered for the event!");
  email.value = "";
  selectedDate.value = initialDate;
  selectedTime.value = initialTime;
};

/**
 *
 * @param mail
 * Validates the users email in input
 */
const validateEmail = (mail: string): boolean => {
  return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
};

/**
 * Resets the error state on keyup so the user can type again his email
 */
const resetEmailError = () => (emailHasError.value = false);
</script>

<style lang="scss">
.vue__time-picker {
  input {
    &.vue__time-picker-input {
      @apply border-0;
      @apply font-sans;
    }
  }
}

.error-text {
  bottom: -20px;
}
</style>
