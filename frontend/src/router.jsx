import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Components
import PrivateRoute from './components/PrivateRoute';

// pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NewTicket from './pages/NewTicket';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/new-ticket" element={<PrivateRoute />}>
        <Route path="/new-ticket" element={<NewTicket />} />
      </Route>
    </>
  )
);

const Router = () => {
  return <RouterProvider router={Routes} />;
};

export default Router;
