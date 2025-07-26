import { UserCreatePage } from "../pages/UserCreate/UserCreatePage";
import type {Routes} from 'react-router-dom';
import { Route } from "react-router-dom";
import Layout from "../widgets/Layout/Layout";
import { FC } from "react";
import HomePage from "../pages/HomePage/HomePage";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        /*<Route index element={<HomePage />} />
        <Route path="user/create" element={<UserCreatePage />} />
      </Route>*/
    </Routes>
  );
};

export default AppRoutes;