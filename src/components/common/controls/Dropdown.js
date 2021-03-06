import { useState, useEffect } from 'react'

import BSDropdown from 'react-bootstrap/Dropdown'
import BSDropdownButton from 'react-bootstrap/DropdownButton'

const Dropdown = ({
  title: defaultTitle,
  items = [],
  initialValue,
  onSelect: select,
  ...props
}) => {
  const [title, setTitle] = useState(defaultTitle)

  useEffect(() => {
    const text = items[initialValue]
    if (text) {
      setTitle(text)
    }
  }, [initialValue, items, setTitle])

  const onSelect = (key, event) => {
    const text = event.target.innerText
    setTitle(text)

    if (Array.isArray(items)) {
      const index = Number.parseInt(key, 10)
      select(index)
    } else {
      select(key)
    }
  }

  return (
    <BSDropdownButton {...props} title={title} onSelect={onSelect}>
      {Object.entries(items).map(([key, text]) => (
        <BSDropdown.Item key={key} eventKey={key}>
          {text}
        </BSDropdown.Item>
      ))}
    </BSDropdownButton>
  )
}

export default Dropdown
