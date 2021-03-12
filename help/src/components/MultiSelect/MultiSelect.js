import React from 'react'

import CM from './styles.pcss'
import Checkbox from '../Checkbox'
import Dropdown from '../Dropdown'

const MultiSelect = ({
  title,
  items,
  selectedItems,
  onChange
}) => {
  function handleItemChange(checked, itemValue) {
    const nextSelectedItems = checked ?
      selectedItems.concat(itemValue) :
      selectedItems.filter((value) => (value !== itemValue))

    onChange(nextSelectedItems)
  }

  const selectedItemTitles = selectedItems.map(
    (selectedItemValue) => items.find(
      ({ value }) => (value === selectedItemValue)
    ).title
  )

  return <Dropdown title={`${title}: (${selectedItemTitles.join(', ')})`}>
    <div className={CM.list}>
      {
        items.map(({ value, title }) => <div key={value} className={CM.item}>
          <Checkbox
            className={CM.item}
            checked={selectedItems.includes(value)}
            data={value}
            onChange={handleItemChange}
          >{title}</Checkbox>
        </div>)
      }
    </div>
  </Dropdown>
}

export default MultiSelect
