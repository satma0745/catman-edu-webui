import Card from 'react-bootstrap/Card'
import { Checkbox } from 'components/common/controls/formik'

const YesNoQuestion = ({ name, question: { cost, text }, ...props }) => (
  <Card {...props}>
    <Card.Header>
      <div className="d-flex align-items-center">
        <div className="bg-primary py-1 px-2 text-light rounded">{cost}</div>
        <div className="ml-2">{text}</div>
      </div>
    </Card.Header>

    <Card.Body>
      <Checkbox className="mb-0" label="Правильно" name={`${name}.givenAnswer`} />
    </Card.Body>
  </Card>
)

export default YesNoQuestion
