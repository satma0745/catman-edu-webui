import { configureAxios } from './common'
import { signIn } from './auth'
import { deleteDiscipline, getFiltered as getFilteredDisciplines } from './disciplines'

export { configureAxios, signIn, deleteDiscipline, getFilteredDisciplines }
