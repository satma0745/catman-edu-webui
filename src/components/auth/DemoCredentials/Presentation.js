import Table from 'react-bootstrap/Table'

const DemoCredentials = ({ admin, teacher, student, ...props }) => (
  <div {...props}>
    <p>
      В <b>демо</b>-версии вам доступны следующие пебличные аккаунты для ознакомления с функциями
      приложения:
    </p>

    <Table responsive="xl">
      <thead>
        <tr>
          <th>Роль</th>
          <th>Логин</th>
          <th>Пароль</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Учащийся</td>
          <td>{student.username}</td>
          <td>{student.password}</td>
        </tr>
        <tr>
          <td>Преподаватель</td>
          <td>{teacher.username}</td>
          <td>{teacher.password}</td>
        </tr>
        <tr>
          <td>Администратор</td>
          <td>{admin.username}</td>
          <td>{admin.password}</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default DemoCredentials
