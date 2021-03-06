import { Loadable } from 'components/common'

const StudentTest = ({
  studentLoaded,
  student = {},
  groupLoaded,
  group = {},
  disciplineLoaded,
  discipline = {},
  resultLoaded,
  result = {},
  ...props
}) => (
  <div {...props}>
    <Loadable loaded={studentLoaded && groupLoaded}>
      <p>
        Учащийся: {student.fullName} ({group.title})
      </p>
    </Loadable>

    <Loadable loaded={disciplineLoaded}>
      <p>
        Дисциплина: &quot;{discipline.title} ({discipline.grade}й год обучения)&quot;
      </p>
    </Loadable>

    <Loadable loaded={resultLoaded}>
      <p>Название теста: {result.testTitle}.</p>
      <p>
        Балл:
        {result.actualScore} из {result.maxScore}.
      </p>
      <p>Степень усвоения: {Math.round((result.actualScore * 100) / result.maxScore)}%.</p>
    </Loadable>
  </div>
)

export default StudentTest
