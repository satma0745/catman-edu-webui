import { string } from 'yup'

const title = () => string().max(30, 'Название дисциплины должно быть не длиннее 30 симоволов')

export default title
