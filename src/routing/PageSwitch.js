import { Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes'

import {
  AdminsPage,
  DisciplinesPage,
  EditDisciplinePage,
  GroupsPage,
  HomePage,
  NotFoundPage,
  SignInPage,
  StudentsPage,
  TestingPage,
  TestingResultsPage,
  TestsPage,
} from '../pages'

const PageSwitch = () => (
  <Switch>
    <PublicRoute unsignedOnly exact path="/" render={SignInPage} />

    <PrivateRoute path="/home" render={HomePage} />
    <PrivateRoute path="/testingResults" render={TestingResultsPage} />

    <PrivateRoute adminOnly path="/admins" render={AdminsPage} />
    <PrivateRoute adminOnly path="/students" render={StudentsPage} />
    <PrivateRoute adminOnly path="/groups" render={GroupsPage} />
    <PrivateRoute adminOnly path="/disciplines/edit/:id" render={EditDisciplinePage} />
    <PrivateRoute adminOnly path="/disciplines" render={DisciplinesPage} />
    <PrivateRoute adminOnly path="/tests" render={TestsPage} />

    <PrivateRoute studentOnly path="/testing" render={TestingPage} />

    <PublicRoute path="*" render={NotFoundPage} />
  </Switch>
)

export default PageSwitch
