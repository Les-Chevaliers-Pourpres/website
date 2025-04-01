import { reactive } from 'vue'
import type { IAlert } from '@/interfaces/IAlert'
import type { IApiResponse } from '@/interfaces/IApiResponse'

export const alertStore = reactive({
  defaultAlert: {
    text: 'error.anErrorOccured',
    additional: null,
    color: '#A52818',
    value: false
  } as IAlert,

  alert: {
    text: 'error.anErrorOccured',
    additional: null,
    color: '#A52818',
    value: false
  } as IAlert,

  setDefaultAlert() {
    this.alert = { ...this.defaultAlert }
  },

  setErrorAlert(response: IApiResponse) {
    this.setAlertText(response)
    this.displayAlert()
  },

  setSuccessAlert(response: IApiResponse) {
    this.setAlertText(response)
    this.alert.color = '#008800'
    this.displayAlert()
  },

  setAlertText(response: IApiResponse) {
    this.alert.text = response.code
    this.alert.additional = response.additional
  },

  displayAlert() {
    this.alert.value = true
  }
})
