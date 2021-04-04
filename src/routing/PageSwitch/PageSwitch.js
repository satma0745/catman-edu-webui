import { Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from 'routing/routes'

import {
  AdminsPage,
  HomePage,
  NotFoundPage,
  SignInPage,
  StudentsPage,
  TestingPage,
  TestingResultsPage,
  TestsPage,
} from 'pages'

import DisciplinesSwitch from './DisciplinesSwitch'
import GroupsSwitch from './GroupsSwitch'

const PageSwitch = () => (
  <Switch>
    <PublicRoute unsignedOnly exact path="/" render={SignInPage} />

    <PrivateRoute path="/home" render={HomePage} />
    <PrivateRoute path="/testingResults" render={TestingResultsPage} />

    <PrivateRoute adminOnly path="/admins" render={AdminsPage} />
    <PrivateRoute adminOnly path="/students" render={StudentsPage} />
    <PrivateRoute adminOnly path="/disciplines" render={DisciplinesSwitch} />
    <PrivateRoute adminOnly path="/groups" render={GroupsSwitch} />
    <PrivateRoute adminOnly path="/tests" render={TestsPage} />

    <PrivateRoute studentOnly path="/testing" render={TestingPage} />

    <PublicRoute path="*" render={NotFoundPage} />
  </Switch>
)

export default PageSwitch
