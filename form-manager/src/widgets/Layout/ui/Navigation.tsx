import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" end>Главная</NavLink>
        </li>
        <li>
          <NavLink to="/user/create">Создать пользователя</NavLink>
        </li>
        {/* Бонус: переключатель форм */}
        <li>
          <NavLink to="/formik">Formik</NavLink>
        </li>
        <li>
          <NavLink to="/hookform">React Hook Form</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;