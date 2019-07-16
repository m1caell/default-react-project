export function formDataToObject(form) {
  const data = {}

  for (const item of form) {
    const [key, value] = item
    data[key] = value
  }

  return data
}
