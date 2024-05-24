import dayjs from 'dayjs'

export function formatMoney(origin: number | string) {
  const num = parseFloat(origin.toString())
  if (Number.isNaN(num)) {
    return ''
  }
  return num.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

export function formatDate(date?: Date, format?: string) {
  let curDate = new Date()
  if (date) {
    curDate = date
  }
  if (!format) {
    format = 'YYYY-MM-DD HH:mm:ss'
  }
  return dayjs(curDate).format(format)
}
