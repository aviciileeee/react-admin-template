type ENV = 'dev' | 'stg' | 'prd'

type ConfigItemType = {
  baseApi: string
  uploadApi: string
  mock: boolean
  mockApi: string
}

type ConfigType = {
  [prop in ENV]: ConfigItemType
}
const env = document.documentElement.dataset.env as ENV

const config: ConfigType = {
  dev: {
    baseApi: '/api',
    uploadApi: '/uplaod',
    mock: false,
    mockApi: '/mock'
  },
  stg: {
    baseApi: '/api',
    uploadApi: '/uplaod',
    mock: false,
    mockApi: '/mock'
  },
  prd: {
    baseApi: '/api',
    uploadApi: '/uplaod',
    mock: false,
    mockApi: '/mock'
  }
}

export default {
  env,
  ...config[env]
}
