import { Route, Redirect } from 'react-router-dom'
import { useAuth } from 'auth'

const PublicRoute = ({ unsignedOnly = false, render: Component, ...rest }) => {
  const [userInfo] = useAuth()

  if (unsignedOnly && userInfo) {
    return <Route {...rest} render={() => <Redirect to="/home" />} />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PublicRoute
