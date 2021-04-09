import { string } from 'yup'

const title = () => string().max(250, 'Название теста не должно быть длиннее 250 символов')

export default title
