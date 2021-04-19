import { Route, Redirect } from 'react-router-dom'
import { useAuth } from 'auth'

const PrivateRoute = ({ adminOnly = false, studentOnly = false, render: Component, ...rest }) => {
  if (adminOnly && studentOnly) {
    throw Error('A private route can be either admin-only or student-only but not both')
  }

  const [userInfo] = useAuth()

  if (!userInfo) {
    return <Route {...rest} render={() => <Redirect to="/" />} />
  }

  if ((adminOnly && userInfo.role !== 'Admin') || (studentOnly && userInfo.role !== 'Student')) {
    return <Route {...rest} render={() => <Redirect to="/home" />} />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PrivateRoute
