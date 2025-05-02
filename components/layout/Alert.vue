<template>
  <v-snackbar v-model="alert.value" :color="alert.color" tile @input="close()">
    <template #text>
      <p v-if="alert.color === 'error'" class="mb-0" role="alert">{{ $t(alert.text) }}</p>
      <p v-else class="mb-0">
        {{ $t(alert.text) }}<span v-if="alert.additional"> : {{ alert.additional }}</span>
      </p>
    </template>
    <template #actions>
      <v-btn small icon variant="text" color="white" @click="close()">
        <v-icon small color="white">mdi-close</v-icon>
        <span class="d-sr-only">{{ $t('commons.close') }}</span>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { alertStore } from '~/store/alert.js'
import type { IAlert } from '@/interfaces/IAlert'

const alert: ComputedRef<IAlert> = computed(() => {
  return alertStore.alert
})

const close = () => {
  alertStore.setDefaultAlert()
}
</script>
