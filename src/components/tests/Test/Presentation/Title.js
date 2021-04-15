const Title = ({ title, discipline }) => (
  <div>
    <h2>Тест &quot;{title}&quot;</h2>
    <h4>
      По дисциплине &quot;{discipline.title}&quot; ({discipline.grade}й класс)
    </h4>
  </div>
)

export default Title
