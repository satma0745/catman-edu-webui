import { configureAxios } from './common'
import { signIn } from './auth'
import {
  deleteDiscipline,
  getDiscipline,
  getFiltered as getFilteredDisciplines,
  updateDiscipline,
} from './disciplines'

export {
  configureAxios,
  signIn,
  deleteDiscipline,
  getDiscipline,
  getFilteredDisciplines,
  updateDiscipline,
}
