import { configureAxios } from './common'
import { signIn } from './auth'
import {
  addDiscipline,
  deleteDiscipline,
  getDiscipline,
  getFiltered as getFilteredDisciplines,
  updateDiscipline,
} from './disciplines'

export {
  configureAxios,
  signIn,
  addDiscipline,
  deleteDiscipline,
  getDiscipline,
  getFilteredDisciplines,
  updateDiscipline,
}
