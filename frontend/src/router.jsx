import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </>
  )
);

const Router = () => {
  return <RouterProvider router={Routes} />;
};

export default Router;
