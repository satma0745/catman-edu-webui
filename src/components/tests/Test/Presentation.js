import { Loadable } from 'components/common'
import { ShowQuestion } from 'components/questions'

const Test = ({
  className,
  isLoading,
  title,
  discipline = {},
  questions = [],
  onCancel: cancel,
  ...props
}) => (
  <Loadable loaded={!isLoading}>
    <div className={`d-flex flex-column ${className}`} {...props}>
      <div>
        Тест &quot;{title}&quot; по дисциплине &quot;{discipline.title}&quot; ({discipline.grade}й
        класс)
      </div>

      <div>
        {questions.map((question) => (
          <ShowQuestion key={question.id} {...question} />
        ))}
      </div>

      <button type="button" onClick={() => cancel()}>
        Назад
      </button>
    </div>
  </Loadable>
)

export default Test
