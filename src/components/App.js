import { Switch, Route } from 'react-router-dom'
import { HomePage, SignInPage } from '../pages'

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/home" render={HomePage} />
      <Route path="/" render={SignInPage} />
    </Switch>
  </div>
)

export default App
