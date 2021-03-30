import { Switch, Route } from 'react-router-dom'
import { HomePage, SignInPage } from '../pages'

import Header from './layout/Header'

const App = () => (
  <div className="app">
    <Header />

    <Switch>
      <Route path="/home" render={HomePage} />
      <Route path="/" render={SignInPage} />
    </Switch>
  </div>
)

export default App
