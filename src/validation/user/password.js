import { string } from 'yup'

const password = () => string().max(10, 'Пароль пользователя должен быть не длиннее 10 симоволов')

export default password
