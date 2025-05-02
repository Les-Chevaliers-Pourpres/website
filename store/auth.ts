import { reactive } from 'vue'
import { decodeJwt } from 'jose'
import User from '@/class/User'
import { handleFetch } from '~/helpers/handleFetch'
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '~/helpers/localStorage'
// import type { IModifiedPassword } from '~/interfaces/IModifiedPassword'

interface ICredentials {
  pseudo: String
  password: String
}

export const authStore = reactive({
  token: getLocalStorage('token'),
  userId: null as Number | null,
  user: new User(null),

  async login(credentials: ICredentials) {
    try {
      const response = await handleFetch({
        url: 'Auth/login',
        method: 'POST',
        body: credentials
      })
      return Promise.resolve(response)
    } catch (error: any) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ status: error.status, text: error.statusText, translated: true })
    }
  },

  setUserId(token: string) {
    const claims = decodeJwt(token)
    this.userId = claims.Id as Number
  },

  async getUser() {
    try {
      if (!this.userId && this.token) this.setUserId(this.token)
      const response = await handleFetch({
        url: `user/${this.userId}`,
        method: 'GET'
      })
      return Promise.resolve(response)
    } catch (error: any) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ status: error.status, text: error.statusText, translated: true })
    }
  },

  setToken(responsetoken: string) {
    setLocalStorage('token', responsetoken)
    this.token = responsetoken
  },

  setTokenStuff(token: string) {
    this.setToken(token)
  },

  setUser(responseUser: User) {
    localStorage.setItem('SUMO_user', JSON.stringify(responseUser))
    this.user = responseUser
  },

  removeToken() {
    removeLocalStorage('token')
    this.token = ''
  },

  removeUser() {
    removeLocalStorage('user')
    this.user = new User(null)
  },

  async modifyUser(body: User) {
    try {
      if (!this.userId && this.token) this.setUserId(this.token)
      const response = await handleFetch({
        url: `user/${this.userId}`,
        method: 'PUT',
        body
      })
      return Promise.resolve(response)
    } catch (error: any) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ status: error.status, text: error.statusText, translated: true })
    }
  },

  // async modifyPassword(body: IModifiedPassword) {
  //   try {
  //     const response = await handleFetch({
  //       url: `auth/update-password`,
  //       method: 'PUT',
  //       body
  //     })
  //     return Promise.resolve(response)
  //   } catch (error: any) {
  //     // eslint-disable-next-line prefer-promise-reject-errors
  //     return Promise.reject({ status: error.status, text: error.statusText, translated: true })
  //   }
  // },

  async getCode(email: string) {
    try {
      const response = await handleFetch({
        url: `auth/forgot-password`,
        method: 'POST',
        body: { email }
      })
      return Promise.resolve(response)
    } catch (error: any) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ status: error.status, text: error.statusText, translated: true })
    }
  }
})
