import { Formik, Form, Field } from 'formik';
import { userSchema } from '../../shared/lib/validationSchemas';

export const FormikForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
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

    </Formik>
  );
}
