import { Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from 'routing/routes'

import {
  AdminsPage,
  HomePage,
  NotFoundPage,
  SignInPage,
  TestingPage,
  TestingResultsPage,
  TestsPage,
} from 'pages'

import DisciplinesSwitch from './DisciplinesSwitch'
import GroupsSwitch from './GroupsSwitch'
import StudentsSwitch from './StudentsSwitch'

const PageSwitch = () => (
  <Switch>
    <PublicRoute unsignedOnly exact path="/" render={SignInPage} />

    <PrivateRoute path="/home" render={HomePage} />
    <PrivateRoute path="/testingResults" render={TestingResultsPage} />

    <PrivateRoute adminOnly path="/admins" render={AdminsPage} />
    <PrivateRoute adminOnly path="/students" render={StudentsSwitch} />
    <PrivateRoute adminOnly path="/disciplines" render={DisciplinesSwitch} />
    <PrivateRoute adminOnly path="/groups" render={GroupsSwitch} />
    <PrivateRoute adminOnly path="/tests" render={TestsPage} />

    <PrivateRoute studentOnly path="/testing" render={TestingPage} />

    <PublicRoute path="*" render={NotFoundPage} />
  </Switch>
)

export default PageSwitch
