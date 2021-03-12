import React, { useState } from 'react'

import CM from './styles.pcss'
import MultiSelect from '../MultiSelect'

const App = () => {
  const [colors, setColors] = useState([
    {
      value: '1',
      title: 'Red'
    },
    {
      value: '2',
      title: 'Green'
    },
    {
      value: '3',
      title: 'Blue'
    }
  ])
  const [selectedColors, setSelectedColors] = useState(['2'])

  function handleSelectedColorsChange(nextSelectedColors) {
    setSelectedColors(nextSelectedColors)
  }

  return <div className={CM.multiselect}>
    <MultiSelect
      title="Select colors"
      items={colors}
      selectedItems={selectedColors}
      onChange={handleSelectedColorsChange}
    />
  </div>
}

export default App
