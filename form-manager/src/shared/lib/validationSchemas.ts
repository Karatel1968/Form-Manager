import * as Yup from 'yup';

const phoneRegExp = /^\+?[0-9]{11,15}$/;

export const userSchema = Yup.object().shape({
  name: Yup.string().max(64, 'Максимум 64 символа').required('Обязательное поле'),
  surName: Yup.string().max(64, 'Максимум 64 символа').required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),
  fullName: Yup.string().max(130, 'Максимум 130 символов').required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  birthDate: Yup.date().nullable(),
  telephone: Yup.string().matches(phoneRegExp, 'Некорректный номер телефона').nullable(),
  employment: Yup.string().nullable(),
  userAgreement: Yup.boolean()
});