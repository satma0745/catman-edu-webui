import { string } from 'yup'

const username = () =>
  string()
    .max(30, 'Имя пользователя должно быть не длиннее 30 симоволов')
    .matches(
      /^[a-zA-Z0-9_]*$/,
      'Имя пользователя может содержать только латинские буквы (a-z), цифры (0-9) и знак подчёркивания (_)'
    )

export default username
