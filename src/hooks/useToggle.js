import React from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = React.useState(initialValue)

  const toggle = React.useCallback(() => {
    setValue(!value)
  }, [value])

  return [value, toggle]
}

export default useToggle;
