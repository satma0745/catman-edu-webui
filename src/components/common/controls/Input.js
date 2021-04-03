import { useField } from 'formik'
import Form from 'react-bootstrap/Form'

const Input = ({ className, label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        isValid={meta.touched && !meta.error}
        isInvalid={meta.touched && meta.error}
      />
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default Input
