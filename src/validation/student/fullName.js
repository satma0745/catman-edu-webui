import { string } from 'yup'

const fullName = () => string().max(40, 'ФИО учащегося не должно быть длиннее 40 символов')

export default fullName
