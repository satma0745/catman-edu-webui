import { useField } from 'formik'

import { useId } from 'react-id-generator'
import Form from 'react-bootstrap/Form'

const Checkbox = ({ className, label, ...props }) => {
  const [field, { error }] = useField({ ...props, type: 'checkbox' })

  const [id] = useId()

  return (
    <Form.Group className={className}>
      <Form.Check {...field} {...props} id={id} type="checkbox" custom label={label} />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default Checkbox
