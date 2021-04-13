import { string } from 'yup'

const itemText = () => string().max(100, 'Текст ответа должен быть не длиннее 100 симоволов')

export default itemText
