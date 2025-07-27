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
      </ul>
    </nav>
  );
};

export default Navigation;