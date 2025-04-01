const prefix = 'CP_'

export const setLocalStorage = (key: string, value: any) => {
  let val = value
  if (typeof val !== 'string') val = JSON.stringify(val)
  localStorage.setItem(`${prefix}${key}`, val)
}

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(`${prefix}${key}`)
}

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(`${prefix}${key}`)
}
