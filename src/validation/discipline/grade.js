import { number } from 'yup'

const grade = () =>
  number()
    .typeError('Номер класса должен быть числом')
    .integer('Номер класса должен быть целым числом')
    .min(1, 'Номер класса не может быть меньше 1')
    .max(11, 'Номер класса не может быть больше 11')

export default grade
