import React from 'react'
import { useParams } from 'next/navigation'

export default function Job() {
    const params = useParams()
    console.log(params)

  return (
      <div>{ params.id }</div>
  )
}

