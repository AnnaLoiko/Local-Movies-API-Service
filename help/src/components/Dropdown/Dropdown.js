import React, { useState } from 'react'

import CM from './styles.pcss'

const Dropdown = ({ className = '', title, children }) => {
  const [opened, setOpened] = useState(false)

  function handleTriggerClick() {
    setOpened(!opened)
  }

  return <div className={`${className} ${CM.root} ${opened ? CM.opened : ''}`}>
    <div className={CM.header}>
      <div className={CM.title}>{title}</div>
      <div className={CM.trigger} onClick={handleTriggerClick}/>
    </div>
    {opened && <div className={CM.content}>{children}</div>}
  </div>
}

export default Dropdown
