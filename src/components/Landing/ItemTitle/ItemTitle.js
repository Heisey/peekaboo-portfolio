import React, { useState } from 'react'

import './ItemTitle.scss'

export default function ItemTitle(props) {
  const { isActive, temp } = props


  return (
    <div className={`ItemTitle ${isActive && "ItemTitle--active"}`}>
      {temp}
    </div>
  )
}
