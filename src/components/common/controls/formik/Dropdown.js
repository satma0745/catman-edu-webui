import { useField } from 'formik'
import Form from 'react-bootstrap/Form'
import Dropdown from '../Dropdown'

const FormikDropdown = ({ className, label, items, ...props }) => {
  const [_, { initialValue, touched, error }, { setValue, setTouched }] = useField(props)

  const onSelect = (id) => {
    if (!touched) {
      setTouched(true)
    }

    setValue(id)
  }

  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>

      <Dropdown
        {...props}
        title={label}
        items={items}
        initialValue={initialValue}
        onSelect={onSelect}
      />

      <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormikDropdown
