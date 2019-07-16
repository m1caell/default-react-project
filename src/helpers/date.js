import moment from 'moment'

export const DateHelper = (date, format = 'DD/MM/YYYY HH:mm') => {
  return moment(date, format)
}
