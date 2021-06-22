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
import HomeSwitch from './HomeSwitch'

const PageSwitch = () => (
  <Switch>
    <PublicRoute unsignedOnly exact path="/" render={SignInPage} />

    <PrivateRoute path="/home" render={HomeSwitch} />
    <PrivateRoute path="/testing/results" render={TestingResultsSwitch} />

    <PrivateRoute allowedRoles="Admin" path="/admins" render={AdminsSwitch} />
    <PrivateRoute allowedRoles="Admin" path="/teachers" render={TeachersSwitch} />

    <PrivateRoute allowedRoles={['Admin', 'Teacher']} path="/groups" render={GroupsSwitch} />
    <PrivateRoute allowedRoles={['Admin', 'Teacher']} path="/students" render={StudentsSwitch} />

    <PrivateRoute
      allowedRoles={['Admin', 'Teacher']}
      path="/disciplines"
      render={DisciplinesSwitch}
    />

    <PrivateRoute allowedRoles="Student" path="/testing" render={TestingSwitch} />

    <PublicRoute path="*" render={NotFoundPage} />
  </Switch>
)

export default PageSwitch
