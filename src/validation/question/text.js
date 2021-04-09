import { string } from 'yup'

const text = () => string().max(10000, 'Текст вопроса должен быть не длиннее 10000 симоволов')

export default text
