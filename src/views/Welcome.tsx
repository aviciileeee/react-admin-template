import React, { memo, useEffect } from 'react'
import Request from '@/utils/request'
const Welcome = memo(() => {
  useEffect(() => {
    Request.get<{ name: string }>('/test').then(res => {
      console.log(res.name)
    })
  }, [])
  console.log(import.meta.env)
  return <div>Welcome</div>
})

export default Welcome
