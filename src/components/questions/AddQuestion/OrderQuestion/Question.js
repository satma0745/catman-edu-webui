import { FieldArray, useFormikContext } from 'formik'
import { array, object } from 'yup'
import { itemText } from 'validation/question'

import id from 'uniqid'

import AddQuestionTemplate from '../AddQuestionTemplate'
import OrderItems from './OrderItems'

const OrderItemsFormikWrapper = () => {
  const { values } = useFormikContext()

  const newOrderItem = () => ({ id: id(), text: '' })

  return (
    <FieldArray
      name="items"
      render={(helpers) => (
        <OrderItems helpers={helpers} values={values} newOrderItem={newOrderItem} />
      )}
    />
  )
}

const AddOrderQuestion = ({ onCancel, onSave: save, ...props }) => (
  <AddQuestionTemplate
    {...props}
    initialValues={{ items: [] }}
    validationSchema={{
      items: array().of(object().shape({ text: itemText().required('Укажите текст пункта') })),
    }}
    onCancel={onCancel}
    onSave={(values, formikBag) =>
      save(
        { ...values, items: values.items.map((item, index) => ({ ...item, orderIndex: index })) },
        formikBag
      )
    }
  >
    <OrderItemsFormikWrapper />
  </AddQuestionTemplate>
)

export default AddOrderQuestion
