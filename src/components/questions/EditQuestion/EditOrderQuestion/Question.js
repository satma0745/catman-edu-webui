import { FieldArray, useFormikContext } from 'formik'
import { array, object } from 'yup'
import { itemText } from 'validation/question'

import id from 'uniqid'

import EditQuestionTemplate from '../EditQuestionTemplate'
import OrderItems from './OrderItems'

const OrderItemsFormikWrapper = () => {
  const { values } = useFormikContext()

  const newOrderItem = () => ({ id: id(), text: '' })

  return (
    <FieldArray
      name="items"
      render={(helpers) => <OrderItems {...helpers} {...values} newOrderItem={newOrderItem} />}
    />
  )
}

const EditOrderQuestion = ({ oldQuestion, onCancel: cancel, onSave: save }) => {
  const onSave = (values, formikBag) =>
    save(
      { ...values, items: values.items.map((item, index) => ({ ...item, orderIndex: index })) },
      formikBag
    )

  return (
    <EditQuestionTemplate
      initialValues={{
        ...oldQuestion,
        items: oldQuestion.items.sort((left, right) => left.orderIndex - right.orderIndex),
      }}
      validationSchema={{
        answerOptions: array().of(
          object().shape({ text: itemText().required('Укажите текст пункта') })
        ),
      }}
      onCancel={cancel}
      onSave={onSave}
    >
      <OrderItemsFormikWrapper />
    </EditQuestionTemplate>
  )
}

export default EditOrderQuestion
