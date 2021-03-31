import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../auth'

const PrivateRoute = ({ adminOnly = false, studentOnly = false, render: Component, ...rest }) => {
  if (adminOnly && studentOnly) {
    throw Error('A private route can be either admin-only or student-only but not both')
  }

  const [userInfo] = useAuth()

  // unauthorized
  if (!userInfo) {
    return <Route {...rest} render={() => <Redirect to="/" />} />
  }

  if (
    (!adminOnly && !studentOnly) || // no role requirements
    (adminOnly && userInfo.role === 'Admin') || // role requirement is met
    (studentOnly && userInfo.role === 'Student') // role requirement is met
  ) {
    return <Route {...rest} render={(props) => <Component {...props} />} />
  }

  // unmet role requirement
  return <Route {...rest} render={() => <Redirect to="/home" />} />
}

export default PrivateRoute
