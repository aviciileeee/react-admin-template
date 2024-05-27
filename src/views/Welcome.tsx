import React, { memo, useState } from 'react'
import { login } from '@/service/modules/user'
import { Button, App } from 'antd'
const Welcome = memo(() => {
  const [loading, setLoading] = useState(false)
  const { message } = App.useApp()
  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await login()
      console.log(res.data)
    } catch (error) {
      console.log(error)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      message.error((error as any).message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      Welcome
      <span>
        {loading ? 'loading....' : 'finished'} {loading}
      </span>
      <Button type='primary' loading={loading} onClick={handleLogin}>
        登录
      </Button>
    </div>
  )
})

export default Welcome
