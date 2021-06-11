import { number } from 'yup'

const grade = () =>
  number()
    .typeError('Год обучения должен быть числом')
    .integer('Год обучения должен быть целым числом')
    .min(1, 'Год обучения не может быть меньше 1')
    .max(11, 'Год обучения не может быть больше 11')

export default grade
