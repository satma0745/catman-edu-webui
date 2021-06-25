const DemoCredentials = ({ admin, teacher, student, ...props }) => (
  <div {...props}>
    <p>Вы используете демонстрационную версию приложения</p>

    <div>
      <p className="mb-0">
        В демонстрационной версии приложения пользователю предоставляются публичные аккаунты для
        ознакомления с функцианалом приложения.
      </p>
      <p className="mb-0">
        Данные аккаунты общедоступны и совершённые с их помощью операции могут быть отменены
        администраторами.
      </p>
      <p>Не афишируйте свои личные данные используя публичные аккаунты.</p>
    </div>

    <div>
      {admin.username && admin.password && (
        <p className="mb-0">
          Администратор: {admin.username}, {admin.password}
        </p>
      )}

      {teacher.username && teacher.password && (
        <p className="mb-0">
          Преподаватель: {teacher.username}, {teacher.password}
        </p>
      )}

      {student.username && student.password && (
        <p className="mb-0">
          Учащийся: {student.username}, {student.password}
        </p>
      )}
    </div>
  </div>
)

export default DemoCredentials
