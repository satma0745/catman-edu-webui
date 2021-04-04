import { string } from 'yup'

const title = () => string().max(5, 'Название группы должно быть не длиннее 5 симоволов')

export default title
