import { Formik, Form, Field } from 'formik';
import { userSchema } from '../../shared/lib/validationSchemas';

export const UserCreatePage = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
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
          <button type="submit">Создать</button>
        </Form>
      )}
    </Formik>
  );
}
