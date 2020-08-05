import React from 'react'

import ItemContent from '../ItemContent/ItemContent'
import ItemTitle from '../ItemTitle/ItemTitle'

import './Item.scss'

export default function Item(props) {
  const { background, handleTransition, isActive, content, isFirst, isLast, makeTiny, temp } = props

  const setParentClass = () => {
    if (makeTiny && !isActive) {
      return `Item ${background} Item--tiny`
    } else if (makeTiny && isActive) {
      return `Item ${background} Item--big`
    } else {
      return `Item ${background}`
    }
  }

  return (
    <div className={setParentClass()} id={background} onClick={handleTransition}>
      {/* {isFirst && <span className="item__A--title item-link-b">Nicole</span>} */}
      {!makeTiny && <ItemTitle isActive={isActive} temp={temp} />}
      <ItemContent
        content={content}
        makeTiny={makeTiny} />
      {isLast && <span className="item__E--title item-link-b">Nicole Ticknor</span>}
    </div>
  )
}
