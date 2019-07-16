import axios from 'axios'
import { REQUEST_MOCKS } from 'app-constants'
import { baseMock, mocks } from './mocks'
import { API_URL } from 'app-constants'

const DEFAULT_REQUEST_TIMEOUT = 10000

const instance = axios.create({
  baseURL: API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT
})

/**
 * Must use REQUEST_MOCKS === String(true)
 * because if use another way the build
 * of Storybook fails
 */
if (REQUEST_MOCKS === String(true)) {
  instance.interceptors.request.use(
    async config => {
      const { url, method } = config

      if (url in mocks) {
        const error = new Error()
        error.data = mocks[url][method]
        error.config = config
        if (error.data.onUploadProgress) await error.data.onUploadProgress()
        return Promise.reject(error)
      }
      return config
    },
    error => Promise.reject(error)
  )

  instance.interceptors.response.use(
    response => response,
    error =>
      error.data
        ? Promise.resolve({ ...baseMock, ...error.data })
        : Promise.reject(error)
  )
}

const http = instance

export { http }
