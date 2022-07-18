import React from 'react'
import style from "./notFoundBlock.module.scss"
function NotFoundBlock() {
  return (
    <div className={style.root}>Ничего не найдено :(
      <span>😕</span>
      </div>
  )
}

export default NotFoundBlock