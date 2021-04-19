import { Route, Redirect, useParams } from 'react-router-dom'
import { useAuth } from 'auth'
import { useSearch } from '../utils'

const PublicRoute = ({
  unsignedOnly = false,
  predicate = () => true,
  render: Component,
  ...rest
}) => {
  const [userInfo] = useAuth()
  const params = useParams()
  const search = useSearch()

  if (unsignedOnly && userInfo) {
    return <Route {...rest} render={() => <Redirect to="/home" />} />
  }

  if (!predicate({ userInfo, params, search })) {
    return <Route {...rest} render={() => <Redirect to="/home" />} />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PublicRoute
