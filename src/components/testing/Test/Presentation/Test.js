import { Formik, Form } from 'formik'

import Button from 'react-bootstrap/Button'
import { Loadable } from 'components/common'
import QuestionsList from './QuestionsList'

import { testInitialValues } from './utils'

const Test = ({ isLoading, test = { questions: [] }, onCancel, onSubmit, ...props }) => (
  <Loadable loaded={!isLoading}>
    <div {...props}>
      <h1>{test.title}</h1>

      <Formik initialValues={testInitialValues(test)} onSubmit={onSubmit}>
        <Form>
          <QuestionsList className="my-4" />

          <div className="d-flex justify-content-between">
            <Button variant="outline-primary" onClick={onCancel}>
              Отменить
            </Button>
            <Button variant="primary" type="submit">
              Отправить
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  </Loadable>
)

export default Test
