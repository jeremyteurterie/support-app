import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/ticketSlice';

// Components
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <Header />
      <h1>Tickets</h1>
    </div>
  );
}
export default Tickets;
