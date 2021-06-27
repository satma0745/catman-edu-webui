import DemoCredentials from './Presentation'

const admin = {
  username: process.env.REACT_APP_DEMO_ADMIN_USERNAME,
  password: process.env.REACT_APP_DEMO_ADMIN_PASSWORD,
  get presented() {
    return this.username && this.password
  },
}

const teacher = {
  username: process.env.REACT_APP_DEMO_TEACHER_USERNAME,
  password: process.env.REACT_APP_DEMO_TEACHER_PASSWORD,
  get presented() {
    return this.username && this.password
  },
}

const student = {
  username: process.env.REACT_APP_DEMO_STUDENT_USERNAME,
  password: process.env.REACT_APP_DEMO_STUDENT_PASSWORD,
  get presented() {
    return this.username && this.password
  },
}

const isDemo =
  process.env.REACT_APP_IS_DEMO && (admin.presented || teacher.presented || student.presented)

const EnvironmentWrapper = (props) =>
  isDemo ? <DemoCredentials {...props} admin={admin} teacher={teacher} student={student} /> : <></>

export default EnvironmentWrapper
