import { Formik, Form, Field } from 'formik';
import { userSchema } from '../../shared/lib/validationSchemas';
import { ErrorMessage } from 'formik';
import { DatePicker, Select, Checkbox, Button } from 'antd';
import type { DatePickerProps } from 'antd';
import {UserFormData} from '../../shared/model/userInterfaces'

const employmentOptions = [
  { value: 'employed', label: 'Работает' },
  { value: 'unemployed', label: 'Не работает' },
  { value: 'student', label: 'Студент' },
];

export const FormikForm = ({ onSubmit }: { onSubmit: (values: UserFormData) => void }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        surName: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        email: '',
        birthDate: '',
        telephone: '',
        employment: '',
        userAgreement: false
      }}
      validationSchema={userSchema}
      onSubmit={onSubmit}
    >
        {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <div>
            <label>Имя</label>
            <Field 
              name="name" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue('name', e.target.value);
                setFieldValue('fullName', `${e.target.value} ${values.surName}`.trim());
              }}
            />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>
           <div className="form-field">
            <label htmlFor="surName">Фамилия*</label>
            <Field
              id="surName"
              name="surName"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue('surName', e.target.value);
                setFieldValue('fullName', `${values.name} ${e.target.value}`.trim());
              }}
            />
            <ErrorMessage name="surName" component="div" className="error-message" />
          </div>
          <div className="form-field">
            <label htmlFor="fullName">Полное имя*</label>
            <Field id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email*</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <label htmlFor="password">Пароль*</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Подтверждение пароля*</label>
            <Field id="confirmPassword" name="confirmPassword" type="password" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <label htmlFor="birthDate">Дата рождения</label>
            <DatePicker
              id="birthDate"
              onChange={(date, dateString) => setFieldValue('birthDate', dateString)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="telephone">Телефон</label>
            <Field id="telephone" name="telephone" placeholder="+79991234567" />
            <ErrorMessage name="telephone" component="div" className="error-message" />
          </div>

          <div className="form-field">
            <label htmlFor="employment">Занятость</label>
            <Select
              id="employment"
              style={{ width: '100%' }}
              options={employmentOptions}
              onChange={(value) => setFieldValue('employment', value)}
            />
          </div>

          <div className="form-field">
            <label>
              <Field name="userAgreement" type="checkbox" as={Checkbox} />
              Я согласен с условиями использования
            </label>
            <ErrorMessage name="userAgreement" component="div" className="error-message" />
          </div>

          <Button 
            type="primary" 
            htmlType="submit" 
            /*disabled={isSubmitting}
            loading={isSubmitting}*/
          >
            Создать пользователя
          </Button>
        </Form>
      )}
    </Formik>
  );
}
