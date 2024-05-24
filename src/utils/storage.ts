export default {
  set(key: string, value: string | object) {
    if (typeof value === 'string') {
      localStorage.setItem(key, value)
    } else if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value))
    }
  },
  get(key: string) {
    const item = localStorage.getItem(key)
    if (item === null) return ''
    if (typeof item === 'string') {
      return item
    } else if (typeof item === 'object') {
      try {
        return JSON.parse(item)
      } catch (error) {
        console.error(error)
      }
    }
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clearAll() {
    localStorage.clear()
  }
}
