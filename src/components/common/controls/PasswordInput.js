import { useState } from 'react'
import { useField } from 'formik'

import { useId } from 'react-id-generator'
import Form from 'react-bootstrap/Form'

const PasswordInput = ({ className, label, ...props }) => {
  const [field, meta] = useField(props)

  const [checkboxId] = useId()

  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)

  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        type={show ? 'text' : 'password'}
        isValid={meta.touched && !meta.error}
        isInvalid={meta.touched && meta.error}
      />
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>

      <Form.Check
        id={checkboxId}
        type="checkbox"
        label="Показать пароль"
        custom
        onChange={toggleShow}
      />
    </Form.Group>
  )
}

export default PasswordInput
