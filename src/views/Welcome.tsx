import React, { memo, useEffect, useRef } from 'react'
const Welcome = memo(() => {
  // const targetNode = useRef(null)
  useEffect(() => {
    const observer = new MutationObserver(function (mutationList, observer) {
      console.log('in', mutationList, observer)
    })
    observer.observe(document.querySelector('#content')!, {
      attributes: true,
      childList: true,
      subtree: true
    })
  })
  return (
    <>
      <div id='content'>
        <span>welcome</span>
      </div>
    </>
  )
})

export default Welcome
