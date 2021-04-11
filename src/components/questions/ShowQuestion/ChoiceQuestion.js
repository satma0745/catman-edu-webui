import { Loadable } from 'components/common'

const ChoiceQuestion = ({ isLoading, cost, text, answerOptions = [] }) => (
  <Loadable loaded={!isLoading}>
    <div className="d-flex flex-column">
      <div className="d-flex">
        <div className="bg-primary">{cost}</div>
        <div>{text}</div>
      </div>

      <div className="d-flex flex-column">
        {answerOptions.map(({ id, text: optionText, isCorrect }) => (
          <div key={id}>
            {optionText} ({isCorrect ? 'Правильно' : 'Не правильно'})
          </div>
        ))}
      </div>
    </div>
  </Loadable>
)

export default ChoiceQuestion
