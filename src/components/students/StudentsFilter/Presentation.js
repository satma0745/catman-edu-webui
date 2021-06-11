import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Dropdown } from 'components/common/controls'

import { Loadable } from 'components/common'

const StudentsFilter = ({ isLoading, initials, groups, onApply, ...props }) => {
  const [groupId, setGroupId] = useState(initials.groupId)
  const [fullName, setFullName] = useState(initials.fullName)

  const onGroupSelect = (selectedGroupId) => {
    setGroupId(selectedGroupId !== 'any' ? selectedGroupId : undefined)
  }

  const apply = () => {
    onApply({ groupId, fullName })
  }

  return (
    <Loadable loaded={!isLoading}>
      <Form inline {...props}>
        <Dropdown
          className="mr-2"
          variant="outline-primary"
          title="Выберите группу"
          items={groups}
          initialValue={initials.groupId}
          onSelect={onGroupSelect}
        />

        <Form.Control
          className="mr-2 flex-grow-1"
          type="text"
          placeholder="ФИО учащегося"
          defaultValue={initials.fullName}
          onChange={(event) => setFullName(event.target.value)}
        />

        <Button onClick={() => apply()}>Поиск</Button>
      </Form>
    </Loadable>
  )
}

export default StudentsFilter
