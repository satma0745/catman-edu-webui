import { useState } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'

import ShowTitle from './ShowTitle'
import EditTitle from './EditTitle'

const Title = ({ title, discipline, onSave: save, ...props }) => {
  const [isEdit, setIsEdit] = useState(false)

  const onSave = async (values, formikBag) => {
    await save(values, formikBag)
    setIsEdit(false)
  }

  return (
    <Jumbotron {...props}>
      {isEdit ? (
        <EditTitle title={title} discipline={discipline} onSave={onSave} />
      ) : (
        <ShowTitle title={title} discipline={discipline} onEdit={() => setIsEdit(true)} />
      )}
    </Jumbotron>
  )
}

export default Title
