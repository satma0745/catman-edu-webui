import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Loadable } from 'components/common'

const TestsFilter = ({ isLoading, initials, onApply, ...props }) => {
  const [title, setTitle] = useState(initials.title)

  const apply = () => {
    onApply({ title })
  }

  return (
    <Loadable loaded={!isLoading}>
      <Form inline {...props}>
        <Form.Control
          className="mr-2 flex-grow-1"
          type="text"
          placeholder="Название теста"
          defaultValue={initials.title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <Button onClick={() => apply()}>Поиск</Button>
      </Form>
    </Loadable>
  )
}

export default TestsFilter
