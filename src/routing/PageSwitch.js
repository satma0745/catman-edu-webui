import { Switch } from 'react-router-dom'

import {
  AdminsPage,
  AddDisciplinePage,
  AddGroupPage,
  DisciplinesPage,
  EditDisciplinePage,
  EditGroupPage,
  GroupsPage,
  HomePage,
  NotFoundPage,
  SignInPage,
  StudentsPage,
  TestingPage,
  TestingResultsPage,
  TestsPage,
} from 'pages'
import { PublicRoute, PrivateRoute } from './routes'

const PageSwitch = () => (
  <Switch>
    <PublicRoute unsignedOnly exact path="/" render={SignInPage} />

    <PrivateRoute path="/home" render={HomePage} />
    <PrivateRoute path="/testingResults" render={TestingResultsPage} />

    <PrivateRoute adminOnly path="/admins" render={AdminsPage} />
    <PrivateRoute adminOnly path="/students" render={StudentsPage} />
    <PrivateRoute adminOnly path="/groups/add" render={AddGroupPage} />
    <PrivateRoute adminOnly path="/groups/edit/:id" render={EditGroupPage} />
    <PrivateRoute adminOnly path="/groups" render={GroupsPage} />
    <PrivateRoute adminOnly path="/disciplines/add" render={AddDisciplinePage} />
    <PrivateRoute adminOnly path="/disciplines/edit/:id" render={EditDisciplinePage} />
    <PrivateRoute adminOnly path="/disciplines" render={DisciplinesPage} />
    <PrivateRoute adminOnly path="/tests" render={TestsPage} />

    <PrivateRoute studentOnly path="/testing" render={TestingPage} />

    <PublicRoute path="*" render={NotFoundPage} />
  </Switch>
)

export default PageSwitch
