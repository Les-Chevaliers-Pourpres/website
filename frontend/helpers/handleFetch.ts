import { authStore } from '~/store/auth.js'
import { alertStore } from '~/store/alert.js'

interface params {
  url?: string
  method?: string
  formdata?: FormData
  body?: Object
  fullURL?: string
}

export const handleFetch = async ({ url, method, formdata, body, fullURL }: params) => {
  const runtimeConfig = useRuntimeConfig()
  // dispatch('alert/setAlert', {}, { root: true })
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    exposedHeaders: 'Content-Disposition',
    authorization: `bearer ${authStore.token}`
  }

  if (formdata) delete headers['Content-Type']

  alertStore.setDefaultAlert()

  // penser à mettre un loader
  // Start Loading
  // dispatch('startLoading', undefined, { root: true })

  try {
    const res = await fetch(fullURL || `${runtimeConfig.public.apiUrl}${url}`, {
      method,
      headers,
      body: formdata ?? JSON.stringify(body)
    })

    let result

    // Error
    if (!res.status.toString().startsWith('20')) {
      result = await res.json()
      alertStore.setErrorAlert(result)
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: res.status,
        statusCode: res.status,
        translated: true,
        statusText: result,
        message: result
      })
    }

    if (res.headers?.get('Content-Type')?.includes('sql') || res.headers?.get('Content-Type')?.includes('pdf')) {
      const blob = await res.blob()

      const file = {
        name: res?.headers?.get('content-disposition')?.split("UTF-8''")[1],
        type: blob.type,
        size: blob.size,
        url: URL.createObjectURL(blob)
      }

      result = res.status === 204 ? {} : file
    } else {
      result = res.status === 204 ? {} : await res.json()
    }
    return Promise.resolve(result || true)
  } catch (error: any) {
    if (error.status && error.status === 401) {
      console.error(`Catch error of Unauthorize in: ${fullURL} with params ${JSON.stringify(body)}`, error)
    } else {
      console.error(`Error on handleFetch at : ${fullURL}`, error)
    }

    return Promise.reject(error)
  } finally {
    // loader à faire
    // dispatch('stopLoading', undefined, { root: true })
  }
}
