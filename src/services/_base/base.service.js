import { http } from 'app-modules'
import handleException from './handle-exception'
import accessTokenHelper from './access-token-helper'

const RECAPTCHA_HEADER = 'X-Recaptcha'
const AUTHORIZATION_HEADER = 'Authorization'

const required = param => {
  throw new Error(`${param} is required`)
}

const mountRecaptchaHeader = (headers = [], token) => ({
  ...headers,
  [RECAPTCHA_HEADER]: token
})

const mountAuthorizationHeader = (headers = []) => ({
  ...headers,
  [AUTHORIZATION_HEADER]: accessTokenHelper.get()
})

const instance = http

export class BaseService {
  constructor(path = required('path')) {
    this.path = path
  }

  saveToken(token) {
    accessTokenHelper.save(token)
  }

  removeToken() {
    accessTokenHelper.delete()
  }

  async get(url, { isAuthorized, ...config }) {
    try {
      url = url ? `${this.path}/${url}` : this.path

      if (isAuthorized) {
        config.headers = mountAuthorizationHeader(config.headers)
      }

      const result = await instance.get(url, config)
      return result.data
    } catch (error) {
      handleException(error)
    }
  }

  async post(url, data, { isAuthorized, reCaptchaToken, ...config } = {}) {
    try {
      if (!!reCaptchaToken) {
        config.headers = mountRecaptchaHeader(config.headers, reCaptchaToken)
      }

      if (isAuthorized) {
        config.headers = mountAuthorizationHeader(config.headers)
      }

      const result = await instance.post(`${this.path}/${url}`, data, config)
      return result.data
    } catch (error) {
      handleException(error)
    }
  }

  async put(url, data, { isAuthorized, reCaptchaToken, ...config } = {}) {
    try {
      if (!!reCaptchaToken) {
        config.headers = mountRecaptchaHeader(config.headers, reCaptchaToken)
      }

      if (isAuthorized) {
        config.headers = mountAuthorizationHeader(config.headers)
      }

      const result = await instance.put(`${this.path}/${url}`, data, config)
      return result.data
    } catch (error) {
      handleException(error)
    }
  }

  async delete(id) {
    try {
      const result = await instance.delete(`${this.path}/${id}`)
      return result.data
    } catch (error) {
      handleException(error)
    }
  }

  async getById(id) {
    try {
      const result = await instance.get(`${this.path}/${id}`)
      return result.data
    } catch (error) {
      handleException(error)
    }
  }

  async save({ id, ...data }) {
    const method = id ? instance.post : instance.put
    const url = id ? `${this.path}/${id}` : this.path

    try {
      const result = await method(url, data)
      return result.data
    } catch (error) {
      handleException(error)
    }
  }
}
