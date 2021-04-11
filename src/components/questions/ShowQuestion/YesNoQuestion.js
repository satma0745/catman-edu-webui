import { Loadable } from 'components/common'

const YesNoQuestion = ({ isLoading, cost, text, correctAnswer }) => (
  <Loadable loaded={!isLoading}>
    <div className="d-flex flex-column">
      <div className="d-flex">
        <div className="bg-primary">{cost}</div>
        <div>{text}</div>
      </div>

      <div className="d-flex">
        <div>Правильный ответ: {correctAnswer ? 'Да' : 'Нет'}</div>
      </div>
    </div>
  </Loadable>
)

export default YesNoQuestion
