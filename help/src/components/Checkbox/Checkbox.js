import React from 'react'

const Checkbox = ({
  checked = false,
  onChange = Function.prototype,
  data,
  children
}) => {
  function handleChange() {
    onChange(!checked, data)
  }

  return <label>
    <input type="checkbox" checked={checked} onChange={handleChange}/>
    <span>{children}</span>
  </label>
}

export default Checkbox
