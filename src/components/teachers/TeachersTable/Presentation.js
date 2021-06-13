import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Loadable, Pagination } from 'components/common'

const TeachersTable = ({
  isLoading,
  className,
  teachers = [],
  pageNumber,
  pagesCount,
  onPageChange,
  onEdit: edit,
  onDelete: $delete,
  ...props
}) => (
  <Loadable loaded={!isLoading}>
    <div className={className}>
      <Table {...props} striped bordered hover>
        <thead>
          <tr>
            <th>ФИО преподавателя</th>
            <th>Имя пользователя</th>
            <th>Операции</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(({ id, fullName, username }) => (
            <tr key={id}>
              <td className="align-middle">{fullName}</td>
              <td className="align-middle">{username}</td>
              <td>
                <Form inline className="justify-content-around">
                  <Button variant="outline-primary" onClick={() => edit(id)}>
                    Изменить
                  </Button>
                  <Button variant="outline-danger" onClick={() => $delete(id)}>
                    Удалить
                  </Button>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center">
        <Pagination
          selectedPageNumber={pageNumber}
          pagesCount={pagesCount}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  </Loadable>
)

export default TeachersTable
