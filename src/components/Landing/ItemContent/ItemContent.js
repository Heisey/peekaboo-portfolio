import React from 'react'

import './ItemContent.scss'

export default function ItemContent(props) {

  const { makeTiny, content, temp } = props

  const setClass = () => {
    let statement = ''
    if (!makeTiny) {
      statement += 'ItemContent'
    } else {
      statement += 'ItemContent--active'
      if (temp === 'about') {
        statement += '__About'
      } if (temp === 'contact') {
        statement += '__Contact'
      } if (temp === 'writing') {
        statement += '__Writing'
      } if (temp === 'projects') {
        statement += '__Projects'
      } if (temp === 'sandbox') {
        statement += '__Sandbox'
      }
    }
    return statement;
  }


  return (
    <div className={setClass()}>
      {content}
    </div>
  )
}
