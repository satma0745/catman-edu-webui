import { Route, Redirect, useParams } from 'react-router-dom'
import { useAuth } from 'auth'
import { useSearch } from '../utils'

const PrivateRoute = ({
  adminOnly = false,
  studentOnly = false,
  predicate = () => true,
  render: Component,
  ...rest
}) => {
  if (adminOnly && studentOnly) {
    throw Error('A private route can be either admin-only or student-only but not both')
  }

  const [userInfo] = useAuth()
  const params = useParams()
  const [search] = useSearch()

  if (!userInfo) {
    return <Route {...rest} render={() => <Redirect to="/" />} />
  }

  if ((adminOnly && userInfo.role !== 'Admin') || (studentOnly && userInfo.role !== 'Student')) {
    return <Route {...rest} render={() => <Redirect to="/home" />} />
  }

  if (!predicate({ userInfo, params, search })) {
    return <Route {...rest} render={() => <Redirect to="/home" />} />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PrivateRoute
