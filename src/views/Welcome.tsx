import React, { memo, useEffect } from 'react'
import { login } from '@/service/modules/user'
const Welcome = memo(() => {
  useEffect(() => {
    login().then(res => {
      console.log(res.data)
    })
  }, [])
  console.log(import.meta.env)
  return <div>Welcome</div>
})

export default Welcome
