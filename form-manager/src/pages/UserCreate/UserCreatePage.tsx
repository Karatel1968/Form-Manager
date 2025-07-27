import { useNavigate } from 'react-router-dom';
import { createUser } from '../../shared/api/users';
import { Button, message } from 'antd';
import { FormikForm } from './Form';



export const UserCreatePage = () => {
  const { token } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values: UserFormData) => {
    try {
      await createUser(values, token);
      messageApi.success('Пользователь успешно создан');
      navigate('/');
    } catch (error) {
      messageApi.error(error instanceof Error ? error.message : 'Ошибка при создании пользователя');
    }
  };

  return (
    <div className="user-create-page">
      {contextHolder}
      <h1>Создание пользователя</h1>
      <Button type="link" onClick={() => navigate('/')} style={{ marginBottom: 16 }}>
        ← Назад к списку
      </Button>

      <FormikForm onSubmit={handleSubmit} />
    </div>
  );
};