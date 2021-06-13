import { Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from 'routing/routes'

import { NotFoundPage, SignInPage } from 'pages'

import AdminsSwitch from './AdminsSwitch'
import DisciplinesSwitch from './DisciplinesSwitch'
import GroupsSwitch from './GroupsSwitch'
import StudentsSwitch from './StudentsSwitch'
import TeachersSwitch from './TeachersSwitch'
import TestingSwitch from './TestingSwitch'
import TestingResultsSwitch from './TestingResultsSwitch'
import TestsSwitch from './TestsSwitch'
import HomeSwitch from './HomeSwitch'

const PageSwitch = () => (
  <Switch>
    <PublicRoute unsignedOnly exact path="/" render={SignInPage} />

    <PrivateRoute path="/home" render={HomeSwitch} />
    <PrivateRoute path="/testing/results" render={TestingResultsSwitch} />

    <PrivateRoute adminOnly path="/admins" render={AdminsSwitch} />
    <PrivateRoute adminOnly path="/students" render={StudentsSwitch} />
    <PrivateRoute adminOnly path="/teachers" render={TeachersSwitch} />
    <PrivateRoute adminOnly path="/disciplines" render={DisciplinesSwitch} />
    <PrivateRoute adminOnly path="/groups" render={GroupsSwitch} />
    <PrivateRoute adminOnly path="/tests" render={TestsSwitch} />

    <PrivateRoute studentOnly path="/testing" render={TestingSwitch} />

    <PublicRoute path="*" render={NotFoundPage} />
  </Switch>
)

export default PageSwitch
