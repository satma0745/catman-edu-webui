import { useState } from 'react'

import BSDropdown from 'react-bootstrap/Dropdown'
import BSDropdownButton from 'react-bootstrap/DropdownButton'

const Dropdown = ({ title: defaultTitle, items = [], onSelect: notifyOnSelect, ...props }) => {
  const [title, setTitle] = useState(defaultTitle)

  const onSelect = (key, event) => {
    const text = event.target.innerText
    setTitle(text)

    notifyOnSelect(key)
  }

  return (
    <BSDropdownButton {...props} title={title} onSelect={onSelect}>
      {items.map((text, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <BSDropdown.Item key={index} eventKey={index}>
          {text}
        </BSDropdown.Item>
      ))}
    </BSDropdownButton>
  )
}

export default Dropdown
