import React from 'react'
import { useParams } from 'react-router-dom'

const Username = () => {
    const params = useParams()
  return (
    <div className='p-8 text-2xl'>
      I am {params.myname}
    </div>
  )
}

export default Username
