import { FieldArray, useFormikContext } from 'formik'

import TaughtDisciplines from './Presentation'

const FormikWrapper = () => {
  const { values } = useFormikContext()

  return (
    <FieldArray
      name="taughtDisciplines"
      render={() => <TaughtDisciplines disciplines={values.disciplines} />}
    />
  )
}

export default FormikWrapper
