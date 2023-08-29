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
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/new-ticket" element={<PrivateRoute />}>
        <Route path="/new-ticket" element={<NewTicket />} />
      </Route>
      <Route path="/tickets" element={<PrivateRoute />}>
        <Route path="/tickets" element={<Tickets />} />
      </Route>
      <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
        <Route path="/ticket/:ticketId" element={<Ticket />} />
      </Route>
    </>
  )
);

const Router = () => {
  return <RouterProvider router={Routes} />;
};

export default Router;
