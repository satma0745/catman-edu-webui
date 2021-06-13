import { Route, Redirect } from 'react-router-dom'
import { useAuth } from 'auth'

const roleRequirementMet = (allowedRoles, role) => {
  if (typeof allowedRoles === 'string') {
    return allowedRoles === role
  }

  if (Array.isArray(allowedRoles)) {
    return allowedRoles.includes(role)
  }

  throw new Error(`Allowed roles must be an array or a string but got ${typeof allowedRoles}`)
}

const PrivateRoute = ({
  allowedRoles = ['Admin', 'Teacher', 'Student'],
  render: Component,
  ...rest
}) => {
  const [userInfo] = useAuth()

  if (!userInfo) {
    return <Route {...rest} render={() => <Redirect to="/" />} />
  }

  if (!roleRequirementMet(allowedRoles, userInfo.role)) {
    return <Route {...rest} render={() => <Redirect to="/home" />} />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PrivateRoute
