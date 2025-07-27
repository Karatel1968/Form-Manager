import { UserCreatePage } from '../pages/UserCreate/UserCreatePage';
import {Routes} from 'react-router-dom';
import { Route } from "react-router-dom";
import Layout from "../widgets/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";

function AppRoutes() {
  return (  
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="user/create" element={<UserCreatePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;