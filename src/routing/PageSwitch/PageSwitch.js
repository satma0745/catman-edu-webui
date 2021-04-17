import { Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from 'routing/routes'

import { HomePage, NotFoundPage, SignInPage, TestingResultsPage } from 'pages'

import AdminsSwitch from './AdminsSwitch'
import DisciplinesSwitch from './DisciplinesSwitch'
import GroupsSwitch from './GroupsSwitch'
import StudentsSwitch from './StudentsSwitch'
import TestingSwitch from './TestingSwitch'
import TestsSwitch from './TestsSwitch'

const PageSwitch = () => (
  <Switch>
    <PublicRoute unsignedOnly exact path="/" render={SignInPage} />

    <PrivateRoute path="/home" render={HomePage} />
    <PrivateRoute path="/testingResults" render={TestingResultsPage} />

    <PrivateRoute adminOnly path="/admins" render={AdminsSwitch} />
    <PrivateRoute adminOnly path="/students" render={StudentsSwitch} />
    <PrivateRoute adminOnly path="/disciplines" render={DisciplinesSwitch} />
    <PrivateRoute adminOnly path="/groups" render={GroupsSwitch} />
    <PrivateRoute adminOnly path="/tests" render={TestsSwitch} />

    <PrivateRoute studentOnly path="/testing" render={TestingSwitch} />

    <PublicRoute path="*" render={NotFoundPage} />
  </Switch>
)

export default PageSwitch
