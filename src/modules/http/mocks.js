import { OK, getStatusText } from 'http-status-codes'

export const baseMock = {
  data: {},
  status: OK,
  statusText: getStatusText(200),
  headers: {},
  config: {},
  mocked: true
}

export const mocks = {
  'exemplo/me': {
    get: {
      onUploadProgress: false,
      data: {
        teste: 'teste'
      }
    }
  }
}
