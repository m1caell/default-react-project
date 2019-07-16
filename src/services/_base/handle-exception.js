import { RequestError } from 'app-models'
import { EXCEPTION } from './exceptions'

export default error => {
  if (error.response) {
    throw new RequestError(error.response.data)
  } else {
    throw new Error(EXCEPTION.API_EXCEPTION)
  }
}
