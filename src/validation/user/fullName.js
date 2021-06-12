import { string } from 'yup'

const fullName = () => string().max(40, 'ФИО не должно быть длиннее 40 символов')

export default fullName
