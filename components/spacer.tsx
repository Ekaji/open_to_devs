import React from 'react'

export default function Spacer({ space }: { space: number; }) {
  return (
    <div style={{marginTop: space ? `${space}px`: '1px', marginBottom: space ? `${space}px` : '1px'}}></div>
  )
}

