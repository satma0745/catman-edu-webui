import { useField } from 'formik'
import Form from 'react-bootstrap/Form'

const Input = ({ className, label, validate = true, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        isValid={validate && meta.touched && !meta.error}
        isInvalid={validate && meta.touched && meta.error}
      />
      {validate && <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>}
    </Form.Group>
  )
}

export default Input
